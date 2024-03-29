// 1. Задача: Конвертер валют
// Завдання: Напишіть функцію convertCurrency, яка приймає суму в доларах США (USD) і код валюти, в яку
// потрібно конвертувати ('EUR', 'UAH', 'GBP'). Функція повинна повертати суму у вказаній валюті,
// використовуючи фіксовані курси валют (наприклад, 1 USD = 0.9 EUR, 1 USD = 35 UAH, 1 USD = 0.8 GBP).
// Якщо код валюти не підтримується, функція повинна повертати рядок з помилкою.

function convertCurrency(sumUSD, currency) {
    const UsdToEur = 0.9;
    const UsdToUah = 35;
    const UsdToGbp = 0.8;
    switch(currency) {
        case 'EUR':
            return sumUSD * UsdToEur;
        case 'UAH':
            return sumUSD * UsdToUah;
        case 'GBP':
            return sumUSD * UsdToGbp;
        default:
            return 'Invalid currency code!';
    }
}
console.log('TASK 1')
console.log(convertCurrency(100, 'UAH'))
console.log()

///////////////////////////////////////////////////////////////////////////////////////////////////
// 2. Задача: Визначення дня тижня
// Завдання: Створіть функцію getDayOfWeek, яка приймає число від 1 до 7 і повертає назву дня тижня,
// де 1 - це понеділок, а 7 - неділя. Якщо введене число не відповідає жодному дню тижня, функція має
// повертати рядок з помилкою.

function getDayOfWeek(numberOfDay) {
    switch(numberOfDay) {
        case 1:
            return 'Monday';
        case 2:
            return 'Tuesday';
        case 3:
            return 'Wednesday';
        case 4:
            return 'Thursday';
        case 5:
            return 'Friday';
        case 6:
            return 'Saturday';
        case 7:
            return 'Sunday';
        default:
            return 'Invalid number!';
    }
}
console.log('TASK 2')
console.log(getDayOfWeek(6))
console.log()

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 3.Задача: Знайти число Фібоначчі
// Завдання: Напишіть функцію fibonacci, що приймає число n як аргумент і повертає n-те число з послідовності
// Фібоначчі. Послідовність починається з 0 (нульовий елемент) і 1 (перший елемент), а кожне наступне число є
// сумою двох попередніх чисел.

function fibonacci(number) {
    if (typeof number !== 'number' || number < 0) return 'Wrong data!';
    else if (number === 0) return 0;
    else if (number === 1) return 1;
    else return fibonacci(number - 2) + fibonacci(number - 1)
}
console.log('TASK 3')
console.log(fibonacci(8))
console.log()

// *** Додаткова задача. Вгадай число
// Напишіть функцію guessNumber, яка приймає рядок від користувача через prompt() і порівнює його з випадково
// згенерованим числом від 1 до 10 (включно). Функція має виводити 'Вгадали!', якщо користувач вгадав число,
// або 'Спробуйте ще раз!', якщо ні. Враховуйте перетворення типів та умовні конструкції.
//
// Також треба додати наступні функціональні можливості:
// - Обмежена кількість спроб: Користувач має обмежену кількість спроб, наприклад, 3 спроби, щоб вгадати число.
// Використовувати рекурсію, а не цикли!!!
// - Підказки: Якщо користувач вводить число, яке не співпадає з загаданим, але залишилися спроби, функція надає
// підказку: "занадто велике" або "занадто мале".
// Валідація вводу: Переконайтеся, що користувач ввів дійсне число в потрібному діапазоні (від 1 до 10).
// Якщо введене значення недійсне, прохання ввести число знову не зараховуючи це як спробу.

console.log('TASK EXTRA')
const prompt = require("prompt-sync")(); // ініціалізація використання функції prompt()
                                         // попередньо встановив пакет: npm install prompt-sync
function guessNumber(count, randomNumber) {
    function getRandom(min, max) { // функція генерації числа від 1 до 10
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
    function validNumber(){  // функція валідації вводу
        let inputNumber = +prompt(`Спроба №${qty - count + 1}. Введіть число від 1 до 10 включно: `)
        if ((isNaN(inputNumber)) || (inputNumber < 1) || (inputNumber > 10)) inputNumber = validNumber()
        return inputNumber
    }
    if (count === qty) randomNumber = getRandom(1 ,10)  // генеруємо (загадуємо) число тільки при першій спробі
    if (count > 0) {  // якщо спроби є - виконуємо
        let userNumber = validNumber()
        if (userNumber === randomNumber) console.log('Вгадали!')
        else {
            if ((userNumber > randomNumber) && (count > 1))  // ...і якщо спроба не остання - виводимо підказку
                console.log(`Занадто велике. Спробуйте ще раз. (підказка - ${randomNumber})`)
            else if ((userNumber < randomNumber) && (count > 1))  // ...і якщо спроба не остання - виводимо підказку
                console.log(`Занадто мале. Спробуйте ще раз. (підказка - ${randomNumber})`)
            guessNumber(count - 1, randomNumber)  // рекурсія з передачею вже загаданого числа
        }
    }
    else console.log(`Не вгадали!`)
}
const qty = 3 // кількість спроб для відгадування
guessNumber(qty)

