// --- Получаем кнопки фильтров и все карточки существ
const filterButtons = document.querySelectorAll(".filter-bar button");
const creatureCards = document.querySelectorAll(".creature-card");

// --- Назначаем обработчик клика для каждой кнопки
filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    // Убираем выделение со всех кнопок
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.textContent.trim(); // читаем текст кнопки

    // Проходим по всем карточкам
    creatureCards.forEach(card => {
      const type = card.dataset.type; // читаем data-type="..."
      
      // Показываем только тех, кто подходит под фильтр
      if (filter === "Все" || type === filter) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});
