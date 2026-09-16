// Datos centrales del sitio — tocar acá cambia todo el sitio de una.

export const SITE_NAME = "RAINSTOP Impermeabilizaciones";
export const SITE_URL = "https://rainstopuy.com"; // TODO: actualizar cuando se compre el dominio (ver brief SEO)
export const SITE_DESCRIPTION =
  "Impermeabilizamos tu techo con membrana asfáltica: geotextil, mineralizada o aluminizada. Materiales, mano de obra y garantía de 10 años. Presupuesto sin costo por WhatsApp.";

// TODO confirmar con el cliente: zona de cobertura real
export const COVERAGE_AREAS = [
  "Montevideo",
  "Canelones",
  "Ciudad de la Costa",
  "Las Piedras",
  "Pando",
];

export const INSTAGRAM_URL = "https://www.instagram.com/rainstop_membranas/";
export const INSTAGRAM_HANDLE = "@rainstop_membranas";

export const PHONE_DISPLAY = "099 866 295";
const PHONE_INTL = "59899866295";
export const TEL_LINK = `tel:+${PHONE_INTL}`;
const WHATSAPP_BASE = `https://wa.me/${PHONE_INTL}`;

/** Arma un link de wa.me con el mensaje precargado ya codificado. */
export function waLink(message: string): string {
  return `${WHATSAPP_BASE}?text=${encodeURIComponent(message)}`;
}

// Mensajes precargados por ubicación en la página (ver brief de CRO).
export const WA_MESSAGES = {
  floating:
    "Hola RAINSTOP 👋 Quiero pedir un presupuesto sin costo para impermeabilizar mi techo.",
  heroPrimary:
    "Hola! Vi la web de RAINSTOP y quiero pedir un presupuesto sin costo para mi techo.",
  serviceGeotextil:
    "Hola! Me interesa la impermeabilización con Membrana Geotextil. ¿Me pasás precio y disponibilidad?",
  serviceMineralizada:
    "Hola! Me interesa la impermeabilización con Membrana Mineralizada. ¿Me pasás precio y disponibilidad?",
  serviceAluminizada:
    "Hola! Me interesa la impermeabilización con Membrana Aluminizada. ¿Me pasás precio y disponibilidad?",
  pricing:
    "Hola! Quiero una cotización personalizada para impermeabilizar mi techo (los m² aproximados son ___).",
  instagram: "Hola! Vi el Instagram de RAINSTOP y quiero un presupuesto para mi techo.",
  faq: "Hola! Tengo una consulta sobre impermeabilización de techos.",
  finalCta:
    "Hola! Quiero agendar una visita sin costo para evaluar mi techo antes de que lleguen las lluvias.",
};

export type ServiceKey = "geotextil" | "mineralizada" | "aluminizada";

export const SERVICES: {
  key: ServiceKey;
  name: string;
  tagline: string;
  description: string;
  bullets: string[];
  waMessage: string;
}[] = [
  {
    key: "geotextil",
    name: "Membrana Geotextil",
    tagline: "La base clásica y resistente",
    description:
      "Membrana asfáltica reforzada con geotextil, ideal para techos con tránsito ocasional y superficies irregulares.",
    bullets: ["Alta resistencia mecánica", "Buena adherencia sobre distintas superficies", "Terminación en aluminio"],
    waMessage: WA_MESSAGES.serviceGeotextil,
  },
  {
    key: "mineralizada",
    name: "Membrana Mineralizada",
    tagline: "Terminación lista, sin pintura",
    description:
      "Viene con terminación mineral de fábrica: no necesita pintura posterior y queda protegida frente al sol desde el primer día.",
    bullets: ["Terminación de fábrica", "Buena resistencia UV", "Menos mantenimiento a futuro"],
    waMessage: WA_MESSAGES.serviceMineralizada,
  },
  {
    key: "aluminizada",
    name: "Membrana Aluminizada",
    tagline: "Máxima protección y durabilidad",
    description:
      "Terminación profesional en aluminio que refleja el calor y suma años de vida útil extra a la impermeabilización.",
    bullets: ["Refleja el calor solar", "Terminación estética prolija", "La opción con mayor durabilidad"],
    waMessage: WA_MESSAGES.serviceAluminizada,
  },
];

// Pares reales antes/después (mismo techo, dos etapas del trabajo).
export const WORK_SAMPLES: { title: string; before: string; after: string }[] = [
  {
    title: "Techo de fibrocemento — Membrana Aluminizada",
    before: "/images/trabajos/trabajo1-antes.webp",
    after: "/images/trabajos/trabajo1-despues.webp",
  },
  {
    title: "Techo de fibrocemento — Membrana Aluminizada",
    before: "/images/trabajos/trabajo2-antes.webp",
    after: "/images/trabajos/trabajo2-despues.webp",
  },
];

// Fotos reales para la sección de Instagram / galería de trabajos.
export const GALLERY_IMAGES: { src: string; alt: string }[] = [
  { src: "/images/gallery/gallery-hero.webp", alt: "Técnico de RAINSTOP trabajando sobre un techo recién impermeabilizado" },
  { src: "/images/gallery/gallery-2.webp", alt: "Técnico de RAINSTOP aplicando terminación en el borde de un techo de chapa" },
  { src: "/images/gallery/gallery-3.webp", alt: "Terraza impermeabilizada con membrana asfáltica de terminación azul" },
  { src: "/images/gallery/gallery-4.webp", alt: "Techo con membrana geotextil recién colocada, terminación prolija" },
  { src: "/images/gallery/gallery-5.webp", alt: "Techo industrial de gran escala impermeabilizado con membrana aluminizada" },
];

export const FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: "¿Cuánto cuesta impermeabilizar un techo por m²?",
    a: "El precio depende del estado del techo y del tipo de membrana, pero como referencia trabajamos desde $550 por m², incluyendo materiales, preparación de la superficie y terminación en aluminio. Te pasamos una cotización exacta sin costo después de ver el techo o algunas fotos.",
  },
  {
    q: "¿Cuánto dura la garantía?",
    a: "Todos nuestros trabajos de impermeabilización con membrana asfáltica tienen garantía de 10 años.",
  },
  {
    q: "¿Cuánto tarda el trabajo?",
    a: "La mayoría de los techos residenciales se resuelven en 1 a 3 días, dependiendo de la superficie y las condiciones climáticas.",
  },
  {
    q: "¿Qué incluye el presupuesto?",
    a: "Materiales, preparación y tratamiento de la superficie, colocación de la membrana asfáltica y terminación profesional — sin costos ocultos.",
  },
  {
    q: "¿Trabajan en toda la zona metropolitana?",
    a: "Sí, cubrimos Montevideo y localidades cercanas. Escribinos tu zona por WhatsApp y te confirmamos al instante.",
  },
];
