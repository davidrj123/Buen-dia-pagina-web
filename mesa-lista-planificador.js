// Filtros del menú semanal de Mesa Lista
document.addEventListener("DOMContentLoaded", () => {
  const filters = document.querySelectorAll("[data-menu-filter]");
  const dishes = document.querySelectorAll(".ml-dish");
  filters.forEach(filter => filter.addEventListener("click", () => {
    const category = filter.dataset.menuFilter;
    filters.forEach(item => item.classList.toggle("is-active", item === filter));
    dishes.forEach(dish => dish.classList.toggle("is-hidden",
      category !== "todos" && dish.dataset.category !== category));
  }));
  document.querySelectorAll(".ml-select-dish").forEach(button => {
    button.addEventListener("click", () => {
      button.textContent = "Seleccionado ✓";
      button.setAttribute("aria-pressed", "true");
    });
  });
});

// Planificador de pedidos: estima el total y permite copiar el resumen.
document.addEventListener("DOMContentLoaded", () => {
  const dish = document.querySelector("#ml-selected-dish");
  const slider = document.querySelector("#ml-portions");
  const quantity = document.querySelector("#ml-quantity");
  const frequency = document.querySelector("#ml-frequency");
  const total = document.querySelector("#ml-total");
  const unit = document.querySelector("#ml-unit");
  const portionsSummary = document.querySelector("#ml-portions-summary");
  const daysSummary = document.querySelector("#ml-days-summary");
  const description = document.querySelector("#ml-estimate-description");
  const feedback = document.querySelector("#ml-copy-feedback");
  if (!dish || !slider || !frequency) return;
  const money = value => `Bs ${value.toFixed(2).replace(/\\.00$/, "")}`;
  function update() {
    const price = Number(dish.value), portions = Number(slider.value), days = Number(frequency.value);
    quantity.textContent = portions;
    total.textContent = money(price * portions * days);
    unit.textContent = money(price);
    portionsSummary.textContent = portions;
    daysSummary.textContent = days;
    description.textContent = `${portions} porciones durante ${days} ${days === 1 ? "día" : "días"}.`;
  }
  document.querySelector("#ml-minus")?.addEventListener("click", () => { slider.value = Math.max(1, Number(slider.value)-1); update(); });
  document.querySelector("#ml-plus")?.addEventListener("click", () => { slider.value = Math.min(20, Number(slider.value)+1); update(); });
  [dish, slider, frequency].forEach(el => { el.addEventListener("input", update); el.addEventListener("change", update); });
  document.querySelector("#ml-copy-order")?.addEventListener("click", async () => {
    const summary = ["Solicitud de pedido — Mesa Lista", `Plato: ${dish.options[dish.selectedIndex].text}`, `Porciones por día: ${slider.value}`, `Días: ${frequency.value}`, `Total estimado: ${total.textContent}`, "Precios ilustrativos, sujetos a confirmación."].join("\\n");
    try { await navigator.clipboard.writeText(summary); feedback.textContent = "Resumen copiado. Ya puedes compartirlo."; }
    catch { feedback.textContent = "No se pudo copiar automáticamente en este navegador."; }
  });
  update();
});
