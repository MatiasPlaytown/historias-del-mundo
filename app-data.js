// ============================================================
// HISTORIAS DEL MUNDO — app-data.js
// Catálogo LOCAL atado a la UI (íconos, colores, reglas del pasaporte).
// Nada de contenido editorial: eso vive en WordPress (o, mientras no exista,
// en content-seed.js).
// ============================================================

const APP_DATA = {
  // Temas de Explorar. El `id` es el `topicId` de cada lección.
  topics: [
    { id: 'saludos',    name: 'Saludos',              icon: 'wave',   tone: 'sky' },
    { id: 'mesa',       name: 'En la mesa',           icon: 'bowl',   tone: 'sand' },
    { id: 'gestos',     name: 'Gestos y trato',       icon: 'people',   tone: 'rose' },
    { id: 'hogar',      name: 'Visitas y hogar',      icon: 'door',   tone: 'sage' },
    { id: 'creencias',  name: 'Creencias y rituales', icon: 'lamp',   tone: 'lilac' },
    { id: 'regalos',    name: 'Regalos',              icon: 'gift',   tone: 'rose' },
    { id: 'vestimenta', name: 'Vestimenta',           icon: 'shirt',  tone: 'sand' },
    { id: 'fotografia', name: 'Fotografía',           icon: 'camera', tone: 'sky' },
  ],

  // Pasaporte: cuántas lecciones "Entendidas" de un país hacen falta para el
  // sello. Si un país tiene menos lecciones que esto, alcanza con todas.
  stampThreshold: 3,

  // Tintas de los sellos, se asignan por el `order` del país (ciclan).
  stampInks: ['#33535f', '#a8561f', '#86591a', '#7a3b4e', '#3f6b4f', '#4a4f8c'],

  // Títulos del perfil según el nivel.
  levelTitles: [
    { from: 1,  title: 'Viajero curioso' },
    { from: 3,  title: 'Explorador de culturas' },
    { from: 7,  title: 'Embajador cultural' },
    { from: 11, title: 'Ciudadano del mundo' },
  ],
};
