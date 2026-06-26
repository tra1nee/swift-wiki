/*
  Контент личной вики (Swift + iOS, по фазам обучения).
  Запись:
  {
    id, title, phase (id из PHASES), category, tags:[],
    summary, body (можно <code>,<b>), code (Swift),
    when, gotcha, quiz (тема для «матч: <quiz>»)
  }
  Добавить тему — просто допиши объект в WIKI_DATA. Добавить видео в блок — в PHASES.
*/

// Фазы-блоки (как в роадмапе) + видео-лекции/плейлисты для каждого блока
const PHASES = [
  { id: "base", title: "🧱 База разработчика", desc: "Фундамент, нужный не только для iOS.",
    videos: [] },
  { id: "p1", title: "🥈 Фаза 1 — Swift (язык)", desc: "Основа всей экосистемы.",
    videos: [
      { label: "🎥 Ян Соломеин — Основы Swift (плейлист)", url: "https://www.youtube.com/playlist?list=PLJfJvphK-POw9XUdsXjKPNQvSPf2hXgRJ" },
      { label: "🎥 Stepik — Программирование на Swift", url: "https://stepik.org/course/172515/promo" }
    ] },
  { id: "p2", title: "🥇 Фаза 2 — SwiftUI", desc: "Декларативный UI для новых приложений.",
    videos: [
      { label: "🎥 Stepik — Swift и iOS SwiftUI", url: "https://stepik.org/course/198362/promo" },
      { label: "🎥 Школа моб. разработки Яндекса", url: "https://www.youtube.com/playlist?list=PLQC2_0cDcSKBNCR8UWeElzCUuFkXASduz" },
      { label: "🎥 Sean Allen — SwiftUI Bootcamp (EN, суб. RU)", url: "https://www.youtube.com/playlist?list=PLwvDm4VfkdphqETTBf-DdjCoAvhai1QpO" },
      { label: "🎥 CodeWithChris — SwiftUI (EN)", url: "https://www.youtube.com/playlist?list=PLMRqhzcHGw1Z-lZaaun3A3mV9PbEfHANI" },
      { label: "🎓 Stanford CS193p (EN)", url: "https://cs193p.stanford.edu/" }
    ] },
  { id: "p3", title: "💠 Фаза 3 — Сеть, данные, многопоточность", desc: "Загрузка данных, хранение, async/await.",
    videos: [
      { label: "🎥 Школа моб. разработки Яндекса", url: "https://www.youtube.com/playlist?list=PLQC2_0cDcSKBNCR8UWeElzCUuFkXASduz" },
      { label: "🎥 Sean Allen (канал: networking, async/await)", url: "https://www.youtube.com/channel/UCbTw29mcP12YlTt1EpUaVJw" }
    ] },
  { id: "p4", title: "💎 Фаза 4 — Архитектура и тесты", desc: "MVVM, Clean, DI, тестирование.",
    videos: [
      { label: "🎓 Stanford CS193p — архитектура/MVVM (EN)", url: "https://cs193p.stanford.edu/" },
      { label: "🎥 Sean Allen (канал: MVVM, тесты)", url: "https://www.youtube.com/channel/UCbTw29mcP12YlTt1EpUaVJw" }
    ] },
  { id: "p5", title: "🔮 Фаза 5 — UIKit", desc: "Императивный UI — нужен для рынка и легаси.",
    videos: [
      { label: "🎥 Алексей Скутаренко — UIKit", url: "https://www.youtube.com/user/AlexSkutarenko" },
      { label: "🎥 Школа моб. разработки Яндекса", url: "https://www.youtube.com/playlist?list=PLQC2_0cDcSKBNCR8UWeElzCUuFkXASduz" }
    ] },
  { id: "p6", title: "🛠️ Фаза 6 — Инструменты и дебаг", desc: "Instruments, Git, профилирование.",
    videos: [
      { label: "🎥 Sean Allen (канал: Xcode tips, debugging)", url: "https://www.youtube.com/channel/UCbTw29mcP12YlTt1EpUaVJw" }
    ] },
  { id: "p7", title: "👑 Фаза 7 — Портфолио и найм", desc: "Резюме, собесы, публикация.",
    videos: [
      { label: "🎥 Sean Allen (канал: iOS interview, карьера)", url: "https://www.youtube.com/channel/UCbTw29mcP12YlTt1EpUaVJw" },
      { label: "🎥 Nemson — резюме/собесы (RU)", url: "https://www.youtube.com/@nemson1" }
    ] }
];

const WIKI_DATA = [
  // ═══ ФАЗА 1 — SWIFT ═══
  {
    id: "let-vs-var", title: "let и var — константы и переменные", phase: "p1",
    category: "Основы", tags: ["let", "var", "константа", "переменная", "immutability"],
    summary: "let — нельзя переприсвоить, var — можно. По умолчанию бери let.",
    body: "<code>let</code> создаёт константу (значение фиксируется), <code>var</code> — переменную. По умолчанию используй <code>let</code>: код безопаснее, компилятор ловит случайные изменения.",
    code: "let pi = 3.14      // нельзя менять\nvar score = 0      // можно\nscore += 10",
    when: "Всегда. let — пока не понадобилось менять значение.",
    gotcha: "Объявил var, но не меняешь — компилятор предложит let.", quiz: "синтаксис"
  },
  {
    id: "basic-types", title: "Базовые типы: Int, Double, String, Bool", phase: "p1",
    category: "Основы", tags: ["Int", "Double", "String", "Bool", "типы"],
    summary: "Целые, дробные, строки, логические. Swift строго типизирован.",
    body: "<code>Int</code> — целое, <code>Double</code> — дробное, <code>String</code> — строка, <code>Bool</code> — true/false. Неявных преобразований нет.",
    code: "let age: Int = 30\nlet height: Double = 1.85\nlet x = Double(age) + height  // нужно явно",
    when: "Везде. Тип выбирается под смысл данных.",
    gotcha: "7 / 2 == 3 (целочисленное). Нужен Double: 7.0 / 2 == 3.5.", quiz: "синтаксис"
  },
  {
    id: "type-inference", title: "Вывод типов и аннотации", phase: "p1",
    category: "Основы", tags: ["type inference", "аннотация", "вывод типов"],
    summary: "Компилятор сам выводит тип из значения; можно указать явно.",
    body: "Чаще тип писать не нужно — Swift выведет из значения. Аннотация <code>: Type</code> нужна, когда значение не задаётся сразу.",
    code: "let count = 5          // Int\nlet ratio = 5.0        // Double\nvar title: String      // аннотация без значения",
    when: "Аннотация — когда инициализация позже или тип неочевиден.",
    gotcha: "let x = 5 — это Int. Для Double: let x = 5.0.", quiz: "синтаксис"
  },
  {
    id: "string-interpolation", title: "Интерполяция строк", phase: "p1",
    category: "Основы", tags: ["строки", "interpolation", "интерполяция"],
    summary: "Вставка значений в строку через \\(...).",
    body: "Подставляй любое выражение прямо в строку через <code>\\(...)</code> — удобнее склейки через +.",
    code: "let laps = 58\nlet msg = \"Осталось \\(laps), половина — \\(laps / 2)\"",
    when: "Любой вывод/логи/тексты с данными.",
    gotcha: "Внутри \\(...) — выражение, не формат. Округляй заранее.", quiz: "синтаксис"
  },
  {
    id: "optional-what", title: "Опционал — «либо значение, либо nil»", phase: "p1",
    category: "Опционалы", tags: ["optional", "опционал", "nil", "T?"],
    summary: "Тип T? содержит значение ИЛИ nil. Защита от null на компиляции.",
    body: "Опционал <code>T?</code> явно говорит: значения может не быть. Компилятор заставляет обработать <code>nil</code> — нет внезапных крэшей.",
    code: "var bestLap: String? = nil\nbestLap = \"1:42.318\"",
    when: "Когда значение может отсутствовать (поиск, парсинг, сеть).",
    gotcha: "Опционал нельзя использовать напрямую — сначала разверни.", quiz: "опционалы"
  },
  {
    id: "optional-unwrap", title: "Развёртывание: if let и guard let", phase: "p1",
    category: "Опционалы", tags: ["if let", "guard let", "unwrap", "развернуть"],
    summary: "if let — внутри блока; guard let — дальше по коду, иначе выход.",
    body: "<code>if let</code> разворачивает <b>внутри</b> if. <code>guard let</code> разворачивает и оставляет переменную <b>дальше</b>, но при nil обязан выйти.",
    code: "if let lap = bestLap { print(lap) }\n\nguard let lap = bestLap else { return }\nprint(lap)   // виден дальше",
    when: "if let — разовая проверка; guard let — предусловие функции.",
    gotcha: "В guard ветка else обязана прервать поток.", quiz: "опционалы"
  },
  {
    id: "nil-coalescing", title: "?? — значение по умолчанию", phase: "p1",
    category: "Опционалы", tags: ["??", "nil coalescing", "default"],
    summary: "a ?? b: если a == nil, берём b.",
    body: "Оператор <code>??</code> подставляет запасное значение при nil. Удобно получить сразу не-опционал.",
    code: "let lap = bestLap ?? \"—\"\nlet n = Int(\"x\") ?? 0   // 0",
    when: "Когда есть разумное значение по умолчанию.",
    gotcha: "Правая часть вычисляется только при nil.", quiz: "опционалы"
  },
  {
    id: "optional-chaining", title: "Optional chaining ?.", phase: "p1",
    category: "Опционалы", tags: ["?.", "optional chaining", "цепочка"],
    summary: "Обращение к свойству опционала: nil, если что-то по пути nil.",
    body: "<code>?.</code> безопасно проходит цепочку: любое звено nil — всё выражение nil, без крэша.",
    code: "let count = team?.driver?.name?.count  // Int?",
    when: "Доступ к вложенным опциональным свойствам.",
    gotcha: "Результат — опционал, даже если конечное свойство не опционал.", quiz: "опционалы"
  },
  {
    id: "force-unwrap", title: "Force unwrap ! — опасная распаковка", phase: "p1",
    category: "Опционалы", tags: ["!", "force unwrap", "крэш"],
    summary: "! достаёт значение силой; если nil — крэш.",
    body: "<code>!</code> разворачивает без проверки. Если внутри <code>nil</code> — приложение падает. Допустим только при гарантии значения.",
    code: "let url = URL(string: \"https://apple.com\")!  // ок\nlet bad = (nil as Int?)!                     // КРЭШ",
    when: "Очень редко, когда nil логически невозможен.",
    gotcha: "Почти всегда антипаттерн. Сомневаешься — if/guard let или ??.", quiz: "опционалы"
  },
  {
    id: "array", title: "Array — упорядоченный список", phase: "p1",
    category: "Коллекции", tags: ["Array", "массив"],
    summary: "Упорядоченные элементы одного типа, доступ по индексу.",
    body: "Массив хранит элементы по порядку, индексы с 0. Операции: <code>append</code>, <code>count</code>, <code>first/last</code>.",
    code: "var laps = [102.3, 101.8]\nlaps.append(99.9)\nfor t in laps { print(t) }",
    when: "Когда важен порядок и возможны повторы.",
    gotcha: "Обращение по несуществующему индексу — крэш.", quiz: "синтаксис"
  },
  {
    id: "dictionary", title: "Dictionary — пары ключ-значение", phase: "p1",
    category: "Коллекции", tags: ["Dictionary", "словарь", "ключ"],
    summary: "Доступ по ключу. Возвращает опционал.",
    body: "Словарь <code>[Key: Value]</code>. Доступ по ключу даёт <b>опционал</b> — ключа может не быть.",
    code: "let points = [\"Norris\": 18]\nlet p = points[\"Norris\"]   // Int? == 18\nlet z = points[\"X\"] ?? 0     // 0",
    when: "Быстрый поиск по ключу.",
    gotcha: "points[key] — опционал! Часто забывают про nil.", quiz: "синтаксис"
  },
  {
    id: "set", title: "Set — множество уникальных", phase: "p1",
    category: "Коллекции", tags: ["Set", "множество", "уникальные"],
    summary: "Без порядка, без повторов. Быстрый contains.",
    body: "Множество хранит уникальные элементы. Очень быстрая проверка <code>contains</code>.",
    code: "var seen: Set = [\"Сочи\"]\nseen.insert(\"Сочи\")   // дубль игнор\nseen.contains(\"Сочи\") // true",
    when: "Когда нужны уникальность и быстрый contains.",
    gotcha: "Порядок не гарантирован.", quiz: "синтаксис"
  },
  {
    id: "if-ternary", title: "if / else и тернарный оператор", phase: "p1",
    category: "Управление потоком", tags: ["if", "else", "тернарный"],
    summary: "Ветвление; короткая форма a ? b : c.",
    body: "Условия без скобок, но с фигурными скобками. Тернарный <code>условие ? a : b</code> — короткий выбор значения.",
    code: "let status = laps > 0 ? \"идёт\" : \"финиш\"",
    when: "Тернарник — простой выбор значения; if — логика.",
    gotcha: "Не вкладывай тернарники друг в друга.", quiz: "синтаксис"
  },
  {
    id: "switch", title: "switch и сопоставление с образцом", phase: "p1",
    category: "Управление потоком", tags: ["switch", "case", "pattern matching"],
    summary: "Множественный выбор; должен покрывать все случаи.",
    body: "<code>switch</code> не «проваливается», обязан быть исчерпывающим. Умеет диапазоны, <code>where</code>, привязку значений.",
    code: "switch position {\ncase 1: print(\"Победа!\")\ncase 2...3: print(\"Подиум\")\ndefault: print(\"очки\")\n}",
    when: "Когда вариантов много или разбор enum.",
    gotcha: "Нужен default или покрытие всех случаев.", quiz: "синтаксис"
  },
  {
    id: "loops", title: "Циклы for и while", phase: "p1",
    category: "Управление потоком", tags: ["for", "while", "циклы", "range"],
    summary: "for-in по коллекциям/диапазонам; while по условию.",
    body: "<code>for x in коллекция</code> или диапазон <code>1...5</code>. <code>while</code> — пока условие истинно. Есть break/continue.",
    code: "for lap in 1...3 { print(lap) }\nvar fuel = 100\nwhile fuel > 0 { fuel -= 20 }",
    when: "Перебор, повторение, накопление.",
    gotcha: "1...5 включает 5; 1..<5 — не включает.", quiz: "синтаксис"
  },
  {
    id: "guard", title: "guard — ранний выход", phase: "p1",
    category: "Управление потоком", tags: ["guard", "ранний выход", "early return"],
    summary: "Проверяешь предусловие в начале и выходишь, если не ок.",
    body: "<code>guard условие else { выход }</code> делает «счастливый путь» плоским. Развёрнутые значения видны ниже.",
    code: "func start(_ name: String?) {\n  guard let name, !name.isEmpty else { return }\n  print(\"Поехали, \\(name)\")\n}",
    when: "Валидация входа в начале функции.",
    gotcha: "else обязан прервать поток.", quiz: "опционалы"
  },
  {
    id: "functions", title: "Функции: параметры, метки, возврат", phase: "p1",
    category: "Функции и замыкания", tags: ["func", "функция", "argument label"],
    summary: "Метки аргументов делают вызов читаемым; _ убирает метку.",
    body: "У параметра есть внешняя метка и внутреннее имя. Метка читается на вызове, <code>_</code> убирает её.",
    code: "func lap(of driver: String, number: Int) -> String {\n  \"\\(driver): круг \\(number)\"\n}\nlap(of: \"Max\", number: 5)",
    when: "Любая переиспользуемая логика.",
    gotcha: "of — на вызове, driver — внутри тела.", quiz: "замыкания"
  },
  {
    id: "closures", title: "Замыкания (closures) и захват", phase: "p1",
    category: "Функции и замыкания", tags: ["closure", "замыкание", "capture", "захват"],
    summary: "Блок кода, который передают; захватывает переменные контекста.",
    body: "Замыкание — безымянная функция, её можно сохранить и передать. Оно <b>захватывает</b> переменные окружения. Функции — частный случай замыканий.",
    code: "let times = [102.3, 99.9]\nlet fast = times.sorted { a, b in a < b }",
    when: "Колбэки, сортировки, обработчики, асинхронность.",
    gotcha: "Захват self может создать retain cycle — [weak self].", quiz: "замыкания"
  },
  {
    id: "escaping", title: "@escaping — «убегающее» замыкание", phase: "p1",
    category: "Функции и замыкания", tags: ["@escaping", "escaping", "completion"],
    summary: "Замыкание, которое сохраняется и вызовется ПОСЛЕ функции.",
    body: "По умолчанию замыкание non-escaping. <code>@escaping</code> — когда оно сохраняется и вызовется позже (completion сети).",
    code: "func load(_ done: @escaping (Data) -> Void) {\n  URLSession.shared.dataTask(with: url) { d, _, _ in\n    done(d!)\n  }.resume()\n}",
    when: "Асинхронные колбэки, сохранение в свойство.",
    gotcha: "В @escaping обращение к self требует [weak self].", quiz: "замыкания"
  },
  {
    id: "hof", title: "map / filter / reduce / compactMap", phase: "p1",
    category: "Функции и замыкания", tags: ["map", "filter", "reduce", "compactMap", "ФВП"],
    summary: "Преобразовать / отфильтровать / свернуть / убрать nil.",
    body: "<b>map</b> — преобразует каждый. <b>filter</b> — оставляет подходящие. <b>reduce</b> — сворачивает в одно. <b>compactMap</b> — map + выкинуть nil.",
    code: "let t = [102.3, 99.9, 101.0]\nt.map { $0 * 2 }\nt.filter { $0 < 101 }\nt.reduce(0, +)\n[\"1\",\"x\"].compactMap { Int($0) }  // [1]",
    when: "Обработка коллекций без ручных циклов.",
    gotcha: "$0 — первый аргумент. Длинные цепочки — нечитаемо.", quiz: "замыкания"
  },
  {
    id: "struct-vs-class", title: "struct vs class (value vs reference)", phase: "p1",
    category: "Типы", tags: ["struct", "class", "value type", "reference type"],
    summary: "struct копируется (значение), class передаётся по ссылке.",
    body: "<code>struct</code> — value type: при передаче <b>копируется</b>. <code>class</code> — reference: передаётся <b>ссылка</b>, есть наследование и ARC. В SwiftUI модели чаще struct.",
    code: "struct P { var x = 0 }\nvar a = P(); var b = a; b.x = 5  // a.x == 0\nclass C { var x = 0 }\nlet c = C(); let d = c; d.x = 5  // c.x == 5",
    when: "struct — по умолчанию; class — наследование/идентичность.",
    gotcha: "Менять свойство struct в методе — нужен mutating.", quiz: "struct vs class"
  },
  {
    id: "enum", title: "enum — перечисления (+ associated values)", phase: "p1",
    category: "Типы", tags: ["enum", "перечисление", "associated values"],
    summary: "Конечный набор вариантов; кейсы могут нести данные.",
    body: "<code>enum</code> описывает фиксированный набор состояний. Кейсы могут хранить связанные значения. Отлично со switch.",
    code: "enum RaceState {\n  case upcoming\n  case finished(position: Int)\n}\nlet s = RaceState.finished(position: 1)",
    when: "Состояния, варианты — вместо «магических» строк.",
    gotcha: "Associated values достаются через switch/if case.", quiz: "синтаксис"
  },
  {
    id: "properties", title: "Свойства: stored, computed, observers", phase: "p1",
    category: "Типы", tags: ["properties", "computed", "didSet", "willSet"],
    summary: "Хранимые, вычисляемые и наблюдаемые свойства.",
    body: "<b>Stored</b> хранит значение. <b>Computed</b> вычисляется на лету. <b>Observers</b> <code>didSet</code>/<code>willSet</code> реагируют на изменение.",
    code: "struct Driver {\n  var wins = 0\n  var isChampion: Bool { wins > 10 }   // computed\n  var points = 0 { didSet { print(points) } }\n}",
    when: "Computed — производные данные; observer — побочный эффект.",
    gotcha: "didSet не вызывается при установке в инициализаторе.", quiz: "struct vs class"
  },
  {
    id: "protocols", title: "Протоколы — контракт поведения", phase: "p1",
    category: "Типы", tags: ["protocol", "протокол", "интерфейс"],
    summary: "Набор требований, которые тип обязуется реализовать.",
    body: "Протокол описывает, <b>что</b> тип умеет, не указывая как. Тип «соответствует» протоколу, реализуя требования. Основа protocol-oriented программирования.",
    code: "protocol Drivable {\n  var topSpeed: Int { get }\n  func drive()\n}\nstruct Car: Drivable { let topSpeed = 320; func drive() {} }",
    when: "Абстракция, полиморфизм, тестируемость (мок протокола).",
    gotcha: "Протокол — контракт, не реализация (если нет extension).", quiz: "протоколы"
  },
  {
    id: "extensions", title: "Extensions и protocol extensions", phase: "p1",
    category: "Типы", tags: ["extension", "расширение", "default implementation"],
    summary: "Добавить методы типу; дать протоколу реализацию по умолчанию.",
    body: "<code>extension</code> расширяет любой тип (даже String, Int). <b>Protocol extension</b> даёт реализацию по умолчанию.",
    code: "extension Int { var squared: Int { self * self } }\n5.squared   // 25",
    when: "Переиспользование без наследования; организация кода.",
    gotcha: "Хранимые свойства в extension нельзя — только вычисляемые.", quiz: "протоколы"
  },
  {
    id: "generics", title: "Generics — обобщения", phase: "p1",
    category: "Типы", tags: ["generics", "обобщения", "type constraint"],
    summary: "Переиспользуемый типобезопасный код без дублирования.",
    body: "Generics — функции/типы для любого <code>T</code> с типобезопасностью. <b>Ограничение</b> <code>T: Protocol</code> требует возможностей.",
    code: "func maxOf<T: Comparable>(_ a: T, _ b: T) -> T {\n  a > b ? a : b\n}",
    when: "Контейнеры, утилиты, переиспользуемая логика.",
    gotcha: "Без <T: Comparable> оператор > недоступен.", quiz: "generics"
  },
  {
    id: "error-handling", title: "Обработка ошибок: throws / try / catch", phase: "p1",
    category: "Ошибки", tags: ["error", "throws", "try", "do catch"],
    summary: "Бросаем Error, ловим в do/catch. try? → опционал, try! → крэш.",
    body: "Ошибка соответствует <code>Error</code>. Функция — <code>throws</code>, бросает <code>throw</code>. Вызов — <code>try</code> в <code>do/catch</code>.",
    code: "enum NetError: Error { case offline }\nfunc load() throws -> Data { throw NetError.offline }\ndo { let d = try load() } catch { print(error) }",
    when: "Операции, которые могут провалиться.",
    gotcha: "try! в продакшене — почти всегда мина.", quiz: "error handling"
  },
  {
    id: "arc", title: "ARC, retain cycle, weak/unowned", phase: "p1",
    category: "Память", tags: ["ARC", "retain cycle", "weak", "unowned", "утечка"],
    summary: "ARC считает сильные ссылки; цикл = утечка; рвём weak/unowned.",
    body: "ARC освобождает объект (class) при 0 сильных ссылок. Если объекты держат друг друга <b>сильно</b> — <b>retain cycle</b> (утечка). Рвут через <code>weak</code>/<code>unowned</code>.",
    code: "class VM {\n  var onDone: (() -> Void)?\n  func setup() { onDone = { [weak self] in self?.refresh() } }\n  func refresh() {}\n}",
    when: "Делегаты, замыкания с self, родитель-ребёнок.",
    gotcha: "weak — объект может пережить ссылку; unowned — гарантированно нет.", quiz: "ARC"
  },

  // ═══ ФАЗА 2 — SWIFTUI ═══
  {
    id: "view-body", title: "View и body", phase: "p2",
    category: "SwiftUI", tags: ["View", "body", "SwiftUI", "декларативный"],
    summary: "Экран — это struct: View с вычисляемым свойством body.",
    body: "В SwiftUI UI описывается <b>декларативно</b>: ты говоришь, <i>что</i> показать, а не <i>как</i> рисовать. View — это <code>struct</code> с <code>body</code>, возвращающим другие View.",
    code: "struct RaceView: View {\n  var body: some View {\n    Text(\"Гран-при Сочи\")\n  }\n}",
    when: "Любой экран/компонент нового приложения.",
    gotcha: "body пересчитывается часто — держи его лёгким, без тяжёлой логики.", quiz: "SwiftUI"
  },
  {
    id: "state-binding", title: "@State и @Binding", phase: "p2",
    category: "SwiftUI", tags: ["@State", "@Binding", "состояние", "state"],
    summary: "@State — локальное изменяемое состояние; @Binding — ссылка на чужое.",
    body: "<code>@State</code> хранит локальное состояние View; при его изменении SwiftUI перерисовывает body. <code>@Binding</code> — двусторонняя <b>ссылка</b> на состояние родителя (передаётся через $).",
    code: "struct Counter: View {\n  @State private var laps = 0\n  var body: some View {\n    Button(\"Круг \\(laps)\") { laps += 1 }\n  }\n}",
    when: "@State — простые локальные данные View; @Binding — передать управление вниз.",
    gotcha: "@State помечай private; для сложных моделей используй ObservableObject.", quiz: "SwiftUI"
  },
  {
    id: "observable", title: "ObservableObject, @StateObject, @ObservedObject", phase: "p2",
    category: "SwiftUI", tags: ["ObservableObject", "@StateObject", "@ObservedObject", "@Published"],
    summary: "Модель-класс с @Published; View подписывается и обновляется.",
    body: "Класс-модель соответствует <code>ObservableObject</code>, свойства помечены <code>@Published</code>. View владеет ею через <code>@StateObject</code> (создаёт), а получает извне через <code>@ObservedObject</code>.",
    code: "class RaceVM: ObservableObject {\n  @Published var laps = 0\n}\nstruct V: View {\n  @StateObject var vm = RaceVM()\n  var body: some View { Text(\"\\(vm.laps)\") }\n}",
    when: "Состояние сложнее пары полей; общая модель для нескольких View.",
    gotcha: "@StateObject — кто СОЗДАёт объект; @ObservedObject — кто ПОЛУЧАет. Перепутал — лишние пересоздания.", quiz: "SwiftUI"
  },
  {
    id: "modifiers", title: "Модификаторы (modifiers)", phase: "p2",
    category: "SwiftUI", tags: ["modifier", "модификатор", "padding", "frame"],
    summary: "Цепочка методов, меняющих вид View. Порядок важен.",
    body: "Модификатор возвращает <b>новый</b> View с изменением. Они выстраиваются цепочкой, и <b>порядок имеет значение</b>.",
    code: "Text(\"P1\")\n  .padding()\n  .background(.red)\n  .foregroundStyle(.white)\n  .clipShape(Capsule())",
    when: "Оформление любого View.",
    gotcha: ".background до .padding и после — разный результат. Следи за порядком.", quiz: "SwiftUI"
  },
  {
    id: "stacks", title: "VStack / HStack / ZStack", phase: "p2",
    category: "SwiftUI", tags: ["VStack", "HStack", "ZStack", "layout", "стек"],
    summary: "Контейнеры компоновки: вертикаль, горизонталь, слои.",
    body: "<code>VStack</code> — по вертикали, <code>HStack</code> — по горизонтали, <code>ZStack</code> — слоями (друг на друге). Базовый способ компоновки.",
    code: "VStack(spacing: 8) {\n  Text(\"Сочи\")\n  HStack { Image(systemName: \"flag\"); Text(\"P1\") }\n}",
    when: "Раскладка элементов на экране.",
    gotcha: "Больше 10 вью в стеке нельзя напрямую — оборачивай в Group или ForEach.", quiz: "SwiftUI"
  },
  {
    id: "navigation", title: "Навигация: NavigationStack", phase: "p2",
    category: "SwiftUI", tags: ["NavigationStack", "NavigationLink", "навигация"],
    summary: "Переходы между экранами через стек навигации.",
    body: "<code>NavigationStack</code> оборачивает экран, <code>NavigationLink</code> ведёт на детальный экран. Современная замена NavigationView.",
    code: "NavigationStack {\n  List(races) { race in\n    NavigationLink(race.title) { RaceDetail(race) }\n  }\n}",
    when: "Любой переход «список → детали».",
    gotcha: "NavigationView устарел — для новых проектов NavigationStack.", quiz: "SwiftUI"
  },
  {
    id: "lists", title: "Списки: List и ForEach", phase: "p2",
    category: "SwiftUI", tags: ["List", "ForEach", "Identifiable", "список"],
    summary: "Прокручиваемый список; элементы должны быть Identifiable.",
    body: "<code>List</code> рисует прокручиваемый перечень. Данные должны быть <code>Identifiable</code> (иметь стабильный id), чтобы SwiftUI отслеживал элементы.",
    code: "List(races) { race in\n  Text(race.title)\n}\n// races: [Race], Race: Identifiable",
    when: "Любой список данных.",
    gotcha: "Нет Identifiable — придётся указывать id: \\.self или ключ вручную.", quiz: "SwiftUI"
  },
  {
    id: "app-lifecycle", title: "Жизненный цикл приложения (App/Scene)", phase: "p2",
    category: "SwiftUI", tags: ["App", "Scene", "@main", "lifecycle", "scenePhase"],
    summary: "Точка входа @main → App → WindowGroup. scenePhase — активно/фон.",
    body: "Приложение SwiftUI начинается с <code>@main struct App</code>, который описывает сцены (<code>WindowGroup</code>). <code>@Environment(\\.scenePhase)</code> сообщает состояние: active / inactive / background.",
    code: "@main\nstruct PitWallApp: App {\n  var body: some Scene {\n    WindowGroup { ContentView() }\n  }\n}",
    when: "Реакция на сворачивание/возврат, сохранение данных при уходе в фон.",
    gotcha: "Тяжёлую работу при запуске не делай в init App — заблокируешь старт.", quiz: "SwiftUI"
  },

  // ═══ ФАЗА 3 — СЕТЬ, ДАННЫЕ, МНОГОПОТОЧНОСТЬ ═══
  {
    id: "rest-http", title: "REST и HTTP-методы", phase: "p3",
    category: "Сеть", tags: ["REST", "HTTP", "GET", "POST", "API", "статус коды"],
    summary: "GET/POST/PUT/DELETE + коды 2xx/4xx/5xx.",
    body: "REST — стиль API поверх HTTP. <b>GET</b> — получить, <b>POST</b> — создать, <b>PUT/PATCH</b> — обновить, <b>DELETE</b> — удалить. <b>2xx</b> успех, <b>4xx</b> ошибка клиента, <b>5xx</b> сервера.",
    code: "// GET /races/3  → 200 OK + JSON\n// 404 Not Found, 401 Unauthorized",
    when: "Любая работа с сетевым API.",
    gotcha: "200 ≠ «данные валидны». Проверяй тело и декодирование.", quiz: "concurrency"
  },
  {
    id: "urlsession", title: "URLSession — сетевые запросы", phase: "p3",
    category: "Сеть", tags: ["URLSession", "data", "запрос", "networking"],
    summary: "Стандартный способ загрузки данных; с async/await — линейно.",
    body: "<code>URLSession</code> выполняет HTTP-запросы. С <code>async/await</code> код читается сверху вниз: получаем данные и ответ.",
    code: "let url = URL(string: \"https://api/races\")!\nlet (data, response) = try await URLSession.shared.data(from: url)",
    when: "Загрузка/отправка данных по сети.",
    gotcha: "Проверяй (response as? HTTPURLResponse)?.statusCode перед парсингом.", quiz: "concurrency"
  },
  {
    id: "codable", title: "Codable — JSON в модели", phase: "p3",
    category: "Сеть", tags: ["Codable", "JSON", "Decodable", "encode", "decode"],
    summary: "Авто-преобразование JSON ⇄ Swift-типы.",
    body: "Тип, соответствующий <code>Codable</code>, автоматически декодируется из JSON и кодируется обратно. Имена полей совпадают со свойствами (или через CodingKeys).",
    code: "struct Race: Codable { let title: String; let round: Int }\nlet race = try JSONDecoder().decode(Race.self, from: data)",
    when: "Любой обмен данными с API/файлами.",
    gotcha: "Несовпадение имён/типов → ошибка декодирования. Используй CodingKeys.", quiz: "concurrency"
  },
  {
    id: "async-await", title: "async / await — современная асинхронность", phase: "p3",
    category: "Многопоточность", tags: ["async", "await", "concurrency", "Task"],
    summary: "Асинхронный код пишется линейно. await — точка ожидания.",
    body: "<code>async</code>-функция приостанавливается на <code>await</code>, не блокируя поток. Читается сверху вниз. Запуск из синхронного кода — через <code>Task</code>.",
    code: "func fetch() async throws -> [Race] {\n  let (d, _) = try await URLSession.shared.data(from: url)\n  return try JSONDecoder().decode([Race].self, from: d)\n}",
    when: "Сеть, файлы, долгие операции.",
    gotcha: "UI-обновления — на @MainActor.", quiz: "concurrency"
  },
  {
    id: "gcd", title: "GCD и потоки (DispatchQueue)", phase: "p3",
    category: "Многопоточность", tags: ["GCD", "DispatchQueue", "main", "поток"],
    summary: "Старый способ работы с потоками; UI — только на main.",
    body: "GCD управляет очередями задач. Главное правило: <b>UI обновляем только на главной очереди</b> (<code>DispatchQueue.main</code>). Сейчас вместо GCD чаще async/await.",
    code: "DispatchQueue.global().async {\n  let r = heavyWork()\n  DispatchQueue.main.async { label.text = r }\n}",
    when: "Легаси-код; точечная работа с очередями.",
    gotcha: "Обновил UI не на main — баги/крэши. Новый код пиши на async/await.", quiz: "concurrency"
  },
  {
    id: "actors", title: "actor и @MainActor", phase: "p3",
    category: "Многопоточность", tags: ["actor", "@MainActor", "race condition", "Sendable"],
    summary: "actor защищает свой стейт от гонок; @MainActor — главный поток.",
    body: "<code>actor</code> сериализует доступ к своему состоянию — спасает от <b>race condition</b> без блокировок. <code>@MainActor</code> гарантирует выполнение на главном потоке (UI). В Swift 6 строгая проверка гонок — по умолчанию.",
    code: "actor Counter {\n  private(set) var value = 0\n  func inc() { value += 1 }\n}",
    when: "Общий изменяемый стейт между задачами; UI.",
    gotcha: "К свойствам actor извне — только через await.", quiz: "concurrency"
  },
  {
    id: "userdefaults", title: "UserDefaults и Keychain", phase: "p3",
    category: "Хранение", tags: ["UserDefaults", "Keychain", "хранение", "настройки"],
    summary: "UserDefaults — мелкие настройки; Keychain — секреты (токены).",
    body: "<code>UserDefaults</code> хранит небольшие значения (настройки, флаги). <b>Секреты</b> (токены, пароли) — только в <code>Keychain</code>, он шифрован.",
    code: "UserDefaults.standard.set(true, forKey: \"onboardingDone\")\nlet done = UserDefaults.standard.bool(forKey: \"onboardingDone\")",
    when: "Настройки/флаги — UserDefaults; чувствительное — Keychain.",
    gotcha: "Не храни токены/пароли в UserDefaults — это небезопасно.", quiz: "concurrency"
  },
  {
    id: "swiftdata", title: "SwiftData — локальная база", phase: "p3",
    category: "Хранение", tags: ["SwiftData", "@Model", "persistence", "Core Data"],
    summary: "Современное хранилище: помечаешь модель @Model, SwiftUI её сохраняет.",
    body: "<code>SwiftData</code> — современная замена Core Data. Помечаешь класс <code>@Model</code>, вставляешь в контекст, запрашиваешь через <code>@Query</code>. Под капотом — Core Data.",
    code: "@Model class Race { var title: String; init(_ t: String) { title = t } }\n// во View: @Query var races: [Race]",
    when: "Локальное хранение данных приложения (кэш, офлайн).",
    gotcha: "SwiftData — iOS 17+. Для старых версий — Core Data.", quiz: "concurrency"
  },
  {
    id: "combine", title: "Combine — обзорно (vs async/await)", phase: "p3",
    category: "Многопоточность", tags: ["Combine", "Publisher", "реактивность"],
    summary: "Реактивные потоки данных (Publisher→Subscriber). Часто заменяется async/await.",
    body: "Combine — фреймворк реактивного программирования: данные текут от <b>Publisher</b> к <b>Subscriber</b>. Для разовых асинхронных задач сейчас чаще берут async/await; Combine — для потоков событий.",
    code: "// $searchText\n//   .debounce(for: .seconds(0.3), scheduler: RunLoop.main)\n//   .sink { query in search(query) }",
    when: "Потоки событий (поиск с задержкой, биндинги). Знать — для легаси.",
    gotcha: "Не тащи Combine туда, где хватает async/await — лишняя сложность.", quiz: "concurrency"
  },

  // ═══ ФАЗА 4 — АРХИТЕКТУРА И ТЕСТЫ ═══
  {
    id: "mvvm", title: "MVVM — Model-View-ViewModel", phase: "p4",
    category: "Архитектура", tags: ["MVVM", "ViewModel", "архитектура"],
    summary: "View отображает; ViewModel держит логику и состояние; Model — данные.",
    body: "<b>Model</b> — данные, <b>View</b> — отображение, <b>ViewModel</b> — логика и подготовка данных для View (ObservableObject). Разделение делает код тестируемым.",
    code: "class RaceListVM: ObservableObject {\n  @Published var races: [Race] = []\n  func load() async { races = (try? await api.fetch()) ?? [] }\n}",
    when: "Стандарт для SwiftUI-приложений.",
    gotcha: "Не клади сетевые вызовы прямо во View — выноси в ViewModel.", quiz: "архитектура"
  },
  {
    id: "clean-arch", title: "Clean Architecture и слои", phase: "p4",
    category: "Архитектура", tags: ["Clean", "слои", "dependency inversion"],
    summary: "Разделение на слои; зависимости направлены внутрь, к абстракциям.",
    body: "Идея Clean — независимые слои (UI / бизнес-логика / данные) и <b>инверсия зависимостей</b>: верхние слои зависят от <b>абстракций</b> (протоколов), а не от конкретики. Легче менять и тестировать.",
    code: "protocol RaceRepository { func all() async throws -> [Race] }\n// UseCase зависит от протокола, а не от конкретной сети",
    when: "Средние/крупные приложения, командная разработка.",
    gotcha: "Не переусложняй маленькое приложение — слои стоят накладных расходов.", quiz: "архитектура"
  },
  {
    id: "di", title: "Dependency Injection (DI)", phase: "p4",
    category: "Архитектура", tags: ["DI", "dependency injection", "внедрение зависимостей"],
    summary: "Зависимости передаются извне, а не создаются внутри. Делает код тестируемым.",
    body: "DI — объект <b>получает</b> свои зависимости снаружи (через init), а не создаёт сам. Тогда в тестах можно подсунуть мок.",
    code: "class RaceVM {\n  let api: RaceAPI\n  init(api: RaceAPI) { self.api = api }  // внедрили\n}",
    when: "Везде, где нужна тестируемость и гибкость.",
    gotcha: "Создаёшь зависимость внутри (let api = RealAPI()) — её не подменишь в тесте.", quiz: "архитектура"
  },
  {
    id: "coordinator", title: "Coordinator — навигация отдельно", phase: "p4",
    category: "Архитектура", tags: ["Coordinator", "навигация", "паттерн"],
    summary: "Логика переходов между экранами вынесена из View в отдельный объект.",
    body: "Паттерн <b>Coordinator</b> убирает знание о навигации из экранов: куда идти дальше — решает координатор. Экраны становятся переиспользуемыми.",
    code: "// Coordinator решает: показать детали, вернуться, открыть модалку.\n// View просто сообщает о событии.",
    when: "Сложная навигация, много экранов (чаще в UIKit).",
    gotcha: "В SwiftUI часть задач решает NavigationStack — не всегда нужен.", quiz: "архитектура"
  },
  {
    id: "unit-tests", title: "Unit-тесты и мокинг", phase: "p4",
    category: "Тесты", tags: ["XCTest", "unit test", "mock", "тесты"],
    summary: "Проверяем логику автоматически; зависимости заменяем моками.",
    body: "Юнит-тест проверяет кусок логики изолированно. Зависимости (сеть) заменяют <b>моком</b> через протокол + DI. Структура теста: <b>given → when → then</b>.",
    code: "func testLoadFillsRaces() async {\n  let vm = RaceListVM(api: MockAPI(stub: [race]))\n  await vm.load()\n  XCTAssertEqual(vm.races.count, 1)\n}",
    when: "Логика ViewModel, расчёты, парсинг.",
    gotcha: "Тестируешь реальную сеть — это уже не unit-тест и он будет флакать.", quiz: "архитектура"
  },
  {
    id: "spm", title: "Swift Package Manager (SPM)", phase: "p4",
    category: "Зависимости", tags: ["SPM", "Swift Package", "зависимости", "библиотека"],
    summary: "Стандартный менеджер зависимостей и модулей в Xcode.",
    body: "<b>SPM</b> подключает сторонние библиотеки и разбивает проект на модули. В Xcode: File → Add Packages → URL репозитория.",
    code: "// Package.swift\n// dependencies: [ .package(url: \"...\", from: \"1.0.0\") ]",
    when: "Подключение библиотек; модульность проекта.",
    gotcha: "CocoaPods/Carthage — устаревают; для нового проекта бери SPM.", quiz: "архитектура"
  },

  // ═══ ФАЗА 5 — UIKIT ═══
  {
    id: "uiviewcontroller", title: "UIViewController и жизненный цикл", phase: "p5",
    category: "UIKit", tags: ["UIViewController", "lifecycle", "viewDidLoad"],
    summary: "Экран в UIKit; ключевые методы — viewDidLoad, viewWillAppear.",
    body: "<code>UIViewController</code> управляет экраном. Жизненный цикл: <code>viewDidLoad</code> (один раз, настройка) → <code>viewWillAppear</code> → <code>viewDidAppear</code> → ...will/DidDisappear.",
    code: "class RaceVC: UIViewController {\n  override func viewDidLoad() {\n    super.viewDidLoad()\n    // настройка интерфейса\n  }\n}",
    when: "Любой экран в UIKit-проекте.",
    gotcha: "Тяжёлую загрузку данных в viewDidLoad — экран зависнет. Делай асинхронно.", quiz: "UIKit"
  },
  {
    id: "autolayout", title: "Auto Layout — констрейнты", phase: "p5",
    category: "UIKit", tags: ["Auto Layout", "constraints", "hugging", "compression"],
    summary: "Описываешь правила расположения, система считает кадры.",
    body: "Auto Layout задаёт <b>правила</b> (констрейнты): отступы, привязки, размеры. Hugging — насколько вью «сопротивляется» растяжению, compression — сжатию.",
    code: "view.translatesAutoresizingMaskIntoConstraints = false\nNSLayoutConstraint.activate([\n  view.topAnchor.constraint(equalTo: g.topAnchor, constant: 16)\n])",
    when: "Адаптивная вёрстка под разные экраны (UIKit).",
    gotcha: "Забыл translatesAutoresizing... = false → конфликт констрейнтов.", quiz: "UIKit"
  },
  {
    id: "uitableview", title: "UITableView / UICollectionView", phase: "p5",
    category: "UIKit", tags: ["UITableView", "UICollectionView", "dataSource", "cell"],
    summary: "Списки/сетки с переиспользованием ячеек.",
    body: "Показывают много элементов с <b>переиспользованием ячеек</b> (dequeue). Данные дают через dataSource (или современный diffable data source).",
    code: "func tableView(_ t: UITableView, cellForRowAt i: IndexPath) -> UITableViewCell {\n  let cell = t.dequeueReusableCell(withIdentifier: \"c\", for: i)\n  return cell\n}",
    when: "Длинные списки/сетки в UIKit.",
    gotcha: "Не переиспользуешь ячейки — память и тормоза на длинных списках.", quiz: "UIKit"
  },
  {
    id: "representable", title: "Мост UIViewRepresentable", phase: "p5",
    category: "UIKit", tags: ["UIViewRepresentable", "мост", "SwiftUI", "UIKit"],
    summary: "Встроить UIKit-вью внутрь SwiftUI (и наоборот).",
    body: "<code>UIViewRepresentable</code> оборачивает UIKit-вью для использования в SwiftUI. Обратно — <code>UIHostingController</code> вставляет SwiftUI в UIKit.",
    code: "struct MapViewBridge: UIViewRepresentable {\n  func makeUIView(context: Context) -> MKMapView { MKMapView() }\n  func updateUIView(_ v: MKMapView, context: Context) {}\n}",
    when: "Когда нужного компонента нет в SwiftUI (карты, камера, легаси).",
    gotcha: "Тяжёлую логику не держи в updateUIView — вызывается часто.", quiz: "UIKit"
  },

  // ═══ ФАЗА 6 — ИНСТРУМЕНТЫ ═══
  {
    id: "debugging", title: "Дебаг: breakpoints, po, lldb", phase: "p6",
    category: "Инструменты", tags: ["debug", "breakpoint", "po", "lldb", "дебаг"],
    summary: "Точки останова + консоль lldb (po) вместо хаотичных print.",
    body: "Ставь <b>breakpoint</b> (клик по номеру строки), на паузе смотри переменные и пиши <code>po переменная</code> в консоли. Эффективнее, чем заваливать код print.",
    code: "// (lldb) po vm.races\n// (lldb) p laps + 1",
    when: "Поиск причины бага, инспекция состояния.",
    gotcha: "po печатает описание, p — значение. Условные breakpoints экономят время.", quiz: "синтаксис"
  },
  {
    id: "instruments", title: "Instruments — утечки и производительность", phase: "p6",
    category: "Инструменты", tags: ["Instruments", "Leaks", "Time Profiler", "Memory Graph"],
    summary: "Профилировщик: утечки памяти (Leaks) и медленные места (Time Profiler).",
    body: "<b>Instruments</b> измеряет приложение: <b>Leaks</b> ловит утечки (часто retain cycle), <b>Time Profiler</b> показывает, где тратится время. <b>Memory Graph</b> в Xcode рисует, кто кого держит.",
    code: "// Xcode → Product → Profile (⌘I) → Leaks / Time Profiler",
    when: "Тормоза, рост памяти, поиск утечек.",
    gotcha: "Профилируй на реальном устройстве и в Release — на симуляторе цифры врут.", quiz: "ARC"
  },
  {
    id: "git-advanced", title: "Git: ветки, merge, rebase, PR", phase: "p6",
    category: "Инструменты", tags: ["git", "branch", "merge", "rebase", "pull request"],
    summary: "Ветка под задачу → коммиты → pull request → merge.",
    body: "Рабочий цикл в команде: создаёшь <b>ветку</b> под задачу, коммитишь, открываешь <b>pull request</b>, после ревью — <b>merge</b>. <code>rebase</code> переносит коммиты на свежую базу (линейная история).",
    code: "git switch -c feature/results\ngit commit -m \"feat: экран результатов\"\ngit push -u origin feature/results",
    when: "Командная работа, аккуратная история.",
    gotcha: "rebase переписывает историю — не делай rebase уже запушенных общих веток.", quiz: "синтаксис"
  },
  {
    id: "localization", title: "Локализация (несколько языков)", phase: "p6",
    category: "Инструменты", tags: ["localization", "локализация", "String Catalog"],
    summary: "Тексты выносятся в каталог строк и переводятся под языки.",
    body: "Вместо хардкода строк используешь ключи; переводы лежат в <b>String Catalog</b> (.xcstrings). Система подставит нужный язык по настройкам устройства.",
    code: "Text(\"race.start\")  // ключ; перевод берётся из каталога",
    when: "Приложение на несколько языков/рынков.",
    gotcha: "Хардкод строк по всему коду → потом мучительно локализовать.", quiz: "синтаксис"
  },

  // ═══ ФАЗА 7 — НАЙМ ═══
  {
    id: "resume", title: "Резюме junior iOS", phase: "p7",
    category: "Найм", tags: ["резюме", "CV", "портфолио", "junior"],
    summary: "Коротко, по делу: стек, проекты-пруфы, твоё преимущество.",
    body: "В резюме: <b>стек</b> (Swift, SwiftUI, async/await, MVVM, Git), <b>2–3 проекта</b> со ссылками на GitHub/App Store, <b>результаты</b>. Подсветить переход из аналитики — это плюс (данные, продуктовое мышление, английский).",
    code: "// Проект: PitWall — трекер гонок\n// SwiftUI, SwiftData, async/await, MVVM\n// github.com/tra1nee/PitWall",
    when: "Старт поиска работы (Фаза 7).",
    gotcha: "«Знаю всё» без пруфов не работает. Нужны живые проекты на GitHub.", quiz: "архитектура"
  },
  {
    id: "interview", title: "Подготовка к собесу", phase: "p7",
    category: "Найм", tags: ["собес", "interview", "вопросы", "теория"],
    summary: "Частые темы: опционалы, ARC, value/reference, concurrency, архитектура.",
    body: "Junior-iOS собес почти всегда трогает: <b>опционалы</b>, <b>ARC/retain cycle</b>, <b>struct vs class</b>, <b>concurrency</b> (async/await, actors), <b>MVVM</b>, основы алгоритмов. Тренируй ответы вслух + код на доске.",
    code: "// Тренируйся: матч: ARC, матч: concurrency, экзамен: Фаза 1",
    when: "Перед собеседованиями.",
    gotcha: "Зубрёжка без понимания видна сразу. Объясняй «почему», а не определение.", quiz: "ARC"
  },
  {
    id: "appstore", title: "Публикация: App Store, TestFlight, Privacy", phase: "p7",
    category: "Найм", tags: ["App Store", "TestFlight", "Privacy Manifest", "публикация"],
    summary: "Нужен Apple Developer ($99/год); Privacy Manifest обязателен в 2026.",
    body: "Публикация требует аккаунта <b>Apple Developer</b> ($99/год). <b>TestFlight</b> — бета-тест перед релизом. <b>Privacy Manifest</b> (файл о сборе данных) обязателен для приёма в App Store.",
    code: "// Xcode → Product → Archive → Distribute App\n// + PrivacyInfo.xcprivacy в проекте",
    when: "Выпуск приложения в портфолио (Фаза 7).",
    gotcha: "Без Privacy Manifest сборку завернут на ревью. Для симулятора аккаунт не нужен.", quiz: "архитектура"
  },

  // ═══ БАЗА РАЗРАБОТЧИКА (не только iOS) ═══
  {
    id: "oop", title: "ООП: инкапсуляция, наследование, полиморфизм", phase: "base",
    category: "База", tags: ["ООП", "OOP", "инкапсуляция", "наследование", "полиморфизм"],
    summary: "Три кита ООП — частый вопрос на собесе.",
    body: "<b>Инкапсуляция</b> — прятать детали (private). <b>Наследование</b> — переиспользовать поведение (class). <b>Полиморфизм</b> — один интерфейс, разные реализации.",
    code: "class Animal { func sound() -> String { \"?\" } }\nclass Dog: Animal { override func sound() -> String { \"Гав\" } }",
    when: "Проектирование, ответы на собесе.",
    gotcha: "В Swift часто предпочитают композицию и протоколы наследованию.", quiz: "протоколы"
  },
  {
    id: "git-basics", title: "Git: базовый цикл", phase: "base",
    category: "База", tags: ["git", "commit", "push", "версионирование"],
    summary: "add → commit → push; ветки для изоляции работы.",
    body: "Git хранит историю снимков. <code>add</code> готовит файлы, <code>commit</code> фиксирует, <code>push</code> отправляет на GitHub. Базовый навык в команде.",
    code: "git add .\ngit commit -m \"feat: экран гонки\"\ngit push",
    when: "Каждый день.",
    gotcha: "git init создаёт репозиторий в ТЕКУЩЕЙ папке — проверяй, где стоишь.", quiz: "синтаксис"
  },
  {
    id: "big-o", title: "Big-O — сложность алгоритмов", phase: "base",
    category: "База", tags: ["Big-O", "сложность", "алгоритмы", "O(n)"],
    summary: "Как растут время/память с размером данных. Спрашивают на собесах.",
    body: "<b>O(1)</b> — константа, <b>O(n)</b> — линейно, <b>O(log n)</b> — логарифм (бин. поиск), <b>O(n²)</b> — вложенные циклы. Поиск в Dictionary/Set ~O(1), в Array по значению ~O(n).",
    code: "// O(1): dict[key]   O(n): arr.contains(x)   O(n^2): два вложенных for",
    when: "Выбор структуры данных, собесы.",
    gotcha: "Преждевременная оптимизация вредна — сначала корректность.", quiz: "алгоритмы"
  },
  {
    id: "data-structures", title: "Структуры данных — обзор", phase: "base",
    category: "База", tags: ["структуры данных", "stack", "queue", "tree", "linked list"],
    summary: "Массив, словарь, множество, стек, очередь, список, дерево, граф.",
    body: "<b>Array</b> — по индексу; <b>Dictionary</b> — по ключу; <b>Set</b> — уникальные; <b>Stack</b> (LIFO) и <b>Queue</b> (FIFO); <b>Linked list</b> — узлы со ссылками; <b>Tree/Graph</b> — иерархии/связи. Выбор структуры влияет на скорость операций.",
    code: "// Stack: push/pop (последний вошёл — первый вышел)\n// Queue: enqueue/dequeue (первый вошёл — первый вышел)\n// Dictionary: ~O(1) доступ по ключу",
    when: "Частый поиск → Dictionary/Set; важен порядок → Array.",
    gotcha: "Нет «лучшей» структуры — есть подходящая под операции.", quiz: "алгоритмы"
  },
  {
    id: "algorithms-search-sort", title: "Поиск и сортировка", phase: "base",
    category: "База", tags: ["алгоритмы", "бинарный поиск", "сортировка", "binary search"],
    summary: "Линейный vs бинарный поиск; быстрые vs наивные сортировки.",
    body: "<b>Линейный поиск</b> O(n) — по очереди. <b>Бинарный</b> O(log n) — делим пополам, но только в <b>отсортированном</b> массиве. Сортировки: быстрые O(n log n) (merge, quick) vs наивные O(n²) (пузырёк).",
    code: "// arr.sorted()  — O(n log n)\n// бинарный поиск работает на отсортированных данных",
    when: "Большие данные, оптимизация, собесы.",
    gotcha: "Бинарный поиск работает ТОЛЬКО на отсортированных данных.", quiz: "алгоритмы"
  },
  {
    id: "recursion", title: "Рекурсия", phase: "base",
    category: "База", tags: ["рекурсия", "recursion", "базовый случай"],
    summary: "Функция вызывает саму себя; обязателен базовый случай.",
    body: "Рекурсивная функция решает задачу через себя на меньших данных. Обязателен <b>базовый случай</b> (условие выхода), иначе бесконечность и переполнение стека.",
    code: "func factorial(_ n: Int) -> Int {\n  n <= 1 ? 1 : n * factorial(n - 1)\n}",
    when: "Обход деревьев/структур, divide-and-conquer.",
    gotcha: "Забыл базовый случай → stack overflow (крэш).", quiz: "алгоритмы"
  },
  {
    id: "solid", title: "Принципы SOLID", phase: "base",
    category: "База", tags: ["SOLID", "принципы", "проектирование"],
    summary: "5 принципов проектирования классов.",
    body: "<b>S</b> — одна ответственность; <b>O</b> — открыт для расширения, закрыт для изменения; <b>L</b> — подтип заменяет тип (Лисков); <b>I</b> — узкие протоколы; <b>D</b> — зависим от абстракций, не от конкретики.",
    code: "// S: класс делает одно дело\n// D: init(api: APIProtocol) вместо new RealAPI()",
    when: "Проектирование, рефакторинг, собесы.",
    gotcha: "SOLID — ориентиры, не догма; не плоди абстракции ради абстракций.", quiz: "архитектура"
  },
  {
    id: "dry-kiss", title: "DRY, KISS, YAGNI", phase: "base",
    category: "База", tags: ["DRY", "KISS", "YAGNI", "принципы"],
    summary: "Не повторяйся · проще — лучше · не делай лишнего заранее.",
    body: "<b>DRY</b> (Don't Repeat Yourself) — выноси повторы. <b>KISS</b> (Keep It Simple) — простое решение лучше сложного. <b>YAGNI</b> — не пиши «на будущее», пока реально не нужно.",
    code: "// один и тот же код 3 раза → вынеси в функцию (DRY)",
    when: "Каждый день при написании кода.",
    gotcha: "DRY ≠ объединять случайно похожий код — только реально общий.", quiz: "архитектура"
  },
  {
    id: "clean-code", title: "Чистый код и именование", phase: "base",
    category: "База", tags: ["clean code", "именование", "читаемость"],
    summary: "Понятные имена, короткие функции, мало вложенности.",
    body: "Имя должно объяснять смысл (<code>laps</code>, не <code>x</code>). Функции — короткие, одно дело. Меньше вложенности (ранние выходы через guard). Код читают чаще, чем пишут.",
    code: "// плохо:   func d(_ a: Int) -> Int\n// хорошо:  func daysLeft(until race: Date) -> Int",
    when: "Всегда, особенно в команде.",
    gotcha: "Комментарии не спасают плохие имена — сначала имя.", quiz: "архитектура"
  },
  {
    id: "how-internet-works", title: "Как работает интернет (клиент-сервер)", phase: "base",
    category: "База", tags: ["интернет", "DNS", "HTTP", "TCP", "клиент-сервер"],
    summary: "DNS превращает домен в IP → запрос по HTTP(S) → ответ.",
    body: "Клиент (приложение) шлёт <b>запрос</b> серверу. <b>DNS</b> превращает домен в IP-адрес. Поверх TCP идёт <b>HTTP(S)</b>: запрос (метод, путь, заголовки) → ответ (статус, тело). HTTPS — шифрование.",
    code: "// GET https://api.example.com/races\n// DNS: api.example.com → 93.184.x.x",
    when: "Понимание сети для работы с API.",
    gotcha: "Домен ≠ IP; перевод делает DNS.", quiz: "сеть"
  },
  {
    id: "json", title: "JSON — формат обмена данными", phase: "base",
    category: "База", tags: ["JSON", "формат", "данные", "API"],
    summary: "Текстовый формат: объекты {}, массивы [], пары ключ-значение.",
    body: "JSON — стандарт обмена с API. Объект <code>{ }</code>, массив <code>[ ]</code>, значения: строка, число, bool, null, вложенные. В Swift парсится в модели через Codable.",
    code: "{ \"title\": \"Сочи\", \"round\": 1, \"finished\": false }",
    when: "Любое API и конфиги.",
    gotcha: "Ключи и строки — в двойных кавычках; лишняя запятая в конце запрещена.", quiz: "сеть"
  },
  {
    id: "sql", title: "Базы данных и SQL (основы)", phase: "base",
    category: "База", tags: ["SQL", "база данных", "SELECT", "JOIN", "CRUD"],
    summary: "Таблицы, строки, CRUD; SELECT/WHERE/JOIN.",
    body: "Реляционная БД хранит данные в таблицах (строки + колонки). CRUD: Create/Read/Update/Delete. <b>SELECT</b> выбирает, <b>WHERE</b> фильтрует, <b>JOIN</b> соединяет таблицы. (У тебя фора — аналитика.)",
    code: "SELECT name FROM drivers WHERE wins > 5;\nSELECT * FROM races JOIN results ON races.id = results.race_id;",
    when: "Бэкенд, аналитика, понимание хранения.",
    gotcha: "На iOS локально чаще SwiftData/Core Data, а не сырой SQL.", quiz: "SQL"
  },
  {
    id: "paradigms", title: "Парадигмы программирования", phase: "base",
    category: "База", tags: ["парадигмы", "ООП", "функциональная", "императивная"],
    summary: "Императивная, ООП, функциональная — разные стили.",
    body: "<b>Императивная</b> — пошаговые инструкции. <b>ООП</b> — объекты с состоянием и поведением. <b>Функциональная</b> — чистые функции, неизменяемость, map/filter/reduce. Swift — мультипарадигменный.",
    code: "// ООП:        class Car { func drive() {} }\n// Функционально: nums.map { $0 * 2 }",
    when: "Понимание подходов; выбор стиля под задачу.",
    gotcha: "Не противопоставляй жёстко — в Swift их сочетают.", quiz: "архитектура"
  }
];

if (typeof module !== "undefined") { module.exports = { PHASES, WIKI_DATA }; }
