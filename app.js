// ============================================================
// HISTORIAS DEL MUNDO — app.js
// Todo el JS del sitio: íconos, utils, estado local, capa de contenido
// (WordPress, o content-seed.js mientras no exista), motores diarios,
// pasaporte, nav, init de cada página y validación de ANI.
// ============================================================

// ───────────────────────── ICONS ─────────────────────────

const ICONS = {
  book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 5.5C4.5 4.5 8 4.5 12 7c4-2.5 7.5-2.5 10-1.5V19c-2.5-1-6-1-10 1.5C8 18 4.5 18 2 19V5.5z"/><path d="M12 7v13.5"/></svg>',
  compass: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9.5"/><path d="M15.8 8.2l-2.2 5.4-5.4 2.2 2.2-5.4 5.4-2.2z"/></svg>',
  user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.5-7 8-7s8 3 8 7"/></svg>',
  bell: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 5 2 6.5 2 6.5H4S6 13 6 8"/><path d="M10 19a2 2 0 0 0 4 0"/></svg>',
  back: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>',
  chevron: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg>',
  star: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M12 3l2.7 5.6 6.1.8-4.5 4.2 1.1 6.1L12 16.8l-5.4 2.9 1.1-6.1-4.5-4.2 6.1-.8L12 3z"/></svg>',
  starFill: '<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M12 3l2.7 5.6 6.1.8-4.5 4.2 1.1 6.1L12 16.8l-5.4 2.9 1.1-6.1-4.5-4.2 6.1-.8L12 3z"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 12.5l4.5 4.5L19.5 6.5"/></svg>',
  checkCircle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9.5"/><path d="M8 12.3l2.7 2.7L16.2 9.4"/></svg>',
  close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>',
  alert: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5L2.5 20h19L12 3.5z"/><path d="M12 10v4.5"/><path d="M12 17.3h.01"/></svg>',
  flame: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.5c.6 3-1.2 4.8-2.6 6.4C8 10.5 6.5 12.2 6.5 15a5.5 5.5 0 0 0 11 0c0-2.2-1-3.9-2.2-5.3-.2 1.3-.9 2.4-2 2.8.6-3.3-.2-7.2-1.3-10z"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  play: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.5v13l10.5-6.5L8 5.5z"/></svg>',
  edit: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>',
  trash: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/></svg>',
  history: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/><path d="M12 7.5V12l3 2"/></svg>',
  x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round"><path d="M7 7l10 10M17 7L7 17"/></svg>',
  globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2c3 3 4.5 6.5 4.5 10S15 19 12 22c-3-3-4.5-6.5-4.5-10S9 5 12 2z"/></svg>',
  // Temas
  wave: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 13V5.5a1.5 1.5 0 0 1 3 0V12"/><path d="M11 11.5V4a1.5 1.5 0 0 1 3 0v7.5"/><path d="M14 11.5V5.5a1.5 1.5 0 0 1 3 0V14a7 7 0 0 1-7 7h-.5a6 6 0 0 1-4.6-2.2L2.5 15.4a1.6 1.6 0 0 1 2.4-2.1L8 16"/></svg>',
  bowl: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12h18a9 9 0 0 1-18 0z"/><path d="M13 3l-2 9"/><path d="M18 3.5L14 12"/></svg>',
  people: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8.5" cy="8" r="3.2"/><path d="M2.5 20c0-3.5 2.7-6 6-6s6 2.5 6 6"/><circle cx="16.5" cy="7" r="2.6"/><path d="M15.5 13.2c3.4-.6 6 1.8 6 5.3"/></svg>',
  hand: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11V4.5a1.5 1.5 0 0 1 3 0V10"/><path d="M12 10V3.5a1.5 1.5 0 0 1 3 0V10"/><path d="M15 10V5.5a1.5 1.5 0 0 1 3 0V15a6.5 6.5 0 0 1-6.5 6.5h-.8a6 6 0 0 1-4.9-2.6L3.7 15a1.5 1.5 0 0 1 2.3-1.9L9 15.5V8.5a1.5 1.5 0 0 1 3 0"/></svg>',
  door: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 21V4.5A1.5 1.5 0 0 1 6.5 3h11A1.5 1.5 0 0 1 19 4.5V21"/><path d="M3 21h18"/><path d="M15 12.5v.01"/></svg>',
  lamp: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3c1.8 2 2.5 3.5 2.5 5a2.5 2.5 0 0 1-5 0c0-1.5.7-3 2.5-5z"/><path d="M4 13h16l-1.5 3.5a4 4 0 0 1-3.7 2.5H9.2a4 4 0 0 1-3.7-2.5L4 13z"/><path d="M9 21.5h6"/></svg>',
  gift: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="8" width="18" height="4.5" rx="1"/><path d="M5 12.5V20a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-7.5"/><path d="M12 8v13"/><path d="M12 8C10.5 4 6.5 4 6.5 6.3 6.5 8 9.5 8 12 8zM12 8c1.5-4 5.5-4 5.5-1.7C17.5 8 14.5 8 12 8z"/></svg>',
  shirt: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 3.5L3 6.5l2 4.5 2.5-1V21h9V10l2.5 1 2-4.5-5.5-3a3.5 3.5 0 0 1-7 0z"/></svg>',
  camera: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8.5A1.5 1.5 0 0 1 4.5 7h2.8l1.7-2.5h6l1.7 2.5h2.8A1.5 1.5 0 0 1 21 8.5v10a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 18.5v-10z"/><circle cx="12" cy="13.5" r="3.5"/></svg>',
};

// ───────────────────────── UTILS ─────────────────────────

function escapeHtml(str) {
  return String(str ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function pad2(n) { return String(n).padStart(2, '0'); }

function dateKey(d = new Date()) {
  return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;
}

function addDays(d, n) {
  const out = new Date(d);
  out.setDate(out.getDate() + n);
  return out;
}

function fmtLongDate(d = new Date()) {
  const s = d.toLocaleDateString('es', { weekday: 'long', day: 'numeric', month: 'long' });
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function fmtShortDate(key) {
  if (!key) return '';
  const d = new Date(key + 'T00:00:00');
  if (isNaN(d.getTime())) return '';
  const months = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];
  return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
}

function greetingByHour() {
  const h = new Date().getHours();
  if (h < 6) return 'Buenas noches';
  if (h < 13) return 'Buenos días';
  if (h < 20) return 'Buenas tardes';
  return 'Buenas noches';
}

function qs(name) {
  return new URLSearchParams(location.search).get(name);
}

let toastTimer;
function showToast(msg) {
  let el = document.querySelector('.toast');
  if (!el) {
    el = document.createElement('div');
    el.className = 'toast';
    el.setAttribute('role', 'status');
    document.body.appendChild(el);
  }
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 2400);
}

// ───────────────────────── LOCAL STORAGE ─────────────────────────
// Toda la data del USUARIO vive acá — sin backend, sin cuenta. Se pierde si
// el usuario borra el caché o cambia de dispositivo (asumido por ahora).

const STORAGE_KEYS = {
  profile: 'hdm_profile',
  lessons: 'hdm_lessons',
  favorites: 'hdm_favorites',
  recall: 'hdm_recall',
  ani: 'hdm_ani',
};
const DEFAULT_PROFILE = { name: '' };

function readJson(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (e) {
    return fallback;
  }
}

function writeJson(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) { /* modo privado / cuota */ }
}

function getProfile() { return Object.assign({}, DEFAULT_PROFILE, readJson(STORAGE_KEYS.profile, {})); }
function saveProfile(p) { writeJson(STORAGE_KEYS.profile, p); }

// Estado de cada lección: { [id]: { progress: 0-100, status: 'seen'|'done',
// openedAt: ISO, doneOn: 'YYYY-MM-DD' } }. Sin entrada = sin leer.
// `done` es final: volver a abrir la lección no la baja a `seen`.
function getLessonsState() { return readJson(STORAGE_KEYS.lessons, {}); }

function lessonState(id) {
  return getLessonsState()[id] || { progress: 0, status: 'unread' };
}

function markLessonOpened(id) {
  const all = getLessonsState();
  const cur = all[id] || { progress: 0 };
  all[id] = Object.assign({}, cur, { status: cur.status === 'done' ? 'done' : 'seen', openedAt: new Date().toISOString() });
  writeJson(STORAGE_KEYS.lessons, all);
}

// El scroll nunca llega al 100%: eso lo da sólo el botón "Entendido".
function saveLessonProgress(id, pct) {
  const all = getLessonsState();
  const cur = all[id];
  if (!cur || cur.status === 'done') return;
  const next = Math.min(90, Math.max(cur.progress || 0, Math.round(pct)));
  if (next === cur.progress) return;
  all[id] = Object.assign({}, cur, { progress: next });
  writeJson(STORAGE_KEYS.lessons, all);
}

function markLessonDone(id) {
  const all = getLessonsState();
  const cur = all[id] || {};
  all[id] = Object.assign({}, cur, { status: 'done', progress: 100, doneOn: cur.doneOn || dateKey(), openedAt: cur.openedAt || new Date().toISOString() });
  writeJson(STORAGE_KEYS.lessons, all);
}

function getFavorites() { return readJson(STORAGE_KEYS.favorites, []); }
function isFavorite(id) { return getFavorites().includes(id); }
function toggleFavorite(id) {
  const favs = getFavorites();
  const i = favs.indexOf(id);
  if (i >= 0) favs.splice(i, 1); else favs.unshift(id);
  writeJson(STORAGE_KEYS.favorites, favs);
  return i < 0;
}

// Recordatorios respondidos: { [día en que se respondió]: { lessonId, correct } }.
function getRecallLog() { return readJson(STORAGE_KEYS.recall, {}); }
function saveRecallAnswer(lessonId, correct) {
  const log = getRecallLog();
  log[dateKey()] = { lessonId, correct };
  writeJson(STORAGE_KEYS.recall, log);
}

function resetLocalData() {
  Object.entries(STORAGE_KEYS).forEach(([k, key]) => { if (k !== 'ani') localStorage.removeItem(key); });
}

// ───────────────────────── CONTENIDO ─────────────────────────
// Todo el contenido editorial (países, lecciones, alertas, guías) va a vivir
// en WordPress y se trae por REST, igual que en Mis Gastos en Orden: el JSON de
// cada post viaja en `mobile_content` y alcanza UNA llamada por categoría.
// Mientras el WordPress no exista, WP_ENABLED = false y se lee de
// content-seed.js, que tiene exactamente la misma forma.

const WP_ENABLED = false;
const API_BASE = 'https://contenidos.vip/historiasdelmundo/wp-json/api/v3/articles';
const WP_CATEGORY = {
  paises: 'paises',
  lecciones: 'lecciones',
  alertas: 'alertas-culturales',
  guias: 'guias-rapidas',
};
const API_PAGE_SIZE = 100;

async function apiFetchCategory(slug) {
  const out = [];
  for (let page = 1; page <= 10; page++) {
    const res = await fetch(`${API_BASE}/fulldata/category/${encodeURIComponent(slug)}?limit=${API_PAGE_SIZE}&page=${page}`);
    if (!res.ok) throw new Error(`HTTP ${res.status} al pedir "${slug}"`);
    const json = await res.json();
    const data = Array.isArray(json.data) ? json.data : [];
    out.push(...data);
    if (data.length < API_PAGE_SIZE) break;
  }
  return out;
}

// El JSON viaja en el cuerpo del post: puede llegar con una coma colgando o
// con comillas tipográficas si se pegó desde un procesador de texto.
function parseMobileContent(item) {
  let raw = (item && item.mobile_content) || '';
  if (raw.includes('<script')) raw = raw.replace(/^[\s\S]*?<script[^>]*>/i, '').replace(/<\/script>[\s\S]*$/i, '');
  const tries = [raw, raw.replace(/,(\s*[}\]])/g, '$1')];
  if (!raw.includes('"')) tries.push(raw.replace(/[“”]/g, '"').replace(/,(\s*[}\]])/g, '$1'));
  for (const t of tries) {
    try {
      const parsed = JSON.parse(t);
      if (parsed && typeof parsed === 'object') return parsed;
    } catch (e) { /* probamos la siguiente reparación */ }
  }
  console.warn('[contenido] No pude leer el JSON de la nota', item && item.id, item && item.title);
  return null;
}

// El plugin nunca manda `thumbnail` vacío: si no hay destacada, manda su
// placeholder, que hay que descartar para que se use el `image` del JSON.
function wpThumbnail(item) {
  const url = (item && item.thumbnail) || '';
  return /\/default_image\.(png|jpe?g)$/i.test(url) ? '' : url;
}

function toOrder(value) {
  const n = Number(value);
  return Number.isFinite(n) ? n : Number.MAX_SAFE_INTEGER;
}

// Devuelve [{ mc, item }] venga de donde venga, sin JSON roto ni ids repetidos
// (un import corrido dos veces deja duplicados y correría toda la rotación).
async function fetchCollection(key) {
  let pairs;
  if (WP_ENABLED) {
    const raw = await apiFetchCategory(WP_CATEGORY[key]);
    pairs = raw.map((item) => ({ mc: parseMobileContent(item), item }));
  } else {
    pairs = (typeof CONTENT_SEED !== 'undefined' && CONTENT_SEED[key] || []).map((mc) => ({ mc, item: {} }));
  }
  const seen = new Set();
  return pairs.filter(({ mc }) => {
    if (!mc || !mc.id || seen.has(mc.id)) return false;
    seen.add(mc.id);
    return true;
  });
}

const strList = (v) => (Array.isArray(v) ? v.filter((s) => typeof s === 'string' && s.trim()) : []);

const MAPPERS = {
  paises: ({ mc, item }) => ({
    id: mc.id,
    name: mc.name || item.title || '',
    flag: mc.flag || '',
    code: (mc.code || mc.name || '').slice(0, 2).toUpperCase(),
    region: mc.region || '',
    image: wpThumbnail(item) || mc.image || '',
    tagline: mc.tagline || '',
    intro: mc.intro || '',
    essentials: { do: strList(mc.essentials && mc.essentials.do), dont: strList(mc.essentials && mc.essentials.dont) },
    order: toOrder(mc.order),
  }),
  lecciones: ({ mc, item }) => ({
    id: mc.id,
    countryId: mc.countryId || '',
    topicId: mc.topicId || '',
    title: mc.title || item.title || '',
    excerpt: mc.excerpt || '',
    image: wpThumbnail(item) || mc.image || '',
    duration: Number(mc.duration) || 30,
    situation: mc.situation || '',
    do: strList(mc.do),
    why: mc.why || '',
    alert: mc.alert || '',
    recall: mc.recall && mc.recall.question ? { text: mc.recall.text || '', question: mc.recall.question, answer: mc.recall.answer === true } : null,
    order: toOrder(mc.order),
  }),
  alertas: ({ mc }) => ({ id: mc.id, countryId: mc.countryId || null, where: mc.where || '', title: mc.title || '', text: mc.text || '', order: toOrder(mc.order) }),
  guias: ({ mc }) => ({ id: mc.id, rule: mc.rule || '', explanation: mc.explanation || '', order: toOrder(mc.order) }),
};

// Una sola pasada por categoría y por carga de página.
const CONTENT_CACHE = {};
function loadContent(key) {
  if (!CONTENT_CACHE[key]) {
    CONTENT_CACHE[key] = fetchCollection(key)
      .then((pairs) => pairs.map(MAPPERS[key]).sort((a, b) => a.order - b.order))
      .catch((e) => { delete CONTENT_CACHE[key]; throw e; });
  }
  return CONTENT_CACHE[key];
}

async function loadAll() {
  const [countries, lessons, alerts, guides] = await Promise.all(['paises', 'lecciones', 'alertas', 'guias'].map(loadContent));
  const countryById = Object.fromEntries(countries.map((c) => [c.id, c]));
  return { countries, lessons, alerts, guides, countryById };
}

function topicById(id) {
  return APP_DATA.topics.find((t) => t.id === id) || null;
}

// ───────────────────────── MOTORES DIARIOS ─────────────────────────
// Sin timers ni cron: lo del día es función pura de (pool, hoy). Todos los
// usuarios ven lo mismo el mismo día y recargar nunca lo cambia. `order`
// fija la rotación. Math.round() porque con el cambio de horario la resta no
// da un múltiplo exacto de 24 h.

const DAILY_EPOCH = new Date(2024, 0, 1);

function dayIndex(d = new Date()) {
  const local = new Date(d.getFullYear(), d.getMonth(), d.getDate());
  return Math.round((local - DAILY_EPOCH) / 86400000);
}

function dailyPick(pool, d = new Date()) {
  if (!pool.length) return null;
  const n = pool.length;
  return pool[((dayIndex(d) % n) + n) % n];
}

const lessonOfDay = (lessons, d) => dailyPick(lessons, d);
const alertOfDay = (alerts, d) => dailyPick(alerts, d);

// El recordatorio repasa la lección de AYER. Se oculta el día que se responde.
function pendingRecall(lessons) {
  const today = dateKey();
  if (getRecallLog()[today]) return null;
  const yesterday = lessonOfDay(lessons, addDays(new Date(), -1));
  return yesterday && yesterday.recall ? yesterday : null;
}

// ───────────────────────── PROGRESO: racha, nivel, sellos ─────────────────────────
// Nada se guarda como contador: todo se deriva de hdm_lessons en cada carga.

function doneLessons() {
  const all = getLessonsState();
  return Object.entries(all).filter(([, s]) => s.status === 'done').map(([id, s]) => ({ id, ...s }));
}

// Días seguidos con al menos una lección "Entendida". Si hoy todavía no hay
// ninguna, la racha de ayer sigue viva (se corta recién mañana).
function currentStreak() {
  const days = new Set(doneLessons().map((l) => l.doneOn).filter(Boolean));
  let d = new Date();
  if (!days.has(dateKey(d))) d = addDays(d, -1);
  let n = 0;
  while (days.has(dateKey(d))) { n++; d = addDays(d, -1); }
  return n;
}

function levelInfo() {
  const done = doneLessons().length;
  const level = 1 + Math.floor(done / 2);
  const title = APP_DATA.levelTitles.filter((t) => level >= t.from).pop().title;
  return { done, level, title, toNext: 2 - (done % 2), pct: (done % 2) * 50 };
}

function stampStatus(country, lessons) {
  const own = lessons.filter((l) => l.countryId === country.id);
  const need = Math.max(1, Math.min(APP_DATA.stampThreshold, own.length));
  const state = getLessonsState();
  const doneOwn = own.filter((l) => state[l.id] && state[l.id].status === 'done');
  const earned = doneOwn.length >= need;
  // Fecha del sello = el día de la lección que lo completó.
  const dates = doneOwn.map((l) => state[l.id].doneOn).filter(Boolean).sort();
  return { need, count: Math.min(doneOwn.length, need), earned, earnedOn: earned ? dates[need - 1] || dates[dates.length - 1] : '' };
}

function stampInk(country) {
  const inks = APP_DATA.stampInks;
  return inks[(toOrder(country.order) - 1 + inks.length * 10) % inks.length] || inks[0];
}

// Giro "a mano", fijo por país para que no baile entre cargas.
function stampRotation(country) {
  let h = 0;
  for (const ch of country.id) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  return (h % 17) - 8;
}

// ───────────────────────── RENDERERS ─────────────────────────

let svgUid = 0;

function renderStamp(country, status, size = '') {
  const id = `st${++svgUid}`;
  const earned = status.earned;
  const color = earned ? stampInk(country) : '';
  const rot = earned ? stampRotation(country) : 0;
  const name = escapeHtml(country.name.toUpperCase());
  const bottom = earned ? `· ${fmtShortDate(status.earnedOn).toUpperCase()} ·` : `${status.count} DE ${status.need} LECCIONES`;
  return `
    <svg class="stamp ${size} ${earned ? 'earned' : 'pending'}" viewBox="0 0 100 100" style="${earned ? `color:${color};--rot:${rot}deg;transform:rotate(${rot}deg)` : ''}" role="img" aria-label="Sello de ${escapeHtml(country.name)}: ${earned ? 'ganado' : `${status.count} de ${status.need} lecciones`}">
      <defs>
        <path id="${id}t" d="M10.5,50 A39.5,39.5 0 0 1 89.5,50"/>
        <path id="${id}b" d="M5.5,50 A44.5,44.5 0 0 0 94.5,50"/>
      </defs>
      <circle cx="50" cy="50" r="47" fill="none" stroke="currentColor" stroke-width="2.6" ${earned ? '' : 'stroke-dasharray="4 3.2"'}/>
      <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" stroke-width="1.2" ${earned ? '' : 'stroke-dasharray="2 2.4"'}/>
      <text font-size="8.6" letter-spacing="1.4" fill="currentColor"><textPath href="#${id}t" startOffset="50%" text-anchor="middle">${name}</textPath></text>
      <text font-size="6.4" letter-spacing="1" fill="currentColor"><textPath href="#${id}b" startOffset="50%" text-anchor="middle">${escapeHtml(bottom)}</textPath></text>
      <circle cx="4.5" cy="50" r="1.6" fill="currentColor"/><circle cx="95.5" cy="50" r="1.6" fill="currentColor"/>
      <text class="stamp-code" x="50" y="57" font-size="24" text-anchor="middle" fill="currentColor">${escapeHtml(country.code)}</text>
      <path d="M36 64h28" stroke="currentColor" stroke-width="1" ${earned ? '' : 'stroke-dasharray="2 2"'}/>
    </svg>`;
}

function statusPill(id) {
  const s = lessonState(id).status;
  if (s === 'done') return `<span class="status-pill done">${ICONS.check}Entendida</span>`;
  if (s === 'seen') return '<span class="status-pill seen">Empezada</span>';
  return '<span class="status-pill">Sin leer</span>';
}

function renderLessonCard(l, ctx, opts = {}) {
  const c = ctx.countryById[l.countryId];
  const topic = topicById(l.topicId);
  const st = lessonState(l.id);
  const progress = opts.progress
    ? `<div class="lesson-progress"><div class="progress-track"><div class="progress-fill ${st.status === 'done' ? 'done' : ''}" style="width:${st.progress || 0}%"></div></div><span class="progress-label">${st.progress || 0}%</span></div>`
    : '';
  return `
    <a class="lesson-card" href="leccion.html?id=${encodeURIComponent(l.id)}">
      <div class="lesson-thumb">
        <img src="${escapeHtml(l.image)}" alt="" loading="lazy">
        ${c ? `<span class="flag" aria-hidden="true">${c.flag}</span>` : ''}
      </div>
      <div class="lesson-info">
        <p class="lesson-meta">${c ? escapeHtml(c.name) : ''}${topic ? ` · ${escapeHtml(topic.name)}` : ''}</p>
        <h3 class="lesson-title">${escapeHtml(l.title)}</h3>
        ${progress || `<p class="lesson-excerpt">${escapeHtml(l.excerpt)}</p><div style="margin-top:7px">${statusPill(l.id)}</div>`}
      </div>
    </a>`;
}

function renderAlertCard(a, ctx) {
  const c = a.countryId ? ctx.countryById[a.countryId] : null;
  const where = a.where || (c ? c.name : '');
  return `
    <div class="alert-card">
      <div class="alert-icon" aria-hidden="true">${ICONS.alert}</div>
      <div>
        <p class="alert-where">${c ? c.flag + ' ' : ''}${escapeHtml(where)}</p>
        <h3 class="alert-title">${escapeHtml(a.title)}</h3>
        <p class="alert-text">${escapeHtml(a.text)}</p>
      </div>
    </div>`;
}

function renderGuideCard(g, i) {
  return `
    <article class="guide-card">
      <p class="guide-num">N.º ${pad2(i + 1)}</p>
      <h3 class="guide-rule">${escapeHtml(g.rule)}</h3>
      <p class="guide-text">${escapeHtml(g.explanation)}</p>
    </article>`;
}

function renderNation(c, lessons) {
  const st = stampStatus(c, lessons);
  return `
    <a class="nation" href="pais.html?id=${encodeURIComponent(c.id)}">
      <div class="nation-img ${st.earned ? 'stamped' : ''}">
        <img src="${escapeHtml(c.image)}" alt="" loading="lazy">
        <span class="flag" aria-hidden="true">${c.flag}</span>
      </div>
      <span class="nation-name">${escapeHtml(c.name)}</span>
    </a>`;
}

function emptyState(title, text) {
  return `<div class="empty"><strong>${escapeHtml(title)}</strong>${escapeHtml(text)}</div>`;
}

const LOAD_ERROR = () => emptyState('No pudimos cargar el contenido', 'Revisa tu conexión y vuelve a intentarlo en un momento.');

// Celebración al ganar un sello: el sello "cae" estampado.
function celebrateStamp(country, lessons) {
  const st = stampStatus(country, lessons);
  const el = document.createElement('div');
  el.className = 'stamp-celebrate';
  el.innerHTML = `
    <div class="stamp-celebrate-card" role="dialog" aria-modal="true" aria-labelledby="sc-title">
      ${renderStamp(country, st, 'lg')}
      <p class="eyebrow">Nuevo sello</p>
      <h2 id="sc-title">¡${escapeHtml(country.name)} ya está en tu pasaporte!</h2>
      <p>Completaste las lecciones esenciales de ${escapeHtml(country.name)}. Sigue sumando países.</p>
      <a class="cta-btn block" href="perfil.html#pasaporte">Ver mi pasaporte</a>
      <button class="cta-btn ghost block" style="margin-top:8px" type="button" data-close>Seguir aprendiendo</button>
    </div>`;
  document.body.appendChild(el);
  const close = () => el.remove();
  el.querySelector('[data-close]').addEventListener('click', close);
  el.addEventListener('click', (e) => { if (e.target === el) close(); });
}

// Bottom sheet genérico (favoritos, historial, editar nombre).
function openSheet(title, bodyHtml, onMount) {
  closeSheet();
  const backdrop = document.createElement('div');
  backdrop.className = 'sheet-backdrop';
  const sheet = document.createElement('div');
  sheet.className = 'sheet';
  sheet.setAttribute('role', 'dialog');
  sheet.setAttribute('aria-modal', 'true');
  sheet.innerHTML = `
    <div class="sheet-head"><h2 class="sheet-title">${escapeHtml(title)}</h2><button class="icon-btn" type="button" aria-label="Cerrar" data-close>${ICONS.close}</button></div>
    <div class="sheet-body">${bodyHtml}</div>`;
  document.body.append(backdrop, sheet);
  document.body.style.overflow = 'hidden';
  requestAnimationFrame(() => { backdrop.classList.add('open'); sheet.classList.add('open'); });
  backdrop.addEventListener('click', closeSheet);
  sheet.querySelector('[data-close]').addEventListener('click', closeSheet);
  if (onMount) onMount(sheet);
}

function closeSheet() {
  document.querySelectorAll('.sheet, .sheet-backdrop').forEach((el) => el.remove());
  if (!document.getElementById('ani-gate')) document.body.style.overflow = '';
}

// ───────────────────────── NAV / HEADER ─────────────────────────

function initNav(activeId) {
  document.querySelectorAll('.nav-item').forEach((a) => a.classList.toggle('active', a.id === activeId));
  const header = document.querySelector('.app-header');
  if (header) {
    const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 4);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }
  const name = getProfile().name;
  document.querySelectorAll('.js-avatar').forEach((el) => { el.textContent = (name || 'V').charAt(0).toUpperCase(); });
  document.querySelectorAll('.js-user-name').forEach((el) => { el.textContent = name || 'Viajero'; });
}

function bindBack() {
  document.querySelectorAll('.js-back').forEach((b) => b.addEventListener('click', () => {
    if (history.length > 1 && document.referrer && new URL(document.referrer).origin === location.origin) history.back();
    else location.href = b.dataset.fallback || 'index.html';
  }));
}

// ───────────────────────── PÁGINA: LECCIONES (Inicio) ─────────────────────────

async function initHome() {
  initNav('nav-home');
  const root = document.getElementById('home-container');
  const profile = getProfile();
  const streak = currentStreak();

  document.getElementById('home-greeting').innerHTML = `
    <div>
      <p class="greeting-date">${escapeHtml(fmtLongDate())}</p>
      <h1>${greetingByHour()}${profile.name ? `, ${escapeHtml(profile.name)}` : ''}</h1>
    </div>
    <span class="streak ${streak ? '' : 'off'}" title="Días seguidos aprendiendo">${ICONS.flame}${streak} ${streak === 1 ? 'día' : 'días'}</span>`;

  const main = document.getElementById('home-main');
  main.innerHTML = '<div class="sk sk-hero"></div><div class="sk sk-card" style="margin-top:16px"></div>';

  let ctx;
  try {
    ctx = await loadAll();
  } catch (e) {
    console.error(e);
    main.innerHTML = LOAD_ERROR();
    return;
  }
  if (!ctx.lessons.length) {
    main.innerHTML = emptyState('Todavía no hay lecciones', 'Muy pronto vas a encontrar acá tu lección de cada día.');
    return;
  }

  const today = lessonOfDay(ctx.lessons);
  const c = ctx.countryById[today.countryId];
  const st = lessonState(today.id);
  const done = st.status === 'done';
  const recall = pendingRecall(ctx.lessons);
  const alert = alertOfDay(ctx.alerts);

  // Historias recientes = lo último que abrió; si todavía no abrió nada,
  // le proponemos las próximas lecciones de la rotación.
  const all = getLessonsState();
  const recent = ctx.lessons
    .filter((l) => all[l.id] && all[l.id].openedAt && l.id !== today.id)
    .sort((a, b) => all[b.id].openedAt.localeCompare(all[a.id].openedAt))
    .slice(0, 3);
  const idx = ctx.lessons.indexOf(today);
  const upNext = [1, 2, 3].map((k) => ctx.lessons[(idx + k) % ctx.lessons.length]).filter((l) => l && l.id !== today.id);

  main.innerHTML = `
    <a class="hero-lesson" href="leccion.html?id=${encodeURIComponent(today.id)}">
      <img src="${escapeHtml(today.image)}" alt="" fetchpriority="high">
      <div class="hero-body">
        <span class="hero-tag ${done ? 'done' : ''}">${done ? `${ICONS.check.replace('<svg', '<svg width="12" height="12"')} Completada hoy` : 'Lección del día'}</span>
        <h2 class="hero-title">${escapeHtml(today.title)}</h2>
        <p class="hero-excerpt">${escapeHtml(today.excerpt)}</p>
        <div class="hero-foot">
          <span class="hero-meta">${c ? `${c.flag} <b>${escapeHtml(c.name)}</b> · ` : ''}${today.duration} seg</span>
          <span class="cta-btn ${done ? 'light' : ''}">${done ? 'Volver a ver' : `${ICONS.play}Comenzar`}</span>
        </div>
      </div>
    </a>

    <div id="home-recall"></div>

    ${alert ? `
    <section class="section">
      <div class="section-head"><h2 class="section-title">Alerta cultural del día</h2></div>
      ${renderAlertCard(alert, ctx)}
    </section>` : ''}

    <section class="section">
      <div class="section-head">
        <h2 class="section-title">${recent.length ? 'Historias recientes' : 'Sigue con estas'}</h2>
        <a class="section-link" href="explorar.html#lecciones">Ver todas</a>
      </div>
      <div class="lesson-list">${(recent.length ? recent : upNext).map((l) => renderLessonCard(l, ctx, { progress: !!recent.length })).join('')}</div>
    </section>

    ${ctx.guides.length ? `
    <section class="section">
      <div class="section-head"><h2 class="section-title">En caso de duda</h2><a class="section-link" href="explorar.html#guias">Ver todas</a></div>
      <p class="section-sub">Reglas simples que funcionan en casi cualquier país.</p>
      <div class="rail">${rotateFrom(ctx.guides, dailyPick(ctx.guides)).map((g) => renderGuideCard(g, ctx.guides.indexOf(g))).join('')}</div>
    </section>` : ''}
  `;

  renderRecall(recall, ctx);

  const bell = document.getElementById('bell-btn');
  if (bell) {
    bell.querySelector('.dot').hidden = !recall;
    bell.addEventListener('click', () => {
      const card = document.querySelector('.recall-card');
      if (card && !card.dataset.answered) card.scrollIntoView({ behavior: 'smooth', block: 'center' });
      else showToast('Estás al día. ¡Vuelve mañana!');
    });
  }
}

function rotateFrom(list, first) {
  const i = Math.max(0, list.indexOf(first));
  return list.slice(i).concat(list.slice(0, i));
}

function renderRecall(lesson, ctx) {
  const slot = document.getElementById('home-recall');
  if (!slot || !lesson) return;
  const c = ctx.countryById[lesson.countryId];
  slot.innerHTML = `
    <section class="recall-card" aria-labelledby="recall-title">
      <svg class="recall-deco" viewBox="0 0 100 100" aria-hidden="true"><circle cx="50" cy="50" r="46" fill="none" stroke="#fff" stroke-width="3" stroke-dasharray="5 4"/><circle cx="50" cy="50" r="34" fill="none" stroke="#fff" stroke-width="1.5"/></svg>
      <p class="eyebrow" id="recall-title">¿Te acuerdas? · Lección de ayer</p>
      <p class="recall-insight">${escapeHtml(lesson.recall.text)}</p>
      <p class="recall-q"><small>${c ? `${c.flag} ${escapeHtml(c.name)} · ` : ''}¿Verdadero o falso?</small>${escapeHtml(lesson.recall.question)}</p>
      <div class="recall-actions">
        <button class="recall-btn" type="button" data-answer="true">Verdadero</button>
        <button class="recall-btn" type="button" data-answer="false">Falso</button>
      </div>
      <p class="recall-feedback" hidden></p>
    </section>`;
  const card = slot.querySelector('.recall-card');
  card.querySelectorAll('.recall-btn').forEach((btn) => btn.addEventListener('click', () => {
    const answer = btn.dataset.answer === 'true';
    const correct = answer === lesson.recall.answer;
    saveRecallAnswer(lesson.id, correct);
    card.dataset.answered = '1';
    card.querySelectorAll('.recall-btn').forEach((b) => {
      b.disabled = true;
      if ((b.dataset.answer === 'true') === lesson.recall.answer) b.classList.add('correct');
      else if (b === btn) b.classList.add('wrong');
    });
    const fb = card.querySelector('.recall-feedback');
    fb.hidden = false;
    fb.innerHTML = `${correct ? '¡Bien! Lo tienes claro.' : 'Casi. Vale la pena repasarla.'} <a href="leccion.html?id=${encodeURIComponent(lesson.id)}">Ver la lección</a>`;
    const dot = document.querySelector('#bell-btn .dot');
    if (dot) dot.hidden = true;
  }));
}

// ───────────────────────── PÁGINA: EXPLORAR ─────────────────────────

async function initExplorar() {
  initNav('nav-explorar');
  const nations = document.getElementById('ex-nations');
  const topics = document.getElementById('ex-topics');
  const list = document.getElementById('ex-lessons');
  const chips = document.getElementById('ex-chips');
  const guides = document.getElementById('ex-guides');
  nations.innerHTML = Array.from({ length: 5 }, () => '<div class="sk" style="width:76px;height:76px;border-radius:50%"></div>').join('');
  list.innerHTML = '<div class="sk sk-card"></div><div class="sk sk-card"></div>';

  let ctx;
  try {
    ctx = await loadAll();
  } catch (e) {
    console.error(e);
    nations.innerHTML = '';
    list.innerHTML = LOAD_ERROR();
    return;
  }

  nations.innerHTML = ctx.countries.map((c) => renderNation(c, ctx.lessons)).join('');

  const usedTopics = APP_DATA.topics.filter((t) => ctx.lessons.some((l) => l.topicId === t.id));
  let current = usedTopics.some((t) => t.id === qs('tema')) ? qs('tema') : 'all';

  const draw = () => {
    topics.innerHTML = usedTopics.map((t) => {
      const n = ctx.lessons.filter((l) => l.topicId === t.id).length;
      return `
        <button class="topic-tile tone-${t.tone} ${current === t.id ? 'active' : ''}" type="button" data-topic="${t.id}" aria-pressed="${current === t.id}">
          <span class="topic-icon" aria-hidden="true">${ICONS[t.icon] || ''}</span>
          <span><p class="topic-name">${escapeHtml(t.name)}</p><p class="topic-count">${n} ${n === 1 ? 'lección' : 'lecciones'}</p></span>
        </button>`;
    }).join('');
    chips.innerHTML = [{ id: 'all', name: 'Todas' }, ...usedTopics].map((t) =>
      `<button class="chip ${current === t.id ? 'active' : ''}" type="button" data-topic="${t.id}" aria-pressed="${current === t.id}">${escapeHtml(t.name)}</button>`).join('');
    const filtered = current === 'all' ? ctx.lessons : ctx.lessons.filter((l) => l.topicId === current);
    list.innerHTML = filtered.length ? filtered.map((l) => renderLessonCard(l, ctx)).join('') : emptyState('Sin lecciones', 'Todavía no hay lecciones en este tema.');
  };

  const select = (id, scroll) => {
    current = current === id && id !== 'all' ? 'all' : id;
    const url = new URL(location.href);
    if (current === 'all') url.searchParams.delete('tema'); else url.searchParams.set('tema', current);
    history.replaceState(null, '', url.toString());
    draw();
    if (scroll) document.getElementById('lecciones').scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  topics.addEventListener('click', (e) => { const b = e.target.closest('[data-topic]'); if (b) select(b.dataset.topic, true); });
  chips.addEventListener('click', (e) => { const b = e.target.closest('[data-topic]'); if (b) select(b.dataset.topic, false); });
  draw();

  guides.innerHTML = ctx.guides.map((g, i) => renderGuideCard(g, i)).join('');

  if (location.hash) setTimeout(() => document.querySelector(location.hash)?.scrollIntoView({ block: 'start' }), 50);
}

// ───────────────────────── PÁGINA: PAÍS ─────────────────────────

async function initPais() {
  initNav('nav-explorar');
  bindBack();
  const root = document.getElementById('pais-main');
  root.innerHTML = '<div class="sk" style="height:300px;margin:0 -16px;border-radius:0"></div><div class="sk sk-card" style="margin-top:16px"></div>';

  let ctx;
  try {
    ctx = await loadAll();
  } catch (e) {
    console.error(e);
    root.innerHTML = LOAD_ERROR();
    return;
  }
  const c = ctx.countryById[qs('id')];
  if (!c) {
    root.innerHTML = emptyState('País no encontrado', 'Puede que ya no esté disponible.') + '<p style="text-align:center"><a class="cta-btn" href="explorar.html">Ir a Explorar</a></p>';
    return;
  }
  document.title = `${c.name} — Historias del Mundo`;

  const lessons = ctx.lessons.filter((l) => l.countryId === c.id);
  const alerts = ctx.alerts.filter((a) => a.countryId === c.id);
  const st = stampStatus(c, ctx.lessons);

  root.innerHTML = `
    <header class="country-hero">
      <img src="${escapeHtml(c.image)}" alt="">
      <div class="country-hero-body">
        <p class="eyebrow">${c.flag} ${escapeHtml(c.region)}</p>
        <h1 class="country-name">${escapeHtml(c.name)}</h1>
        <p class="country-tagline">${escapeHtml(c.tagline)}</p>
      </div>
    </header>
    ${c.intro ? `<p class="country-intro">${escapeHtml(c.intro)}</p>` : ''}

    ${c.essentials.do.length || c.essentials.dont.length ? `
    <section class="section">
      <div class="section-head"><h2 class="section-title">Lo esencial</h2></div>
      <div class="essentials">
        <div class="ess-col do"><p class="ess-head"><span class="ess-ic">${ICONS.check}</span>Haz</p><ul>${c.essentials.do.map((s) => `<li>${escapeHtml(s)}</li>`).join('')}</ul></div>
        <div class="ess-col dont"><p class="ess-head"><span class="ess-ic">${ICONS.x}</span>Evita</p><ul>${c.essentials.dont.map((s) => `<li>${escapeHtml(s)}</li>`).join('')}</ul></div>
      </div>
    </section>` : ''}

    <section class="section">
      <div class="stamp-progress">
        ${renderStamp(c, st)}
        <div>
          <h3>${st.earned ? 'Sello conseguido' : 'Tu sello de ' + escapeHtml(c.name)}</h3>
          <p>${st.earned ? `Lo ganaste el ${escapeHtml(fmtShortDate(st.earnedOn))}. Ya forma parte de tu pasaporte.` : `Completa ${st.need - st.count === 1 ? 'una lección más' : `${st.need - st.count} lecciones más`} de ${escapeHtml(c.name)} para sumarlo a tu pasaporte.`}</p>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="section-head"><h2 class="section-title">Lecciones</h2></div>
      <div class="lesson-list">${lessons.length ? lessons.map((l) => renderLessonCard(l, ctx)).join('') : emptyState('Muy pronto', 'Estamos preparando las lecciones de este país.')}</div>
    </section>

    ${alerts.length ? `
    <section class="section">
      <div class="section-head"><h2 class="section-title">Alertas culturales</h2></div>
      ${alerts.map((a) => renderAlertCard(a, ctx)).join('')}
    </section>` : ''}
  `;
}

// ───────────────────────── PÁGINA: LECCIÓN ─────────────────────────

async function initLeccion() {
  initNav('nav-home');
  bindBack();
  const root = document.getElementById('leccion-main');
  root.innerHTML = '<div class="sk" style="height:280px;margin:0 -16px;border-radius:0"></div><div class="sk sk-card" style="margin-top:-30px;height:160px"></div>';

  let ctx;
  try {
    ctx = await loadAll();
  } catch (e) {
    console.error(e);
    root.innerHTML = LOAD_ERROR();
    return;
  }
  const l = ctx.lessons.find((x) => x.id === qs('id'));
  if (!l) {
    root.innerHTML = emptyState('Lección no encontrada', 'Puede que ya no esté disponible.') + '<p style="text-align:center"><a class="cta-btn" href="index.html">Ir al inicio</a></p>';
    return;
  }
  document.title = `${l.title} — Historias del Mundo`;
  markLessonOpened(l.id);

  const c = ctx.countryById[l.countryId];
  const topic = topicById(l.topicId);
  const related = ctx.lessons.filter((x) => x.id !== l.id && x.countryId === l.countryId)
    .concat(ctx.lessons.filter((x) => x.id !== l.id && x.countryId !== l.countryId && x.topicId === l.topicId))
    .slice(0, 3);

  root.innerHTML = `
    <div class="ld-hero"><img src="${escapeHtml(l.image)}" alt=""></div>
    <header class="ld-head">
      <p class="ld-meta">
        ${c ? `<a href="pais.html?id=${encodeURIComponent(c.id)}">${c.flag} ${escapeHtml(c.name)}</a><span class="sep"></span>` : ''}
        ${topic ? `<a href="explorar.html?tema=${encodeURIComponent(topic.id)}#lecciones">${escapeHtml(topic.name)}</a><span class="sep"></span>` : ''}
        <span>${l.duration} seg</span>
      </p>
      <h1 class="ld-title">${escapeHtml(l.title)}</h1>
      ${l.situation ? `<p class="ld-situation">${escapeHtml(l.situation)}</p>` : ''}
    </header>

    ${l.do.length ? `
    <section class="ld-block">
      <h2 class="ld-block-title"><span class="num">1</span>Qué hacer</h2>
      <ul class="ld-steps">${l.do.map((s) => `<li>${ICONS.checkCircle}<span>${escapeHtml(s)}</span></li>`).join('')}</ul>
    </section>` : ''}

    ${l.why ? `
    <section class="ld-block">
      <h2 class="ld-block-title"><span class="num">${l.do.length ? 2 : 1}</span>¿Por qué?</h2>
      <p class="ld-why">${escapeHtml(l.why)}</p>
    </section>` : ''}

    ${l.alert ? `<div class="ld-alert">${renderAlertCard({ title: 'Ojo con esto', text: l.alert, where: 'Alerta cultural' }, ctx)}</div>` : ''}

    <div class="ld-done" id="ld-done"></div>

    ${related.length ? `
    <section class="section">
      <div class="section-head"><h2 class="section-title">Sigue aprendiendo</h2></div>
      <div class="lesson-list">${related.map((x) => renderLessonCard(x, ctx)).join('')}</div>
    </section>` : ''}
  `;

  const drawDone = () => {
    const box = document.getElementById('ld-done');
    const done = lessonState(l.id).status === 'done';
    box.classList.toggle('is-done', done);
    box.innerHTML = done
      ? `<p>${ICONS.check.replace('<svg', '<svg width="16" height="16" style="vertical-align:-3px;margin-right:4px"')}Lección entendida</p>`
      : '<p>¿Te quedó claro? Márcala para sumar a tu racha y a tu pasaporte.</p><button class="cta-btn block" type="button" id="ld-done-btn">Entendido</button>';
    const btn = document.getElementById('ld-done-btn');
    if (btn) btn.addEventListener('click', () => {
      const before = c ? stampStatus(c, ctx.lessons).earned : true;
      markLessonDone(l.id);
      drawDone();
      readBar(100);
      if (c && !before && stampStatus(c, ctx.lessons).earned) celebrateStamp(c, ctx.lessons);
      else showToast(`¡Bien! Racha de ${currentStreak()} ${currentStreak() === 1 ? 'día' : 'días'}`);
    });
  };
  drawDone();

  // Favorito
  const fav = document.getElementById('fav-btn');
  const drawFav = () => {
    const on = isFavorite(l.id);
    fav.classList.toggle('on', on);
    fav.innerHTML = on ? ICONS.starFill : ICONS.star;
    fav.setAttribute('aria-pressed', on);
    fav.setAttribute('aria-label', on ? 'Quitar de favoritos' : 'Guardar en favoritos');
  };
  fav.hidden = false;
  drawFav();
  fav.addEventListener('click', () => { const on = toggleFavorite(l.id); drawFav(); showToast(on ? 'Guardada en favoritos' : 'Quitada de favoritos'); });

  // Progreso de lectura: barra fina bajo el header + se guarda el máximo leído.
  const bar = document.querySelector('.read-bar span');
  function readBar(p) { if (bar) bar.style.width = `${p}%`; }
  const doneBox = document.getElementById('ld-done');
  let saveTimer;
  const onScroll = () => {
    const end = doneBox.offsetTop - window.innerHeight + 80;
    const pct = end <= 0 ? 100 : Math.min(100, Math.max(0, (window.scrollY / end) * 100));
    const done = lessonState(l.id).status === 'done';
    readBar(done ? 100 : pct);
    clearTimeout(saveTimer);
    saveTimer = setTimeout(() => saveLessonProgress(l.id, pct), 250);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// ───────────────────────── PÁGINA: PERFIL ─────────────────────────

async function initPerfil() {
  initNav('nav-perfil');
  const root = document.getElementById('perfil-main');

  const drawHead = () => {
    const p = getProfile();
    const lv = levelInfo();
    document.getElementById('perfil-head').innerHTML = `
      <div class="profile-head">
        <div class="avatar">${escapeHtml((p.name || 'V').charAt(0).toUpperCase())}</div>
        <div style="min-width:0">
          <div class="profile-name-row"><h1 class="profile-name">${escapeHtml(p.name || 'Viajero')}</h1><button class="icon-btn" type="button" id="edit-name" aria-label="Editar nombre">${ICONS.edit}</button></div>
          <p class="profile-level">${escapeHtml(lv.title)} · Nivel ${lv.level}</p>
        </div>
      </div>
      <div class="level-bar">
        <div class="level-bar-top"><span>Nivel ${lv.level}</span><span>${lv.toNext === 1 ? 'Falta 1 lección' : `Faltan ${lv.toNext} lecciones`} para el nivel ${lv.level + 1}</span></div>
        <div class="progress-track"><div class="progress-fill" style="width:${lv.pct}%"></div></div>
      </div>`;
    document.getElementById('edit-name').addEventListener('click', editName);
    initNav('nav-perfil');
  };

  const editName = () => {
    openSheet('Tu nombre', `
      <p class="sheet-note">Solo se usa para saludarte. Queda guardado en este dispositivo.</p>
      <label class="field-label" for="name-input">Nombre</label>
      <input class="field" id="name-input" maxlength="30" autocomplete="given-name" value="${escapeHtml(getProfile().name)}">
      <div class="sheet-actions"><button class="cta-btn ghost" type="button" data-close>Cancelar</button><button class="cta-btn" type="button" id="name-save">Guardar</button></div>`,
    (sheet) => {
      const input = sheet.querySelector('#name-input');
      setTimeout(() => input.focus(), 250);
      const save = () => { saveProfile({ ...getProfile(), name: input.value.trim() }); closeSheet(); drawHead(); showToast('Nombre guardado'); };
      sheet.querySelector('#name-save').addEventListener('click', save);
      sheet.querySelector('.sheet-actions [data-close]').addEventListener('click', closeSheet);
      input.addEventListener('keydown', (e) => { if (e.key === 'Enter') save(); });
    });
  };

  drawHead();
  root.innerHTML = '<div class="sk sk-card"></div><div class="sk" style="height:320px;margin-top:16px"></div>';

  let ctx;
  try {
    ctx = await loadAll();
  } catch (e) {
    console.error(e);
    root.innerHTML = LOAD_ERROR();
    return;
  }

  const done = doneLessons();
  const stamps = ctx.countries.map((c) => ({ c, st: stampStatus(c, ctx.lessons) }));
  const earned = stamps.filter((s) => s.st.earned).length;
  const favs = getFavorites().map((id) => ctx.lessons.find((l) => l.id === id)).filter(Boolean);

  root.innerHTML = `
    <div class="stats-row">
      <div class="stat"><p class="stat-num">${done.length}</p><p class="stat-label">Lecciones</p></div>
      <div class="stat"><p class="stat-num">${earned}</p><p class="stat-label">Sellos</p></div>
      <div class="stat"><p class="stat-num">${currentStreak()}</p><p class="stat-label">Días seguidos</p></div>
    </div>

    <section class="section" id="pasaporte">
      <div class="section-head"><h2 class="section-title">Mi pasaporte</h2><span class="section-link" style="color:var(--ink-dim)">${earned} de ${stamps.length}</span></div>
      <p class="section-sub">Completa ${APP_DATA.stampThreshold} lecciones de un país para ganar su sello.</p>
      <div class="passport"><div class="passport-grid">
        ${stamps.map(({ c, st }) => `
          <a class="passport-cell" href="pais.html?id=${encodeURIComponent(c.id)}">
            ${renderStamp(c, st)}
            <p>${escapeHtml(c.name)}<small>${st.earned ? 'Sellado' : `${st.count}/${st.need}`}</small></p>
          </a>`).join('')}
      </div></div>
    </section>

    <section class="section">
      <div class="menu-list">
        <button class="menu-item" type="button" id="mi-favs"><span class="mi-ic">${ICONS.star}</span>Mis favoritos<span class="mi-count">${favs.length}</span><span class="mi-chev">${ICONS.chevron}</span></button>
        <button class="menu-item" type="button" id="mi-hist"><span class="mi-ic">${ICONS.history}</span>Historial<span class="mi-count">${done.length}</span><span class="mi-chev">${ICONS.chevron}</span></button>
        <button class="menu-item danger" type="button" id="mi-reset"><span class="mi-ic">${ICONS.trash}</span>Borrar datos locales<span class="mi-chev">${ICONS.chevron}</span></button>
      </div>
    </section>
  `;

  document.getElementById('mi-favs').addEventListener('click', () => {
    const list = getFavorites().map((id) => ctx.lessons.find((l) => l.id === id)).filter(Boolean);
    openSheet('Mis favoritos', list.length
      ? `<div class="lesson-list">${list.map((l) => renderLessonCard(l, ctx)).join('')}</div>`
      : emptyState('Aún no guardaste lecciones', 'Toca la estrella en cualquier lección para tenerla a mano.'));
  });
  document.getElementById('mi-hist').addEventListener('click', () => {
    const list = doneLessons().sort((a, b) => (b.doneOn || '').localeCompare(a.doneOn || ''))
      .map((d) => ctx.lessons.find((l) => l.id === d.id)).filter(Boolean);
    openSheet('Historial', list.length
      ? `<div class="lesson-list">${list.map((l) => renderLessonCard(l, ctx)).join('')}</div>`
      : emptyState('Todavía no completaste lecciones', 'Empieza por la Lección del día.'));
  });
  document.getElementById('mi-reset').addEventListener('click', () => {
    if (!confirm('Se borrarán tu progreso, sellos, favoritos y nombre de este dispositivo. ¿Continuar?')) return;
    resetLocalData();
    showToast('Datos borrados');
    setTimeout(() => location.reload(), 600);
  });

  if (location.hash === '#pasaporte') setTimeout(() => document.getElementById('pasaporte').scrollIntoView({ block: 'start' }), 50);
}

// ───────────────────────── VALIDACIÓN DE ANI ─────────────────────────
// Mismo sistema que Retofit, MindMusic y Mis Gastos en Orden. Sin login: lo
// único que habilita la app es que el ANI esté suscripto al club.
//   1. La operadora redirige con ?ani=... → ya viene validado, se guarda.
//   2. Sin ANI válido → pantalla bloqueante para cargarlo a mano.
// La validación se renueva por mes calendario (el ciclo de facturación).

const ANI_KEY = STORAGE_KEYS.ani;
const ANI_VALIDATE_BASE = 'https://restito.playtown.com.ar:3000/club/checkClubSubscription/playar';
// TODO: club ID de Historias del Mundo en el sistema de Playtown (Retofit = 35).
// Con 'TODO' la API responde "no suscripto" y nadie entra por el camino manual.
const ANI_CLUB_ID = 'TODO';
const ANI_BEARER = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.pwI0ElRICzc-j85krDiV5nUkz_lZLwmiuJ3m790JNBQ';
// Chile es el mercado de lanzamiento (va primero y por defecto); sumar un país
// es agregar una fila acá.
const ANI_COUNTRIES = [
  { prefix: '56', name: 'Chile', flag: '🇨🇱', placeholder: '9 1234 5678' },
  { prefix: '54', name: 'Argentina', flag: '🇦🇷', placeholder: '11 1234 5678' },
  { prefix: '595', name: 'Paraguay', flag: '🇵🇾', placeholder: '961 123456' },
];

function isAniValidThisMonth() {
  const saved = readJson(ANI_KEY, null);
  if (!saved || !saved.ani || !saved.validatedAt) return false;
  const d = new Date(saved.validatedAt);
  const now = new Date();
  return d.getFullYear() === now.getFullYear() && d.getMonth() === now.getMonth();
}

function saveAni(ani) {
  writeJson(ANI_KEY, { ani, validatedAt: new Date().toISOString() });
}

async function validateAniWithApi(fullAni) {
  const res = await fetch(`${ANI_VALIDATE_BASE}/${encodeURIComponent(fullAni)}/${ANI_CLUB_ID}`, {
    method: 'GET',
    headers: { Authorization: `Bearer ${ANI_BEARER}` },
    // La API tarda varios segundos; sin corte, una red caída deja el botón
    // en "VERIFICANDO..." para siempre.
    signal: AbortSignal.timeout(20000),
  });
  if (!res.ok) throw new Error('HTTP ' + res.status);
  const data = await res.json();
  return typeof data.result === 'object' && !!data.result?.ANI;
}

function checkAniInUrl() {
  const ani = qs('ani');
  if (!ani || !ani.trim()) return false;
  saveAni(ani.trim());
  const url = new URL(location.href);
  url.searchParams.delete('ani');
  history.replaceState(null, '', url.toString());
  return true;
}

// Saca todo lo que no sea dígito, los 0 iniciales y el prefijo si lo escribió.
function normalizeAniInput(value, prefix) {
  let digits = String(value).replace(/\D/g, '').replace(/^0+/, '');
  if (digits.startsWith(prefix) && digits.length > 9) digits = digits.slice(prefix.length);
  return digits;
}

function showAniGate() {
  if (document.getElementById('ani-gate')) return;
  const first = ANI_COUNTRIES[0];
  const gate = document.createElement('div');
  gate.id = 'ani-gate';
  gate.className = 'ani-gate';
  gate.innerHTML = `
    <div class="ani-card" role="dialog" aria-modal="true" aria-labelledby="ani-title">
      <img class="ani-brand" src="assets/brand/logo-lockup.png" alt="Historias del Mundo">
      <h2 class="ani-title" id="ani-title">Verifica tu suscripción</h2>
      <p class="ani-sub">Para entrar a Historias del Mundo necesitas una suscripción activa. Ingresa el número de tu línea para verificarla.</p>
      <label class="ani-label" for="ani-country">País</label>
      <select class="field ani-select" id="ani-country">
        ${ANI_COUNTRIES.map((c) => `<option value="${c.prefix}">${c.flag} ${c.name} (+${c.prefix})</option>`).join('')}
      </select>
      <label class="ani-label" for="ani-input">Número de celular</label>
      <div class="ani-input-wrap">
        <span class="ani-cc" id="ani-cc">+${first.prefix}</span>
        <input class="ani-input" type="tel" id="ani-input" placeholder="${first.placeholder}" inputmode="numeric" maxlength="16" autocomplete="tel-national">
      </div>
      <p class="ani-error" id="ani-error" role="alert"></p>
      <button class="ani-btn" id="ani-btn" type="button">VERIFICAR</button>
      <p class="ani-foot">Sin registro ni contraseña: solo validamos que tu línea tenga el servicio activo.</p>
    </div>`;
  document.body.appendChild(gate);
  document.body.style.overflow = 'hidden';

  const input = gate.querySelector('#ani-input');
  const sel = gate.querySelector('#ani-country');
  sel.addEventListener('change', () => {
    const c = ANI_COUNTRIES.find((x) => x.prefix === sel.value) || first;
    gate.querySelector('#ani-cc').textContent = `+${c.prefix}`;
    input.placeholder = c.placeholder;
  });
  gate.querySelector('#ani-btn').addEventListener('click', handleAniValidate);
  input.addEventListener('keydown', (e) => { if (e.key === 'Enter') handleAniValidate(); });
}

function hideAniGate() {
  document.getElementById('ani-gate')?.remove();
  document.body.style.overflow = '';
}

async function handleAniValidate() {
  const btn = document.getElementById('ani-btn');
  const errEl = document.getElementById('ani-error');
  const input = document.getElementById('ani-input');
  const prefix = document.getElementById('ani-country')?.value || ANI_COUNTRIES[0].prefix;
  if (!btn || !errEl || !input) return;

  errEl.textContent = '';
  const digits = normalizeAniInput(input.value, prefix);
  if (digits.length < 8) {
    errEl.textContent = 'Ingresa un número válido, sin el 0 inicial.';
    return;
  }

  btn.disabled = true;
  btn.textContent = 'VERIFICANDO...';
  try {
    if (await validateAniWithApi(prefix + digits)) {
      saveAni(prefix + digits);
      hideAniGate();
    } else {
      errEl.textContent = 'Número no suscripto. Contacta a tu operadora para activar el servicio.';
    }
  } catch (e) {
    errEl.textContent = 'No pudimos verificar. Revisa tu conexión e intenta de nuevo.';
  } finally {
    btn.disabled = false;
    btn.textContent = 'VERIFICAR';
  }
}

// La página se arma igual detrás del velo, así queda lista al validar.
function initAniGuard() {
  checkAniInUrl();
  if (ANI_CLUB_ID === 'TODO') console.warn('[ANI] ANI_CLUB_ID sin configurar en app.js — ninguna validación manual va a pasar.');
  if (!isAniValidThisMonth()) showAniGate();
}

// ───────────────────────── ROUTER ─────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  initAniGuard();
  if (document.getElementById('home-container')) { initHome(); return; }
  if (document.getElementById('explorar-container')) { initExplorar(); return; }
  if (document.getElementById('pais-container')) { initPais(); return; }
  if (document.getElementById('leccion-container')) { initLeccion(); return; }
  if (document.getElementById('perfil-container')) { initPerfil(); return; }
});
