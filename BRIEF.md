# HISTORIAS DEL MUNDO — Brief de producto y página

> Club Playtown · app web mobile-first · hermana de Mis Gastos en Orden, Retofit y MindMusic (mismo patrón de arquitectura).
> Fuentes: `HISTORIAS DEL MUNDO - Presentación.pdf` (5 slides) y `HISTORIAS DEL MUNDO - Brochure.png` (incluye los 3 mockups de pantalla).

---

## 1. Qué es

**"El club que te enseña a convivir y respetar las costumbres reales de cada país."**

Un servicio diario de **microcontenidos culturales** (20–40 segundos de lectura) que explica normas, tabúes, gestos, rituales y comportamientos que pueden generarte problemas si no los conocés.

- **No es turismo ni geografía.** Es educación cultural para viajar con confianza, respeto y sensibilidad.
- **Por qué existe:** la mayoría de los malentendidos entre viajeros y locales pasan por desconocimiento cultural, no por mala intención.
- **Qué aprende el usuario:** evitar insultos involuntarios · reconocer códigos sociales invisibles · integrarse con respeto · entender el *por qué* detrás de cada gesto.

Ejemplos de contenido (de la presentación): el significado del té en Marruecos · cómo comportarte al entrar a una casa japonesa · saludos en Corea del Sur · gestos a evitar en India · qué no fotografiar en Medio Oriente.

**Éxito =** el usuario vuelve todos los días a su lección, y sale de cada una sabiendo **qué hacer** y **por qué**.

---

## 2. Los 4 formatos de contenido (del brochure → a la app)

| Formato del brochure | Cómo vive en la app |
|---|---|
| **Microcontenido diario** (20–40 s, ejemplos concretos, situaciones reales) | La **Lección del día**: una por día, igual para todos, rota sola. Es el hero de Inicio. |
| **Contexto cultural ampliado** | Bloque "¿Por qué?" dentro de cada lección: de dónde viene la costumbre y cómo respetarla. |
| **Recordatorios inteligentes** | Card **"¿Te acordás?"** en Inicio: repasa la lección de *ayer* con un insight corto + una pregunta rápida de verdadero/falso. |
| **Alertas culturales** | Cards **"Alerta cultural"**: cosas normales para vos que afuera se interpretan mal. Aparecen en Inicio (1 por día) y dentro de cada país. |
| **Guías rápidas "En caso de duda"** | Carrusel de mini reglas universales ("observá antes de actuar", "aceptá lo que te ofrecen con las dos manos"…). En Inicio y en Explorar. |

---

## 3. Mapa de páginas

Nav inferior de **3 ítems**, igual que el mockup: **Lecciones · Explorar · Perfil**.
(En desktop ≥900px, sidebar como en las otras apps.)

```
index.html      → Lecciones (Inicio)          [nav: Lecciones]
explorar.html   → Explorar                    [nav: Explorar]
pais.html?id=   → Detalle de un país          [nav: Explorar, con "← Volver"]
leccion.html?id=→ Detalle de una lección      [nav: Lecciones, con "← Volver"]
perfil.html     → Perfil / Pasaporte          [nav: Perfil]
```

### 3.1 `index.html` — Lecciones (Inicio)
Orden de arriba a abajo (mockup pantalla 1 + los formatos del brochure):

1. **Header**: logo Historias del Mundo + campanita (lleva a la card "¿Te acordás?" si está pendiente, con puntito si hay recordatorio sin responder).
2. **Saludo + racha**: "Hola, {nombre}" · "🔥 5 días seguidos" (chiquito, no invasivo).
3. **Hero "Lección del día"**: foto a sangre con degradé, eyebrow `LECCIÓN DEL DÍA`, título en serif, bajada, país + duración ("🇯🇵 Japón · 30 seg"), botón pill naranja **Comenzar** → `leccion.html`. Si ya se completó hoy: cambia a "Completada ✓ · Volver a ver".
4. **"¿Te acordás?"** (recordatorio inteligente): insight de la lección de ayer + pregunta V/F con feedback inmediato. Se oculta cuando se responde (o si ayer no hubo lección vista).
5. **Alerta cultural del día**: card con borde/acento distinto (dorado/ámbar, no rojo alarma), país + texto corto.
6. **Historias recientes** ("Ver todas"): las últimas lecciones abiertas, con miniatura, bajada y **barra de progreso** (como el mockup: Festival de Holi 65%, Secretos de Giza 30%). El progreso = cuánto se leyó de la lección (scroll) / 100% al tocar "Entendido".
7. **Guías rápidas "En caso de duda"**: carrusel horizontal de cards chicas con la regla en grande.

### 3.2 `explorar.html` — Explorar
(Mockup pantalla 2.)

1. **Explorar Naciones** ("Ver todas"): fila horizontal scrolleable de círculos con bandera/foto + nombre del país. Tocar → `pais.html?id=`.
2. **Temas en Tendencia**: grid 2 columnas de tiles pastel con ícono (mockup: Mitología Nórdica, Arte Renacentista, Gastronomía, Arquitectura — **ver pregunta abierta #4**, propongo temas de etiqueta cultural: Saludos · En la mesa · Gestos · Visitas y hogar · Vestimenta · Fotografía · Regalos · Religión y rituales).
   Tocar un tema filtra la lista de abajo.
3. **Todas las lecciones**: lista filtrable por chips (tema) — mismas cards de Historias recientes, con estado (Sin leer / Vista / Entendida ✓).
4. **Guías "En caso de duda"**: la lista completa.

Sin buscador (igual que Mis Gastos). Se puede sumar después si el catálogo crece.

### 3.3 `pais.html?id=` — País
1. Hero con foto del país, bandera, nombre, región, 1 línea de intro ("Donde el silencio también es respeto").
2. **Lo esencial**: dos columnas "Hacé ✓ / Evitá ✕" (4–6 ítems cortos).
3. **Alertas culturales** de ese país.
4. **Lecciones** de ese país con estado de lectura.
5. **Sello del pasaporte**: estado del sello de ese país (ver §4) — "Completá 3 lecciones para ganar el sello de Japón".

### 3.4 `leccion.html?id=` — Lección (el microcontenido)
Estructura fija, pensada para leerse en 20–40 s:

1. Foto + eyebrow (país · tema · duración) + título serif.
2. **La situación**: 1–2 líneas de escena real ("Te invitan a cenar a una casa en Kioto…").
3. **Qué hacer**: 2–4 bullets accionables.
4. **¿Por qué?** (contexto cultural ampliado): párrafo corto con el origen.
5. **Alerta** (opcional): el error típico del viajero.
6. **Botón "Entendido"** → marca la lección como completada, suma a racha/nivel/sello y muestra micro-celebración (si destraba sello: animación del sello estampándose).
7. Estrella de **Favorito** en el header.
8. **Lecciones relacionadas** (mismo país o mismo tema, hasta 3).

### 3.5 `perfil.html` — Perfil / Pasaporte
(Mockup pantalla 3, adaptado a "sin login".)

1. Avatar + nombre editable + nivel: **"Explorador de Culturas · Nivel 12"**.
2. **Stats** (3 tiles como el mockup): `24 Lecciones` · `8 Sellos` · `15 Días` (racha).
3. **Mi Pasaporte**: grilla de sellos por país — ganados en color, pendientes en línea punteada (reemplaza "Insignias recientes" del mockup y es la pieza de identidad, ver §4).
4. Lista: **Mis Favoritos** · **Historial** · **Borrar datos locales**.
   → Se **saca "Cerrar sesión"** del mockup: no hay login (acceso por ANI, como las otras apps). "Configuración" sólo tendría sentido si hay algo que configurar — por ahora nombre + borrar datos alcanzan.

---

## 4. Pieza de identidad: el Pasaporte

Así como Mis Gastos tiene el anillo de vencimiento y la luna, Historias del Mundo tiene **el pasaporte con sellos**:

- Cada país tiene un **sello** propio (SVG circular/ovalado estilo sello de aduana, con el nombre del país y un pictograma).
- Se gana al completar **3 lecciones** de ese país (umbral a confirmar).
- El sello aparece en: Perfil (Mi Pasaporte), página del país, y como celebración al tocar "Entendido".
- Gramática visual: pendiente = contorno punteado gris · en progreso = contorno con anillo parcial · ganado = tinta sólida levemente rotada, como estampado a mano.

**Nivel** = lecciones completadas / 2 (redondeado para arriba) → progresa rápido al principio, se siente vivo.
**Racha** = días calendario consecutivos con al menos una lección "Entendida".

---

## 5. Motores (misma filosofía: sin backend, sin cron, funciones puras)

| Motor | Regla |
|---|---|
| **Lección del día** | `pool[dayIndex % pool.length]`, con `dayIndex` = días desde un epoch fijo, ordenado por `order`. Todos ven la misma lección el mismo día; recargar no la cambia. (Mismo mecanismo que los retos semanales de Mis Gastos, pero diario.) |
| **¿Te acordás?** | Toma la lección del día de *ayer* (misma fórmula con `hoy - 1`). Muestra su `recordatorio`. Se guarda si se respondió para no repetirla. |
| **Alerta del día** | Misma rotación diaria sobre el pool de alertas. |
| **Racha / nivel / sellos** | Se derivan en cada carga desde el registro local de lecciones completadas (`{ id: fecha }`). No se guardan contadores: se recalculan. |

---

## 6. Stack (idéntico a Mis Gastos en Orden)

- **Multi-página estática**, HTML + `styles.css` + `app.js` compartidos. Sin framework, sin build.
- `app-data.js`: catálogo local atado a la UI → **temas** (id, nombre, ícono, color pastel) y definición de sellos.
- **Contenido editorial por REST de WordPress** en `contenidos.vip/{slug}` (ver pregunta #2), JSON en el cuerpo del post → `mobile_content`, una llamada `fulldata/category/{slug}?limit=100` por categoría, `parseMobileContent()` tolerante, dedupe por `id`, skeletons mientras carga, empty-state sin fallback estático.
- **Datos del usuario 100% `localStorage`** (prefijo `hdm_`): `hdm_profile`, `hdm_lessons` (estado + progreso por lección), `hdm_favorites`, `hdm_recall` (recordatorios respondidos), `hdm_ani`.
- **Validación de ANI** igual que las otras (gate bloqueante, vigencia por mes calendario, `?ani=` de la operadora).
- `wp-import/` con el WXR de contenido inicial + `LEEME.md`, y `tools/generate-wp-import.js`.
- `CLAUDE.md` / `PRODUCT.md` del proyecto (se escriben a partir de este brief al arrancar).
- `.claude/launch.json` con server estático local; deploy en Vercel (el mockup muestra `historias-mundo.vercel.app`).

### Categorías de WordPress propuestas

| Categoría | JSON |
|---|---|
| `lecciones` | `{ id, countryId, topicId, title, excerpt, image, duration, situation, do[], why, alert?, recall: { text, question, answer: true/false }, order }` |
| `paises` | `{ id, name, flag, region, image, tagline, essentials: { do[], dont[] }, order }` |
| `alertas-culturales` | `{ id, countryId, title, text, order }` |
| `guias-rapidas` | `{ id, rule, explanation, order }` |

---

## 7. Sistema visual — propuesta "Cuaderno de viaje"

Sale del logo (globo + valija + libro abierto naranja, wordmark dorado en capitales romanas) y de los mockups (fondo crema, acento naranja, títulos en serif, tiles pastel).

- **Color**
  - `--bg` crema papel `#f7f1e7` · `--card` blanco cálido `#fffdf9`
  - `--ink` marrón tinta `#2b2118` · `--ink-dim` `#6e5f52`
  - `--accent` **naranja libro** `#d4712a` (CTA, progreso, activo) · `--accent-ink` `#9a4a12` para texto sobre claro (AA)
  - `--gold` dorado wordmark `#a8801f` (eyebrows, alertas culturales, sellos)
  - `--sea` **azul petróleo** `#1d3b4a` (sale del globo y del fondo del brochure) → nav inferior flotante y hero oscuro
  - Pasteles para temas: arena, salvia, lavanda, celeste, rosa viejo — siempre chequeados AA para el texto encima.
- **Tipografía**: serif con carácter para títulos (propuesta: **Literata** — legible en mobile para un rango etario amplio, con itálica real para citas/contexto) + **Inter** para cuerpo/UI. Eyebrows en versalitas espaciadas (`LECCIÓN DEL DÍA`), guiño al wordmark del logo.
- **Formas**: cards con radio medio (14–16px), botones pill, círculos para naciones, sellos levemente rotados. Sombras suaves y cálidas (marrón, no gris).
- **Nav inferior mobile**: pill flotante azul petróleo, 3 ítems con ícono + label, activo en naranja/blanco.
- **Foto**: protagonista en hero de lección y país. Degradé oscuro abajo para legibilidad del texto.
- **Tono de voz**: voseo rioplatense como el brochure ("conocés", "observá"), cálido, curioso, nunca aleccionador. Se explica *por qué*, no se reta.
- **Logo**: se extrae del PDF (viene como imagen con transparencia) → `assets/brand/`.

---

## 8. Mobile first (prioridades)

- Diseño a 375–430px; todo el contenido de una lección visible con 1–2 scrolls.
- Touch targets ≥ 44px, texto de cuerpo ≥ 16px.
- Carruseles horizontales con scroll-snap (naciones, guías) y padding que "asome" la siguiente card.
- `viewport-fit=cover` + safe areas para el nav flotante.
- Imágenes con `loading="lazy"` y tamaños razonables (la mayoría de los usuarios entra por datos móviles).

---

## 9. Contenido inicial (para el WXR)

Propuesta de semilla, fiel a la presentación:

- **8 países**: Japón, Marruecos, India, Corea del Sur, Emiratos Árabes, China, México, Alemania (los del mockup + los de los ejemplos).
- **~24–32 lecciones** (3–4 por país) — incluye todos los ejemplos de la presentación.
- **~12 alertas culturales** y **8 guías "En caso de duda"**.

---

## 10. Preguntas abiertas (necesito respuesta antes de arrancar)

1. **Mercado / país del ANI**: el brochure usa voseo → ¿Argentina (`+54`)? ¿o Chile como Mis Gastos? ¿o varios países con selector como Retofit?
2. **WordPress**: ¿ya existe el sitio en `contenidos.vip`? ¿con qué slug (`historiasdelmundo`?) y cuál es el **club ID** para el ANI?
3. **Imágenes**: ¿tienen fotos para lecciones/países, o las genero/busco yo? (Higgsfield está conectado pero pide autorización.)
4. **Temas del mockup**: "Mitología Nórdica", "Arte Renacentista", "Arquitectura" suenan a turismo/historia, y la presentación dice *"no es turismo ni geografía"*. ¿Los reemplazo por temas de etiqueta cultural (Saludos, En la mesa, Gestos, etc.) o mantenemos los del mockup?
5. **Calco vs guía**: ¿el mockup se sigue fiel (layout y estilo) o como guía de estilo con libertad, como terminó pasando con Mis Gastos?
