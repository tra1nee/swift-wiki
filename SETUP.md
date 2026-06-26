# ☁️ Настройка синхронизации (Firebase) — ~5 минут

Чтобы прогресс (журнал занятий, выученные карточки, активность) был **одинаковым на всех устройствах** и виден **только тебе**, подключаем Firebase. Бесплатно. У каждого, кто войдёт, — свой отдельный прогресс по его Google-аккаунту.

## Шаги в консоли Firebase

1. Зайди на **https://console.firebase.google.com** → **Add project** (а если это твой первый проект — большая карточка **«Get started by setting up a Firebase project»**). Имя любое, напр. `swift-wiki`. Google Analytics можно отключить.
2. **Build → Authentication → Get started → Sign-in method → Google → Enable → Save.**
3. **Authentication → Settings → Authorized domains → Add domain** → добавь `tra1nee.github.io` (домен `localhost` обычно уже в списке).
4. **Build → Firestore Database → Create database → Production mode** → выбери регион (например `eur3`).
5. Вкладка **Firestore → Rules** → вставь правила ниже → **Publish**:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```
> Эти правила = «каждый читает/пишет только свой документ». Чужие данные недоступны.

6. **⚙️ Project settings → General → Your apps.** Раздел пустой — нажми иконку **Web `</>`** (среди iOS/Android/Web/Flutter). Введи nickname (напр. `swift-wiki-web`), **галочку «Also set up Firebase Hosting» НЕ ставь** → **Register app**. После регистрации появится блок с `const firebaseConfig = {...}` — это он. (Потом конфиг всегда там же → твоё web-app → SDK setup and configuration → Config.)

## Вставь конфиг

Открой [firebase-config.js](firebase-config.js) и замени значения на свои (нужны минимум `apiKey`, `authDomain`, `projectId`, `appId`):

```js
window.FIREBASE_CONFIG = {
  apiKey: "AIza...",
  authDomain: "swift-wiki-xxxx.firebaseapp.com",
  projectId: "swift-wiki-xxxx",
  appId: "1:...:web:..."
};
```

> Эти значения **публичны по дизайну** — их безопасно коммитить. Доступ к данным защищён входом и правилами, а не секретностью ключа.

## Обнови live-сайт

Из папки `learning/wiki`:
```bash
git add firebase-config.js && git commit -m "включить синхронизацию" && git push
```
…или просто пришли мне конфиг сообщением — я вставлю и задеплою.

## Готово

На сайте появится кнопка **«☁️ Войти через Google»**. После входа данные с этого устройства сольются с облаком, и на любом другом устройстве после входа тем же аккаунтом будет тот же прогресс.

> Локальная версия (файл `index.html` через `file://`) синхронизироваться не будет — вход Google работает на live-сайте https://tra1nee.github.io/swift-wiki/ . Для синхронизации между устройствами пользуйся им.
