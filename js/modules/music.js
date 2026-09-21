/* =========================================================
   Módulo de música de fondo
   - Se activa/desactiva desde EVENT_CONFIG.modules.music.
   - Si el navegador bloquea autoplay, inicia con la primera interacción.
   ========================================================= */
const MusicModule = (() => {
  let audio = null;
  let control = null;
  let started = false;

  function updateControl() {
    if (!control || !audio) return;
    const playing = !audio.paused;
    control.classList.toggle("is-playing", playing);
    control.setAttribute("aria-label", playing ? "Pausar música" : "Reproducir música");
  }

  async function play() {
    if (!audio) return;
    try {
      await audio.play();
      started = true;
      updateControl();
    } catch (_) {
      // Autoplay con sonido puede ser bloqueado por iOS/Android.
      updateControl();
    }
  }

  function pause() {
    if (!audio) return;
    audio.pause();
    updateControl();
  }

  function toggle() {
    if (!audio) return;
    audio.paused ? play() : pause();
  }

  function init(config) {
    const music = config.music || {};
    if (!config.modules.music || !music.enabled || !music.src) return;

    audio = new Audio(music.src);
    audio.loop = music.loop !== false;
    audio.volume = Math.max(0, Math.min(1, Number(music.volume ?? 0.35)));
    audio.preload = "auto";

    control = document.getElementById("music-control");
    if (control && music.showControl !== false) {
      control.hidden = false;
      control.addEventListener("click", toggle);
    }

    audio.addEventListener("play", updateControl);
    audio.addEventListener("pause", updateControl);

    // Respaldo para navegadores que exigen una interacción del usuario.
    const firstInteraction = () => {
      if (!started && audio.paused) play();
      document.removeEventListener("pointerdown", firstInteraction);
      document.removeEventListener("keydown", firstInteraction);
    };
    document.addEventListener("pointerdown", firstInteraction, { once: true });
    document.addEventListener("keydown", firstInteraction, { once: true });

    if (music.autoplay) play();
    updateControl();
  }

  return { init, play, pause, toggle };
})();
