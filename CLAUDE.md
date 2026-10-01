# HISTORIAS DEL MUNDO — Contexto del proyecto

## Qué es
Club de Playtown de **educación cultural para viajeros**: microcontenidos diarios (20–40 s) sobre normas, tabúes, gestos y rituales de cada país. "No es turismo ni geografía." Hermana de Mis Gastos en Orden, Retofit y MindMusic (mismo patrón de arquitectura). Sin registro ni login: acceso por ANI, datos del usuario en `localStorage`.

Fuente del producto: `HISTORIAS DEL MUNDO - Presentación.pdf` + `HISTORIAS DEL MUNDO - Brochure.png`. El brief completo está en `BRIEF.md`. **Los mockups de pantalla del brochure NO son referencia** (decisión del usuario, 2026-09-29): se diseña desde los PDF con libertad creativa.

- **Mercado**: Chile primero, pero multi-país → el gate de ANI tiene selector (Chile por defecto, AR y PY). Sumar un país = una fila en `ANI_COUNTRIES` (`app.js`).
- **Idioma**: español **neutro con tú** (nada de voseo, aunque el brochure lo use).

## Los 4 formatos del brochure → la app
| Brochure | App |
|---|---|
| Microcontenido diario | **Lección del día** (hero de Inicio), rota sola |
| Contexto cultural ampliado | Bloque **"¿Por qué?"** de cada lección |
| Recordatorios inteligentes | Card **"¿Te acuerdas?"** en Inicio: insight + V/F sobre la lección de *ayer* |
| Alertas culturales | **Alerta cultural del día** en Inicio + alertas por país |
| Guías rápidas "En caso de duda" | Carrusel en Inicio + lista en Explorar |

## Archivos
| Archivo | Rol |
|---|---|
| `index.html` | Lecciones (Inicio): saludo + racha, Lección del día, ¿Te acuerdas?, Alerta del día, Historias recientes (o "Sigue con estas"), En caso de duda |
| `explorar.html` | Naciones (carrusel), Temas (grid), Todas las lecciones (chips por tema, `?tema=`), guías |
| `pais.html?id=` | Hero, intro, Lo esencial (Haz / Evita), estado del sello, lecciones y alertas del país |
| `leccion.html?id=` | Situación → Qué hacer → ¿Por qué? → Alerta → "Entendido" → Sigue aprendiendo. Favorito (estrella) y barra de lectura |
| `perfil.html` | Nombre, nivel, stats, **Mi pasaporte**, Favoritos / Historial (bottom sheets), Borrar datos locales |
| `app.js` | Íconos, utils, localStorage, capa de contenido, motores diarios, pasaporte, renderers, init de páginas, ANI |
| `app-data.js` | Catálogo local atado a la UI: temas (ícono/tono), umbral y tintas de sellos, títulos de nivel |
| `content-seed.js` | Contenido editorial inicial (8 países, 24 lecciones, 12 alertas, 9 guías) con la forma exacta del JSON de WordPress |
| `assets/brand/` | Logo extraído del PDF (`logo-mark.png`, `logo-lockup.png`), íconos de app y favicon |
| `assets/img/` | Fotos de Unsplash (licencia libre); autores en `CREDITOS.txt` |
| `.claude/launch.json` | Server estático local (`python3 -m http.server 4322`) |

## Contenido: WordPress (todavía no existe)
Mismo patrón que Mis Gastos: JSON en el cuerpo del post → `mobile_content`, una llamada `fulldata/category/{slug}?limit=100` por categoría, `parseMobileContent()` tolerante, dedupe por `id`.
- **Hoy `WP_ENABLED = false`** en `app.js` → todo sale de `content-seed.js`. Cuando exista el sitio (`contenidos.vip/historiasdelmundo`, slug a confirmar): generar el WXR desde el seed, importar, poner `WP_ENABLED = true` y sacar `content-seed.js` de los HTML.
- Categorías: `paises`, `lecciones`, `alertas-culturales`, `guias-rapidas`. Formas en `MAPPERS` (`app.js`) y en el seed.
- `order` fija la rotación diaria; las lecciones están intercaladas por país para que dos días seguidos no caigan en el mismo.

## Motores (sin cron: funciones puras de pool + hoy)
- `dayIndex()` cuenta días desde `DAILY_EPOCH` (1-ene-2024); `dailyPick(pool)` = `pool[dayIndex % n]`. Todos ven lo mismo el mismo día.
- **¿Te acuerdas?** = `lessonOfDay(ayer).recall`; se oculta el día que se responde (`hdm_recall`).
- **Racha**: días seguidos con ≥1 lección "Entendida"; si hoy no hay, cuenta desde ayer.
- **Nivel**: `1 + floor(entendidas / 2)`; títulos en `APP_DATA.levelTitles`.
- **Sellos**: país con `stampThreshold` (3) lecciones entendidas (o todas, si tiene menos). Nada se guarda como contador: todo se deriva de `hdm_lessons`.

## Pasaporte (pieza de identidad)
`renderStamp()` dibuja un sello SVG tipo aduana: nombre del país en el arco superior, código (JP, MA…) al centro, fecha en el arco inferior. Pendiente = punteado beige con "N DE 3 LECCIONES"; ganado = tinta sólida (`stampInks`) y girado a mano (rotación fija por país). Aparece en Perfil, País y en la celebración al completar el sello (`celebrateStamp()`).

## localStorage (`hdm_`)
`hdm_profile` `{name}` · `hdm_lessons` `{[id]: {progress, status: 'seen'|'done', openedAt, doneOn}}` (el scroll llega hasta 90%, el 100% lo da "Entendido") · `hdm_favorites` `[ids]` · `hdm_recall` `{[día]: {lessonId, correct}}` · `hdm_ani` (no lo borra `resetLocalData()`).

## ANI
Igual que Mis Gastos (gate bloqueante, `?ani=` de la operadora, vigencia por mes calendario). ⚠️ **`ANI_CLUB_ID = 'TODO'`**: pedir el club ID antes de deployar. Para previsualizar local: abrir con `?ani=56900000000`.

## Sistema visual — "Cuaderno de viaje"
Papel crema `--bg #f6efe3`, tinta `--ink #2a211a`, y los colores del logo: azul petróleo `--sea #33535f` (nav, recordatorio), dorado `--gold #b47e24` (eyebrows, alertas), naranja `--orange #c27234` (progreso) con `--accent #b25a22` para botones (AA con texto blanco). `Literata` para títulos (con itálica real para situaciones y taglines) + `Inter` para cuerpo. Nav mobile en píldora flotante azul petróleo; sidebar claro en desktop (≥900px).

## Convenciones
- Sin frameworks ni build. CSS con custom properties en `:root`. `app.js` detecta la página por el id del contenedor (`home-container`, `explorar-container`, `pais-container`, `leccion-container`, `perfil-container`).
- Skeletons mientras carga el contenido; empty-state si falla (sin fallback cuando WP esté activo).
- Contenido cultural: dato verificable, tono respetuoso, explicar el *por qué*, nunca ridiculizar ninguna cultura.
