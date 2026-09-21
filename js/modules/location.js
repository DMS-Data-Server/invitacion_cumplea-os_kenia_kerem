function initLocation(config) {
  const button = document.getElementById("btn-location");
  if (!button) return;

  if (config.event.mapsUrl) {
    button.href = config.event.mapsUrl;
    button.classList.remove("is-disabled");
    button.removeAttribute("aria-disabled");
  } else {
    // Mientras no exista URL, se conserva visualmente pero no navega.
    button.href = "#";
    button.classList.add("is-disabled");
    button.setAttribute("aria-disabled", "true");
    button.addEventListener("click", event => event.preventDefault());
  }
}
