// Interacciones compartidas por todas las páginas de Buen Día
document.addEventListener("DOMContentLoaded", () => {
  // Año automático en el pie de página
  const year = document.querySelector("#year");
  if (year) year.textContent = new Date().getFullYear();

  // Menú adaptable para teléfonos
  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".main-nav");
  if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
      const isOpen = navigation.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
    });
    navigation.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navigation.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Preparar una consulta por correo (demostración, no envía datos a un servidor)
  const form = document.querySelector("#service-form");
  if (form) {
    form.addEventListener("submit", event => {
      event.preventDefault();
      const data = new FormData(form);
      const service = form.dataset.service;
      const name = data.get("name");
      const need = data.get("need");
      const zone = data.get("zone") || "No especificada";
      const subject = encodeURIComponent(`Consulta: ${service}`);
      const body = encodeURIComponent(
        `Hola, mi nombre es ${name}.\nServicio: ${service}\nNecesidad: ${need}\nZona: ${zone}`
      );
      const feedback = form.querySelector(".form-feedback");
      feedback.textContent = "Se abrirá tu aplicación de correo con la consulta preparada.";
      window.location.href = `mailto:hola@buendia.example?subject=${subject}&body=${body}`;
    });
  }

  // Desplazamiento suave para enlaces internos
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", event => {
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
});
