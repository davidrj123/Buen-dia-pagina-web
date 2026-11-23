
// Interacciones compartidas por todas las páginas de Buen Día
document.addEventListener("DOMContentLoaded", () => {

  // =========================================
  // AÑO AUTOMÁTICO EN EL PIE DE PÁGINA
  // =========================================

  const year = document.querySelector("#year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }


  // =========================================
  // MENÚ ADAPTABLE PARA TELÉFONOS
  // =========================================

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


  // =========================================
  // CATÁLOGO INTERACTIVO
  // =========================================

  const filterButtons = document.querySelectorAll(".filter-btn");
  const catalogCards = document.querySelectorAll(".catalog-card");
  const catalogCounter = document.querySelector("#catalog-counter");

  filterButtons.forEach(button => {

    button.addEventListener("click", () => {

      // Obtener la categoría seleccionada
      const selectedCategory = button.dataset.filter;

      // Actualizar el botón activo
      filterButtons.forEach(filterButton => {
        filterButton.classList.remove("active");
      });

      button.classList.add("active");

      // Filtrar las tarjetas
      let visibleCount = 0;

      catalogCards.forEach(card => {

        const cardCategory = card.dataset.category;

        const shouldShow =
          selectedCategory === "todos" ||
          cardCategory === selectedCategory;

        card.classList.toggle("hidden", !shouldShow);

        if (shouldShow) {
          visibleCount++;
        }

      });

      // Actualizar el contador
      if (catalogCounter) {
        catalogCounter.textContent =
          `Mostrando ${visibleCount} servicios`;
      }

    });

  });


  // =========================================
  // FORMULARIO DE SOLICITUD
  // =========================================

  // Prepara una consulta por correo.
  // Es una demostración: no envía datos a un servidor.

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

      if (feedback) {
        feedback.textContent =
          "Se abrirá tu aplicación de correo con la consulta preparada.";
      }

      window.location.href =
        `mailto:hola@buendia.example?subject=${subject}&body=${body}`;

    });

  }


  // =========================================
  // DESPLAZAMIENTO SUAVE PARA ENLACES INTERNOS
  // =========================================

  document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", event => {

      const selector = link.getAttribute("href");

      // Evitar selectores vacíos o solamente "#"
      if (!selector || selector === "#") {
        return;
      }

      const target = document.querySelector(selector);

      if (target) {
        event.preventDefault();
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }

    });

  });

});
