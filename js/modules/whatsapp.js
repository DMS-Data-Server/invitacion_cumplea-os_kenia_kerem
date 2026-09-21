function initWhatsApp(config) {
  const button = document.getElementById("btn-whatsapp");
  if (!button) return;
  const phone = String(config.whatsapp.phone || "").replace(/\D/g, "");
  button.href = `https://wa.me/${phone}?text=${encodeURIComponent(config.whatsapp.message)}`;
}
