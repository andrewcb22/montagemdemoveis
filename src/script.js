function trackWhatsAppClick() {
  const sendTo = window.GOOGLE_ADS_WHATSAPP_SEND_TO;

  if (typeof window.gtag === "function" && sendTo) {
    window.gtag("event", "conversion", {
      send_to: sendTo,
    });
  }
}

document.querySelectorAll("[data-whatsapp]").forEach((link) => {
  link.addEventListener("click", trackWhatsAppClick);
});
