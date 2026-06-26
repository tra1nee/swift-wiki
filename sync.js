// ─────────────────────────────────────────────────────────────
//  Синхронизация прогресса через Firebase (Auth + Firestore).
//  Включается автоматически, когда заполнен firebase-config.js.
//  Если не настроено — тихо отключается, сайт работает на localStorage.
//
//  Данные каждого пользователя лежат в users/{uid} и доступны
//  только владельцу (см. правила в SETUP.md). У других — свой uid → свой прогресс.
// ─────────────────────────────────────────────────────────────
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged }
  from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore, doc, getDoc, setDoc }
  from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const cfg = window.FIREBASE_CONFIG || {};
const enabled = !!cfg.apiKey && !String(cfg.apiKey).includes("PASTE");

window.WikiSync = { enabled, _user: null, signIn() {}, signOut() {}, async save() {} };

if (enabled) {
  try {
    const app = initializeApp(cfg);
    const auth = getAuth(app);
    const db = getFirestore(app);
    const provider = new GoogleAuthProvider();

    window.WikiSync.signIn = () =>
      signInWithPopup(auth, provider).catch(e => alert("Не удалось войти: " + e.message));
    window.WikiSync.signOut = () => signOut(auth);
    window.WikiSync.save = async (data) => {
      const u = auth.currentUser; if (!u) return;
      try { await setDoc(doc(db, "users", u.uid), { ...data, updatedAt: Date.now() }); }
      catch (e) { console.warn("sync: save failed", e); }
    };

    onAuthStateChanged(auth, async (user) => {
      window.WikiSync._user = user;
      if (user) {
        let cloud = null;
        try { const snap = await getDoc(doc(db, "users", user.uid)); cloud = snap.exists() ? snap.data() : null; }
        catch (e) { console.warn("sync: load failed", e); }
        window.dispatchEvent(new CustomEvent("wiki-signed-in", { detail: { user, cloud } }));
      } else {
        window.dispatchEvent(new Event("wiki-signed-out"));
      }
    });
  } catch (e) {
    console.warn("sync: Firebase init failed", e);
    window.WikiSync.enabled = false;
  }
}

window.dispatchEvent(new Event("wiki-sync-ready"));
