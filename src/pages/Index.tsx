import { useState } from "react";
import Icon from "@/components/ui/icon";

const NAV_LINKS = [
  { label: "Главная", href: "#hero" },
  { label: "Курсы", href: "#courses" },
  { label: "Грант", href: "#discount" },
  { label: "Отзывы", href: "#reviews" },
  { label: "О нас", href: "#about" },
  { label: "Контакты", href: "#contacts" },
];

const COURSES = [
  {
    emoji: "🐍",
    title: "Python-разработка",
    age: "12–17 лет",
    duration: "8 месяцев",
    desc: "Основы программирования, алгоритмы, создание первых проектов на Python.",
    color: "#4ADE80",
  },
  {
    emoji: "🌐",
    title: "Веб-разработка",
    age: "11–17 лет",
    duration: "6 месяцев",
    desc: "HTML, CSS, JavaScript — создаём настоящие сайты с нуля до результата.",
    color: "#FFD700",
  },
  {
    emoji: "🤖",
    title: "Робототехника",
    age: "7–12 лет",
    duration: "10 месяцев",
    desc: "Lego Mindstorms, Arduino. Собираем роботов и программируем их движение.",
    color: "#FF8C42",
  },
  {
    emoji: "🎮",
    title: "Разработка игр",
    age: "10–16 лет",
    duration: "7 месяцев",
    desc: "Unity, C# — создаём 2D и 3D игры, участвуем в джемах.",
    color: "#C084FC",
  },
  {
    emoji: "🧠",
    title: "Искусственный интеллект",
    age: "14–17 лет",
    duration: "5 месяцев",
    desc: "Машинное обучение, нейросети, основы Data Science для школьников.",
    color: "#38BDF8",
  },
  {
    emoji: "🔐",
    title: "Кибербезопасность",
    age: "13–17 лет",
    duration: "4 месяца",
    desc: "Основы защиты данных, этичный хакинг, сетевая безопасность.",
    color: "#FB7185",
  },
];

const REVIEWS = [
  {
    name: "Анна М.",
    role: "Мама ученика, 13 лет",
    text: "Сын не мог оторваться от занятий! За 3 месяца сделал первый сайт — мы все были в шоке. Преподаватели объясняют так, что понятно даже мне.",
    stars: 5,
  },
  {
    name: "Кирилл Д.",
    role: "Ученик, 15 лет",
    text: "Лучшая школа! Научился Python, теперь делаю ботов для Telegram. Уже думаю об IT-карьере.",
    stars: 5,
  },
  {
    name: "Светлана Р.",
    role: "Мама ученицы, 11 лет",
    text: "Дочь занимается робототехникой второй год. Стала призёром городской олимпиады. Очень благодарны команде Квантастики!",
    stars: 5,
  },
  {
    name: "Тимур К.",
    role: "Ученик, 14 лет",
    text: "Крутые курсы по играм. Понял, что геймдев — это сложно, но невероятно интересно. Сделал свою первую 2D-игру!",
    stars: 5,
  },
];

const DISCOUNT_DB: Record<string, number> = {
  "иванов иван 42": 20,
  "петрова мария 7": 15,
  "сидоров алексей 15": 10,
  "козлова дарья 33": 25,
};

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showCabinet, setShowCabinet] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [patronymic, setPatronymic] = useState("");
  const [city, setCity] = useState("");
  const [schoolNum, setSchoolNum] = useState("");
  const [discountResult, setDiscountResult] = useState<null | "found" | "not_found">(null);
  const [discountValue, setDiscountValue] = useState(0);
  const [grantUsed, setGrantUsed] = useState(false);
  const [showStudentForm, setShowStudentForm] = useState(false);
  const [studentFio, setStudentFio] = useState("");
  const [studentBirthday, setStudentBirthday] = useState("");
  const [studentCity, setStudentCity] = useState("");
  const [studentSchool, setStudentSchool] = useState("");

  const handleLogin = () => {
    if (loginEmail && loginPassword) {
      setUserName(loginEmail.split("@")[0] || loginEmail);
      setIsLoggedIn(true);
      setShowCabinet(true);
      setLoginOpen(false);
      setLoginEmail("");
      setLoginPassword("");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setShowCabinet(false);
    setUserName("");
  };

  const checkDiscount = () => {
    setGrantUsed(false);
    setDiscountResult("found");
  };

  if (isLoggedIn && showCabinet) {
    return (
      <div className="min-h-screen" style={{ fontFamily: "'Golos Text', sans-serif", background: "var(--kvan-light)" }}>
        {/* Личный кабинет */}
        <nav className="hero-bg shadow-lg">
          <div className="max-w-5xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
            <span className="text-xl font-black text-white" style={{ fontFamily: "'Oswald', sans-serif" }}>🧠 КВАНТАСТИКА</span>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowCabinet(false)}
                className="flex items-center gap-1.5 px-4 py-2 rounded-full font-semibold text-sm transition-all hover:scale-105 active:scale-95"
                style={{ background: "var(--kvan-yellow)", color: "var(--kvan-text-dark)" }}
              >
                <Icon name="ArrowLeft" size={14} />
                На главную
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm border border-white/30 text-white hover:bg-white/10 transition-all"
              >
                <Icon name="LogOut" size={14} />
                Выйти
              </button>
            </div>
          </div>
        </nav>

        <div className="max-w-5xl mx-auto px-4 md:px-8 py-10">
          <h1 className="text-3xl font-black mb-8" style={{ fontFamily: "'Oswald', sans-serif", color: "var(--kvan-text-dark)" }}>
            Личный кабинет
          </h1>

          {/* Статистика */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
            <div className="bg-white rounded-2xl p-6 shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: "#6B7FFF22" }}>
                <Icon name="CalendarDays" fallback="Calendar" size={22} style={{ color: "var(--kvan-blue)" }} />
              </div>
              <div>
                <div className="text-xs text-gray-400 mb-0.5">Дата приёма на работу</div>
                <div className="text-xl font-black" style={{ fontFamily: "'Oswald', sans-serif", color: "var(--kvan-text-dark)" }}>25.02.2019</div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: "#4ADE8022" }}>
                <Icon name="Users" fallback="Users" size={22} style={{ color: "#4ADE80" }} />
              </div>
              <div>
                <div className="text-xs text-gray-400 mb-0.5">Количество учеников</div>
                <div className="text-xl font-black" style={{ fontFamily: "'Oswald', sans-serif", color: "var(--kvan-text-dark)" }}>8</div>
              </div>
            </div>
          </div>

          {/* Расписание на 2 недели */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="font-bold text-lg mb-5 flex items-center gap-2" style={{ color: "var(--kvan-text-dark)" }}>
              <Icon name="BookOpen" fallback="Calendar" size={20} style={{ color: "var(--kvan-blue-dark)" }} />
              График уроков на ближайшие 2 недели
            </h2>
            <div className="space-y-2">
              {[
                { date: "14 апр, пн", lessons: [{ time: "10:00", group: "Scratch — Группа A", room: "Каб. 1" }, { time: "14:00", group: "App Inventor — Группа B", room: "Каб. 2" }] },
                { date: "15 апр, вт", lessons: [{ time: "11:00", group: "Kodu Game Lab — Группа C", room: "Каб. 3" }] },
                { date: "16 апр, ср", lessons: [{ time: "10:00", group: "Unity — Группа D", room: "Каб. 4" }, { time: "15:00", group: "Unreal Engine — Группа E", room: "Каб. 5" }] },
                { date: "17 апр, чт", lessons: [{ time: "11:00", group: "Python — Группа F", room: "Каб. 3" }, { time: "14:00", group: "CSS, HTML — Группа G", room: "Каб. 1" }] },
                { date: "18 апр, пт", lessons: [{ time: "10:00", group: "Scratch — Группа A", room: "Каб. 1" }, { time: "13:00", group: "Kodu Game Lab — Группа C", room: "Каб. 3" }] },
                { date: "19 апр, сб", lessons: [{ time: "10:00", group: "App Inventor — Группа B", room: "Каб. 2" }, { time: "12:00", group: "Python — Группа F", room: "Каб. 3" }] },
                { date: "21 апр, пн", lessons: [{ time: "10:00", group: "Scratch — Группа A", room: "Каб. 1" }, { time: "14:00", group: "App Inventor — Группа B", room: "Каб. 2" }] },
                { date: "22 апр, вт", lessons: [{ time: "11:00", group: "Kodu Game Lab — Группа C", room: "Каб. 3" }] },
                { date: "23 апр, ср", lessons: [{ time: "10:00", group: "Unity — Группа D", room: "Каб. 4" }, { time: "15:00", group: "Unreal Engine — Группа E", room: "Каб. 5" }] },
                { date: "24 апр, чт", lessons: [{ time: "11:00", group: "Python — Группа F", room: "Каб. 3" }, { time: "14:00", group: "CSS, HTML — Группа G", room: "Каб. 1" }] },
                { date: "25 апр, пт", lessons: [{ time: "10:00", group: "Scratch — Группа A", room: "Каб. 1" }, { time: "13:00", group: "Kodu Game Lab — Группа C", room: "Каб. 3" }] },
                { date: "26 апр, сб", lessons: [{ time: "10:00", group: "App Inventor — Группа B", room: "Каб. 2" }, { time: "12:00", group: "CSS, HTML — Группа G", room: "Каб. 1" }] },
              ].map((day) => (
                <div key={day.date} className="rounded-xl overflow-hidden border border-gray-100">
                  <div className="px-4 py-2 flex items-center gap-2" style={{ background: "var(--kvan-light)" }}>
                    <Icon name="Calendar" size={14} style={{ color: "var(--kvan-blue-dark)" }} />
                    <span className="font-semibold text-sm" style={{ color: "var(--kvan-text-dark)" }}>{day.date}</span>
                  </div>
                  <div className="divide-y divide-gray-50">
                    {day.lessons.map((l) => (
                      <div key={l.time + l.group} className="px-4 py-3 flex items-center gap-4 bg-white">
                        <span className="text-sm font-bold w-12 shrink-0" style={{ color: "var(--kvan-blue-dark)" }}>{l.time}</span>
                        <span className="text-sm text-gray-700 flex-1">{l.group}</span>
                        <span className="text-xs px-2 py-1 rounded-lg font-medium" style={{ background: "var(--kvan-light)", color: "var(--kvan-text-dark)" }}>{l.room}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ fontFamily: "'Golos Text', sans-serif" }}>
      {/* ─── MODAL LOGIN ────────────────────────────────────────── */}
      {loginOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4" style={{ background: "rgba(26,31,94,0.6)", backdropFilter: "blur(6px)" }}>
          <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-sm animate-pop">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-black" style={{ fontFamily: "'Oswald', sans-serif", color: "var(--kvan-text-dark)" }}>ВХОД</h2>
              <button onClick={() => setLoginOpen(false)} className="text-gray-400 hover:text-gray-600 transition-colors">
                <Icon name="X" size={20} />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: "var(--kvan-text-dark)" }}>Логин</label>
                <input
                  type="text"
                  placeholder="Введите логин"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleLogin()}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-blue-400 text-gray-700 transition-colors"
                  autoFocus
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: "var(--kvan-text-dark)" }}>Пароль</label>
                <input
                  type="password"
                  placeholder="Введите пароль"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleLogin()}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-blue-400 text-gray-700 transition-colors"
                />
              </div>
              <button
                onClick={handleLogin}
                disabled={!loginEmail || !loginPassword}
                className="w-full py-3 rounded-xl font-bold text-base transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ background: "var(--kvan-blue-dark)", color: "#fff" }}
              >
                Войти в кабинет
              </button>
            </div>
          </div>
        </div>
      )}
      {/* ─── NAVBAR ─────────────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 hero-bg shadow-lg">
        <div className="max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
          <a href="#hero" className="flex items-center gap-2">
            <span className="text-2xl font-black tracking-tight text-white" style={{ fontFamily: "'Oswald', sans-serif" }}>
              🧠 КВАНТАСТИКА
            </span>
          </a>

          <ul className="hidden md:flex gap-6">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="nav-link text-white/90 hover:text-white text-sm font-medium">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-3">
            {isLoggedIn ? (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowCabinet(true)}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full transition-all hover:bg-white/20" style={{ background: "rgba(255,255,255,0.15)" }}
                >
                  <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold" style={{ background: "var(--kvan-yellow)", color: "var(--kvan-text-dark)" }}>
                    {userName[0]?.toUpperCase()}
                  </div>
                  <span className="text-white text-sm font-medium">{userName}</span>
                </button>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm transition-all hover:bg-white/10 border border-white/30"
                  style={{ color: "#fff" }}
                >
                  <Icon name="LogOut" size={14} />
                  Выйти
                </button>
              </div>
            ) : (
              <button
                onClick={() => setLoginOpen(true)}
                className="flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-sm transition-all hover:scale-105 active:scale-95 border-2 border-white/40 hover:border-white"
                style={{ color: "#fff" }}
              >
                <Icon name="LogIn" size={16} />
                Войти
              </button>
            )}
            <a
              href="#contacts"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full font-semibold text-sm transition-all hover:scale-105 active:scale-95"
              style={{ background: "var(--kvan-yellow)", color: "var(--kvan-text-dark)" }}
            >
              Записаться
            </a>
          </div>

          <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden hero-bg border-t border-white/20 px-4 pb-4">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-white font-medium border-b border-white/10"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contacts"
              onClick={() => setMenuOpen(false)}
              className="mt-3 block text-center px-5 py-2 rounded-full font-semibold text-sm"
              style={{ background: "var(--kvan-yellow)", color: "var(--kvan-text-dark)" }}
            >
              Записаться
            </a>
          </div>
        )}
      </nav>

      {/* ─── HERO ───────────────────────────────────────────────── */}
      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden" style={{ paddingTop: 64 }}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://cdn.poehali.dev/files/49f04b94-3b22-4d22-886f-79c923cc8db9.jpg')` }}
        />
        <div className="absolute inset-0" style={{ background: "rgba(80, 90, 210, 0.5)" }} />

        <div className="relative max-w-6xl mx-auto px-4 md:px-8 py-20 md:py-32">
          <div className="max-w-2xl">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 animate-fade-up"
              style={{ background: "var(--kvan-yellow)", color: "var(--kvan-text-dark)" }}
            >
              <span className="pulse-dot w-2 h-2 rounded-full bg-green-500 inline-block" />
              Набор открыт — 2026
            </div>

            <h1
              className="text-5xl md:text-7xl font-black text-white leading-tight mb-6 animate-fade-up delay-100"
              style={{ fontFamily: "'Oswald', sans-serif", textShadow: "0 4px 24px rgba(0,0,0,0.3)" }}
            >
              ШКОЛА<br />
              <span style={{ color: "var(--kvan-yellow)" }}>ПРОГРАММИРОВАНИЯ</span><br />
              ДЛЯ ДЕТЕЙ
            </h1>

            <p className="text-xl text-white/90 mb-10 leading-relaxed animate-fade-up delay-200">
              Твой ребёнок научится создавать сайты, игры и роботов.<br />
              Без скучной теории — только живые проекты.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-up delay-300">
              <a
                href="#courses"
                className="px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 active:scale-95 shadow-xl"
                style={{ background: "var(--kvan-yellow)", color: "var(--kvan-text-dark)" }}
              >
                Смотреть курсы
              </a>
              <a
                href="#discount"
                className="px-8 py-4 rounded-full font-bold text-lg border-2 border-white text-white transition-all hover:bg-white/10"
              >
                Проверить грант
              </a>
            </div>

            <div className="flex flex-wrap gap-8 mt-14 animate-fade-up delay-400">
              {[
                { n: "20000+", label: "учеников" },
                { n: "14", label: "направлений" },
                { n: "8 лет", label: "на рынке" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-3xl font-black text-white" style={{ fontFamily: "'Oswald', sans-serif" }}>{s.n}</div>
                  <div className="text-white/70 text-sm">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── COURSES ────────────────────────────────────────────── */}
      <section id="courses" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold px-4 py-1.5 rounded-full" style={{ background: "var(--kvan-light)", color: "var(--kvan-blue-dark)" }}>
              Наши программы
            </span>
            <h2 className="text-4xl md:text-5xl font-black mt-4 mb-4" style={{ fontFamily: "'Oswald', sans-serif", color: "var(--kvan-text-dark)" }}>
              КУРСЫ
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Выберите направление по интересу ребёнка. Все курсы ведут опытные преподаватели-практики.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {COURSES.map((c) => (
              <div key={c.title} className="course-card rounded-2xl p-6 border border-gray-100 bg-white shadow-sm">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-4" style={{ background: c.color + "22" }}>
                  {c.emoji}
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: "var(--kvan-text-dark)" }}>{c.title}</h3>
                <div className="flex gap-2 mb-3 flex-wrap">
                  <span className="text-xs px-2 py-1 rounded-full font-medium" style={{ background: c.color + "22", color: "var(--kvan-text-dark)" }}>
                    👤 {c.age}
                  </span>
                  <span className="text-xs px-2 py-1 rounded-full font-medium bg-gray-100 text-gray-600">
                    🕐 {c.duration}
                  </span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{c.desc}</p>
                <button
                  className="mt-5 w-full py-2.5 rounded-xl font-semibold text-sm transition-all hover:opacity-90 active:scale-95"
                  style={{ background: c.color, color: "var(--kvan-text-dark)" }}
                >
                  Записаться на курс
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DISCOUNT ───────────────────────────────────────────── */}
      <section id="discount" className="py-20" style={{ background: "var(--kvan-light)" }}>
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold px-4 py-1.5 rounded-full" style={{ background: "var(--kvan-blue-dark)", color: "#fff" }}>
              Специальное предложение
            </span>
            <h2 className="text-4xl md:text-5xl font-black mt-4 mb-4" style={{ fontFamily: "'Oswald', sans-serif", color: "var(--kvan-text-dark)" }}>
              ПРОВЕРИТЬ ГРАНТ
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Введите фамилию и имя ребёнка, а также номер школы — мы покажем размер вашего персонального гранта.
            </p>
          </div>

          <div className="max-w-lg mx-auto">
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: "var(--kvan-text-dark)" }}>Город</label>
                  <input
                    type="text"
                    placeholder="Москва"
                    value={city}
                    onChange={(e) => { setCity(e.target.value); setDiscountResult(null); }}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-blue-400 text-gray-700 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: "var(--kvan-text-dark)" }}>№ школы или название</label>
                  <input
                    type="text"
                    placeholder="42 или Гимназия №5"
                    value={schoolNum}
                    onChange={(e) => { setSchoolNum(e.target.value); setDiscountResult(null); }}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-blue-400 text-gray-700 transition-colors"
                  />
                </div>
                <button
                  onClick={checkDiscount}
                  disabled={!city || !schoolNum}
                  className="w-full py-4 rounded-xl font-bold text-lg transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed mt-2"
                  style={{ background: "var(--kvan-blue-dark)", color: "#fff" }}
                >
                  Проверить грант 🎁
                </button>
              </div>

              {discountResult === "found" && (
                <div className="mt-6 space-y-3">
                  {!isLoggedIn && (
                    <div className="fixed inset-0 z-[200] flex items-center justify-center px-4" style={{ background: "rgba(26,31,94,0.65)", backdropFilter: "blur(6px)" }}>
                      <div className="w-full max-w-md rounded-3xl shadow-2xl overflow-hidden animate-pop">
                        <div className="p-8 text-center" style={{ background: "linear-gradient(135deg, #F97316 0%, #EA580C 100%)" }}>
                          <div className="text-5xl mb-4">😔</div>
                          <div className="text-white text-2xl font-black mb-1" style={{ fontFamily: "'Oswald', sans-serif" }}>
                            Гранты закончились
                          </div>
                          <div className="text-white/80 text-sm">Остаток по школе исчерпан</div>
                        </div>
                        <div className="bg-white p-8 space-y-4">
                          {[
                            { label: "Город", value: city },
                            { label: "Школа", value: schoolNum },
                            { label: "Выделено грантов", value: "200" },
                            { label: "Остаток", value: "0 / 200" },
                          ].map((row) => (
                            <div key={row.label} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                              <span className="text-gray-500">{row.label}</span>
                              <span className="font-bold" style={{ color: row.label === "Остаток" ? "#EA580C" : "var(--kvan-text-dark)" }}>{row.value}</span>
                            </div>
                          ))}
                          <p className="text-gray-400 text-sm pt-1">Для данной школы было выделено 200 грантов для льготного обучения. На текущий момент остаток 0/200. Гранты закончились.</p>
                          <button
                            onClick={() => setDiscountResult(null)}
                            className="w-full py-3 rounded-xl font-bold text-base transition-all hover:scale-[1.02] active:scale-95"
                            style={{ background: "var(--kvan-blue-dark)", color: "#fff" }}
                          >
                            Закрыть
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                  {isLoggedIn && !grantUsed && !showStudentForm && (
                    <div className="fixed inset-0 z-[200] flex items-center justify-center px-4" style={{ background: "rgba(26,31,94,0.65)", backdropFilter: "blur(6px)" }}>
                      <div className="w-full max-w-md rounded-3xl shadow-2xl overflow-hidden animate-pop">
                        <div className="p-8 text-center" style={{ background: "linear-gradient(135deg, #4ADE80 0%, #22C55E 100%)" }}>
                          <div className="text-5xl mb-4">🎁</div>
                          <div className="text-white text-2xl font-black mb-1" style={{ fontFamily: "'Oswald', sans-serif" }}>
                            Вам доступно 2 гранта!
                          </div>
                          <div className="text-white/80 text-sm">Хотите использовать для этого ученика?</div>
                        </div>
                        <div className="bg-white p-8 space-y-4">
                          {[
                            { label: "Город", value: city },
                            { label: "Школа", value: schoolNum },
                            { label: "Доступно грантов", value: "2" },
                          ].map((row) => (
                            <div key={row.label} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                              <span className="text-gray-500">{row.label}</span>
                              <span className="font-bold" style={{ color: "var(--kvan-text-dark)" }}>{row.value}</span>
                            </div>
                          ))}
                          <div className="flex gap-3 mt-2">
                            <button
                              onClick={() => setShowStudentForm(true)}
                              className="flex-1 py-3 rounded-xl font-bold text-base transition-all hover:scale-[1.02] active:scale-95"
                              style={{ background: "#22C55E", color: "#fff" }}
                            >
                              Да, использовать
                            </button>
                            <button
                              onClick={() => setDiscountResult(null)}
                              className="flex-1 py-3 rounded-xl font-bold text-base border-2 transition-all hover:bg-gray-50"
                              style={{ borderColor: "var(--kvan-blue-dark)", color: "var(--kvan-blue-dark)" }}
                            >
                              Нет, позже
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {isLoggedIn && !grantUsed && showStudentForm && (
                    <div className="fixed inset-0 z-[200] flex items-center justify-center px-4 overflow-y-auto py-6" style={{ background: "rgba(26,31,94,0.65)", backdropFilter: "blur(6px)" }}>
                      <div className="w-full max-w-md rounded-3xl shadow-2xl overflow-hidden animate-pop">
                        <div className="p-8 text-center" style={{ background: "linear-gradient(135deg, #4ADE80 0%, #22C55E 100%)" }}>
                          <div className="text-5xl mb-4">📋</div>
                          <div className="text-white text-2xl font-black mb-1" style={{ fontFamily: "'Oswald', sans-serif" }}>
                            Данные ученика
                          </div>
                          <div className="text-white/80 text-sm">Заполните для применения гранта</div>
                        </div>
                        <div className="bg-white p-8 space-y-4">
                          <div>
                            <label className="block text-sm font-semibold mb-2" style={{ color: "var(--kvan-text-dark)" }}>ФИО</label>
                            <input
                              type="text"
                              placeholder="Иванов Иван Иванович"
                              value={studentFio}
                              onChange={(e) => setStudentFio(e.target.value)}
                              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-green-400 text-gray-700 transition-colors"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold mb-2" style={{ color: "var(--kvan-text-dark)" }}>Дата рождения</label>
                            <input
                              type="date"
                              value={studentBirthday}
                              onChange={(e) => setStudentBirthday(e.target.value)}
                              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-green-400 text-gray-700 transition-colors"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold mb-2" style={{ color: "var(--kvan-text-dark)" }}>Город</label>
                            <input
                              type="text"
                              placeholder="Москва"
                              value={studentCity}
                              onChange={(e) => setStudentCity(e.target.value)}
                              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-green-400 text-gray-700 transition-colors"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold mb-2" style={{ color: "var(--kvan-text-dark)" }}>№ школы или название</label>
                            <input
                              type="text"
                              placeholder="42 или Гимназия №5"
                              value={studentSchool}
                              onChange={(e) => setStudentSchool(e.target.value)}
                              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-green-400 text-gray-700 transition-colors"
                            />
                          </div>
                          <div className="flex gap-3 mt-2">
                            <button
                              onClick={() => { if (studentFio && studentBirthday && studentCity && studentSchool) { setGrantUsed(true); setShowStudentForm(false); } }}
                              disabled={!studentFio || !studentBirthday || !studentCity || !studentSchool}
                              className="flex-1 py-3 rounded-xl font-bold text-base transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                              style={{ background: "#22C55E", color: "#fff" }}
                            >
                              Применить грант
                            </button>
                            <button
                              onClick={() => setShowStudentForm(false)}
                              className="flex-1 py-3 rounded-xl font-bold text-base border-2 transition-all hover:bg-gray-50"
                              style={{ borderColor: "var(--kvan-blue-dark)", color: "var(--kvan-blue-dark)" }}
                            >
                              Назад
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {isLoggedIn && grantUsed && (
                    <div className="fixed inset-0 z-[200] flex items-center justify-center px-4" style={{ background: "rgba(26,31,94,0.65)", backdropFilter: "blur(6px)" }}>
                      <div className="w-full max-w-md rounded-3xl shadow-2xl overflow-hidden animate-pop">
                        <div className="p-8 text-center" style={{ background: "linear-gradient(135deg, #6B7FFF 0%, #3A4DB5 100%)" }}>
                          <div className="text-5xl mb-4">✅</div>
                          <div className="text-white text-2xl font-black mb-1" style={{ fontFamily: "'Oswald', sans-serif" }}>
                            Грант применён!
                          </div>
                          <div className="text-white/80 text-sm">Подтверждение использования гранта</div>
                        </div>
                        <div className="bg-white p-8 space-y-4">
                          {[
                            { label: "ФИО", value: studentFio },
                            { label: "Дата рождения", value: studentBirthday ? new Date(studentBirthday).toLocaleDateString("ru-RU") : "" },
                            { label: "Город", value: studentCity },
                            { label: "Школа", value: studentSchool },
                            { label: "Осталось грантов", value: "1" },
                            { label: "Дата применения", value: new Date().toLocaleDateString("ru-RU") },
                          ].map((row) => (
                            <div key={row.label} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                              <span className="text-gray-500">{row.label}</span>
                              <span className="font-bold" style={{ color: "var(--kvan-text-dark)" }}>{row.value}</span>
                            </div>
                          ))}
                          <button
                            onClick={() => { setGrantUsed(false); setDiscountResult(null); setStudentFio(""); setStudentBirthday(""); setStudentCity(""); setStudentSchool(""); }}
                            className="mt-2 w-full py-3 rounded-xl font-bold text-base transition-all hover:scale-[1.02] active:scale-95"
                            style={{ background: "var(--kvan-blue-dark)", color: "#fff" }}
                          >
                            Закрыть
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
              {discountResult === "not_found" && (
                <div className="fixed inset-0 z-[200] flex items-center justify-center px-4" style={{ background: "rgba(26,31,94,0.65)", backdropFilter: "blur(6px)" }}>
                  <div className="w-full max-w-md rounded-3xl shadow-2xl overflow-hidden animate-pop">
                    <div className="p-8 text-center" style={{ background: "linear-gradient(135deg, #F9A8D4 0%, #EC4899 100%)" }}>
                      <div className="text-5xl mb-4">🤔</div>
                      <div className="text-white text-2xl font-black mb-1" style={{ fontFamily: "'Oswald', sans-serif" }}>
                        Грант не найден
                      </div>
                      <div className="text-white/80 text-sm">Данные не совпадают с базой</div>
                    </div>
                    <div className="bg-white p-8 space-y-4">
                      {[
                        { label: "Город", value: city },
                        { label: "Школа", value: schoolNum },
                      ].map((row) => (
                        <div key={row.label} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                          <span className="text-gray-500">{row.label}</span>
                          <span className="font-bold" style={{ color: "var(--kvan-text-dark)" }}>{row.value}</span>
                        </div>
                      ))}
                      <p className="text-gray-400 text-sm pt-1">Возможно, данные введены неверно или грант не предусмотрен для вашей школы. Свяжитесь с нами — разберёмся вместе!</p>
                      <button
                        onClick={() => setDiscountResult(null)}
                        className="w-full py-3 rounded-xl font-bold text-base transition-all hover:scale-[1.02] active:scale-95"
                        style={{ background: "var(--kvan-blue-dark)", color: "#fff" }}
                      >
                        Закрыть
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─── REVIEWS ────────────────────────────────────────────── */}
      <section id="reviews" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold px-4 py-1.5 rounded-full" style={{ background: "var(--kvan-light)", color: "var(--kvan-blue-dark)" }}>
              Что говорят родители и ученики
            </span>
            <h2 className="text-4xl md:text-5xl font-black mt-4" style={{ fontFamily: "'Oswald', sans-serif", color: "var(--kvan-text-dark)" }}>
              ОТЗЫВЫ
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {REVIEWS.map((r, i) => (
              <div key={i} className="review-card bg-white rounded-2xl p-7 border border-gray-100 shadow-sm">
                <div className="flex mb-3">
                  {Array.from({ length: r.stars }).map((_, j) => (
                    <span key={j} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed mb-5 text-sm">"{r.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm" style={{ background: "var(--kvan-blue-dark)" }}>
                    {r.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-sm" style={{ color: "var(--kvan-text-dark)" }}>{r.name}</div>
                    <div className="text-gray-400 text-xs">{r.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT ──────────────────────────────────────────────── */}
      <section id="about" className="py-20 hero-bg">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-semibold px-4 py-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.2)", color: "#fff" }}>
                Кто мы
              </span>
              <h2 className="text-4xl md:text-5xl font-black mt-4 mb-6 text-white" style={{ fontFamily: "'Oswald', sans-serif" }}>
                О НАС
              </h2>
              <p className="text-white/90 leading-relaxed mb-4">
                Квантастика — образовательная школа программирования для детей и подростков от 7 до 17 лет. Мы работаем с 2021 года и за это время выпустили более 500 учеников.
              </p>
              <p className="text-white/90 leading-relaxed mb-8">
                Наша миссия — сделать IT-образование живым, понятным и вдохновляющим. Каждый курс — это реальный проект, который ребёнок создаёт сам.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "GraduationCap", text: "Опытные преподаватели-практики" },
                  { icon: "Trophy", text: "Призёры олимпиад и хакатонов" },
                  { icon: "Users", text: "Группы до 8 человек" },
                  { icon: "Laptop", text: "Онлайн и офлайн форматы" },
                ].map((f) => (
                  <div key={f.text} className="flex items-start gap-3 rounded-xl p-4" style={{ background: "rgba(255,255,255,0.12)" }}>
                    <Icon name={f.icon} fallback="Star" size={20} className="text-yellow-300 mt-0.5 shrink-0" />
                    <span className="text-white text-sm leading-tight">{f.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div
                  className="w-64 h-64 md:w-80 md:h-80 rounded-3xl flex items-center justify-center text-9xl"
                  style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(12px)" }}
                >
                  🧠
                </div>
                <div
                  className="absolute -top-4 -right-4 px-4 py-2 rounded-2xl font-bold text-sm"
                  style={{ background: "var(--kvan-yellow)", color: "var(--kvan-text-dark)" }}
                >
                  Резидент Сколково
                </div>
                <div
                  className="absolute -bottom-4 -left-4 px-4 py-2 rounded-2xl font-bold text-sm text-white"
                  style={{ background: "rgba(255,255,255,0.2)", backdropFilter: "blur(8px)" }}
                >
                  20000+ выпускников
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CONTACTS ───────────────────────────────────────────── */}
      <section id="contacts" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold px-4 py-1.5 rounded-full" style={{ background: "var(--kvan-light)", color: "var(--kvan-blue-dark)" }}>
              Свяжитесь с нами
            </span>
            <h2 className="text-4xl md:text-5xl font-black mt-4 mb-4" style={{ fontFamily: "'Oswald', sans-serif", color: "var(--kvan-text-dark)" }}>
              КОНТАКТЫ
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto">
              Оставьте заявку — мы перезвоним в течение часа и расскажем всё о курсах.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div className="bg-white rounded-3xl border border-gray-100 shadow-lg p-8">
              <h3 className="font-bold text-xl mb-6" style={{ color: "var(--kvan-text-dark)" }}>Записаться на курс</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-blue-400 text-gray-700 transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Телефон"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-blue-400 text-gray-700 transition-colors"
                />
                <select className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-blue-400 text-gray-500 transition-colors bg-white">
                  <option value="">Выберите курс</option>
                  {COURSES.map((c) => (
                    <option key={c.title} value={c.title}>{c.emoji} {c.title}</option>
                  ))}
                </select>
                <button
                  className="w-full py-4 rounded-xl font-bold text-lg transition-all hover:scale-[1.02] active:scale-95"
                  style={{ background: "var(--kvan-blue-dark)", color: "#fff" }}
                >
                  Отправить заявку
                </button>
                <p className="text-gray-400 text-xs text-center">
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                </p>
              </div>
            </div>

            <div className="space-y-5">
              {[
                { icon: "Phone", label: "Телефон", value: "+7 (800) 123-45-67", sub: "Бесплатно по России" },
                { icon: "Mail", label: "Email", value: "hello@kvantastika.ru", sub: "Ответим в течение часа" },
                { icon: "MapPin", label: "Адрес", value: "Москва, ул. Академика Королёва, 12", sub: "Пн–Сб: 9:00 – 20:00" },
                { icon: "MessageCircle", label: "Telegram", value: "@kvantastika", sub: "Пишите в любое время" },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-4 p-5 rounded-2xl" style={{ background: "var(--kvan-light)" }}>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: "var(--kvan-blue-dark)" }}>
                    <Icon name={c.icon} fallback="Phone" size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-0.5">{c.label}</div>
                    <div className="font-semibold" style={{ color: "var(--kvan-text-dark)" }}>{c.value}</div>
                    <div className="text-xs text-gray-400">{c.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─────────────────────────────────────────────── */}
      <footer className="hero-bg py-8">
        <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-xl font-black text-white" style={{ fontFamily: "'Oswald', sans-serif" }}>
            🧠 КВАНТАСТИКА
          </span>
          <p className="text-white/60 text-sm">© 2026 Квантастика. Все права защищены.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="text-white/70 hover:text-white text-xs transition-colors">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}