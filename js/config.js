/* =========================================================
   StudioICrea - Configuración central del evento
   Para reutilizar esta plantilla, modifica principalmente este archivo.
   ========================================================= */
const EVENT_CONFIG = {
  project: {
    clientId: "CL_0002",
    eventId: "EV_CL_0002",
    version: "1.3.0"
  },
  celebrants: {
    names: "Kenia & Kerem",
    age: 11
  },
  event: {
    date: "2026-10-03",
    time: "",              // Pendiente
    venue: "Quinta Sinaí",
    address: "Monte Bajo #100, Residencial Monteverde, CP.67257, Cd. Benito Juárez, N.L.",
    mapsUrl: "https://maps.app.goo.gl/mAry8K1RyrfoAKC8A"
  },
  whatsapp: {
    enabled: true,
    phone: "528112114861",
    message: "Hola, confirmo mi asistencia al cumpleaños de Kenia y Kerem 🎉"
  },
  location: {
    enabled: true
  },
  gifts: {
    enabled: true,
    title: "LISTA DE REGALOS",
    text: "Lo más importante es tu compañía, pero si deseas hacernos un regalo, será muy especial para nosotras."
  },
  recommendations: {
    enabled: true,
    text: "Te recomendamos llevar un cambio de ropa para la alberca 💦"
  },
  music: {
    enabled: true,
    src: "assets/audio/background.mp3",
    volume: 0.35,
    loop: true,
    autoplay: true,
    showControl: true
  },
  texts: {
    kicker: "UN AÑO MÁS DE AVENTURAS",
    heroPhrase: "UN DÍA LLENO DE AVENTURAS NOS ESPERA",
    closing: "¡Nos vemos en la misión!"
  },
  modules: {
    hero: true,
    eventDetails: true,
    recommendations: true,
    whatsapp: true,
    location: true,
    gifts: true,
    music: true,
    closing: true
  }
};
