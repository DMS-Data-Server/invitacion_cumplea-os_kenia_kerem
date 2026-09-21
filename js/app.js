/* Utilidad común para escribir texto sin insertar HTML inseguro. */
function setText(id, value) {
  const element = document.getElementById(id);
  if (element) element.textContent = value ?? "";
}

function toggleModule(id, enabled) {
  const element = document.getElementById(id);
  if (element) element.hidden = !enabled;
}

function applyModuleConfig(config) {
  toggleModule("module-hero", config.modules.hero);
  toggleModule("module-event", config.modules.eventDetails);
  toggleModule("module-recommendations", config.modules.recommendations && config.recommendations.enabled);
  toggleModule("btn-whatsapp", config.modules.whatsapp && config.whatsapp.enabled);
  toggleModule("btn-location", config.modules.location && config.location.enabled);
  toggleModule("module-gifts", config.modules.gifts && config.gifts.enabled);
  toggleModule("module-closing", config.modules.closing);
}


/* =========================================================
   HERO PRINCIPAL
   Carga los textos desde config.js y formatea la fecha.
   ========================================================= */
function formatHeroDate(dateString) {
  if (!dateString) return "FECHA PENDIENTE";

  // Se agrega una hora local para evitar cambios de día por zona horaria.
  const date = new Date(`${dateString}T12:00:00`);
  if (Number.isNaN(date.getTime())) return "FECHA PENDIENTE";

  const months = [
    "ENERO", "FEBRERO", "MARZO", "ABRIL",
    "MAYO", "JUNIO", "JULIO", "AGOSTO",
    "SEPTIEMBRE", "OCTUBRE", "NOVIEMBRE", "DICIEMBRE"
  ];

  return `${String(date.getDate()).padStart(2, "0")} • ${months[date.getMonth()]} • ${date.getFullYear()}`;
}

function initHero(config) {
  setText("hero-kicker", config.texts.kicker);
  setText("event-names", config.celebrants.names);
  setText("event-age", config.celebrants.age);
  setText("hero-date", formatHeroDate(config.event.date));
  setText("hero-phrase", config.texts.heroPhrase);
}

function initRevealAnimations() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
}

document.addEventListener("DOMContentLoaded", () => {
  applyModuleConfig(EVENT_CONFIG);
  initHero(EVENT_CONFIG);
  initEventDetails(EVENT_CONFIG);
  initRecommendations(EVENT_CONFIG);
  initWhatsApp(EVENT_CONFIG);
  initLocation(EVENT_CONFIG);
  initGifts(EVENT_CONFIG);
  MusicModule.init(EVENT_CONFIG);
  initRevealAnimations();
});
