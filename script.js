const signs = [];

document.querySelectorAll('.sign').forEach((element) => {
    signs.push(element);
});

const vocabulary = [
    "Апельсин",
    "Ананас",
    "Яблоко",
    "Груша",
    "Персик",
    "Смородина",
    "Клубника",
    "Черника",
    "Банан",
    "Маракуя",
    "Манго",
    "Фейхоа"
];

signs.forEach((element, index) => {
    element.innerHTML = vocabulary[index];
});

const selectWord = () => {
    selecedWord = mainWord.text;
    alert(selecedWord);
}

document.addEventListener('keyup', () => {
    selectWord();
});