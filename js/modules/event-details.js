function initEventDetails(config) {
  const date = new Date(`${config.event.date}T12:00:00`);
  const dateText = new Intl.DateTimeFormat("es-MX", {
    weekday: "long", day: "numeric", month: "long", year: "numeric"
  }).format(date).toUpperCase();

  setText("event-names", config.celebrants.names);
  setText("event-age", config.celebrants.age);
  setText("hero-kicker", config.texts.kicker);
  setText("hero-phrase", config.texts.heroPhrase);
  setText("event-date", dateText);
  setText("event-time", config.event.time || "PENDIENTE");
  setText("event-place", config.event.venue || "PENDIENTE");
  setText("closing-text", config.texts.closing);
}
