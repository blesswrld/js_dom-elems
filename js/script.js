// Получение ссылок на различные DOM-элементы
let chooseBtn = document.getElementById("choose"),
    receiveBtn = document.getElementById("receive"),
    heading = document.getElementsByTagName("h2")[0],
    nameInput = document.getElementsByClassName("contactform_name")[0],
    phoneInput = document.querySelector(".contactform_phone"),
    mailInput = document.querySelectorAll(".contactform_mail")[0],
    modal = document.querySelector(".modal"),
    closeBtn = document.querySelector(".close"),
    text = document.getElementsByName("message")[0];

// Закомментированный код: примеры альтернативных способов обработки событий (для справки)

// Обработка событий наведения/ухода мыши на кнопку "Выбрать"
chooseBtn.addEventListener("mouseenter", function () {
    heading.textContent = "Действительно всё!"; // Меняет текст заголовка при наведении
});

chooseBtn.addEventListener("mouseleave", function () {
    heading.textContent = "Все включено!"; // Возвращает исходный текст при уходе мыши
});

// Обработка клика по кнопке "Получить" для открытия модального окна
receiveBtn.addEventListener("click", function () {
    modal.style.display = "block";
});

// Обработка клика по кнопке "Закрыть" для скрытия модального окна
closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
});

// Динамическое обновление текста сообщения в зависимости от введенного имени
nameInput.addEventListener("input", function () {
    text.value = `Меня зовут ${nameInput.value}. И я хочу спросить: `;
});
