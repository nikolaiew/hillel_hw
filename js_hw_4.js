// Задача 1: Класифікація оцінок (вирішується за допомогою if-else)
// Завдання: У вас є оцінка від 1 до 100. Напишіть блок коду, який класифікує оцінку: "відмінно"
// для оцінок від 90 до 100, "добре" для оцінок від 70 до 89, "задовільно" для оцінок від 50 до 69,
// та "незадовільно" для оцінок менше 50.

let mark = 75
if (mark >= 1 && mark < 50) console.log(`Your mark is ${mark}. It's UNSATISFACTORILY!`);
else if (mark >= 50 && mark <= 69) console.log(`Your mark is ${mark}. It's SATISFACTORILY!`);
else if (mark >= 70 && mark <= 89) console.log(`Your mark is ${mark}. It's FINE!`);
else if (mark >= 90 && mark <= 100) console.log(`Your mark is ${mark}. It's PERFECTLY!`);


// Задача 2: Вибір дії (вирішується за допомогою switch-case)
// Завдання: У вас є рядок з дією ("додати", "відняти", "помножити", "поділити") і два числа.
// Напишіть блок коду, який виконує обрану дію з цими числами та виводить результат.

let action = "mul", x= 10, y= 5
switch (action) {
    case "add":
        console.log(`${x} + ${y} = ${x + y}`);
        break;
    case "sub":
        console.log(`${x} - ${y} = ${x - y}`);
        break;
    case "mul":
        console.log(`${x} * ${y} = ${x * y}`);
        break;
    case "div":
        console.log(`${x} / ${y} = ${x / y}`);
        break;
}


// Задача 3: Перевірка на парність (вирішується за допомогою тернарного оператора)
// Завдання: У вас є число. Використовуйте тернарний оператор для перевірки числа на парність.
// Виведіть "парне", якщо число парне, і "непарне" в іншому випадку.

let number = 33;
let result = number % 2 === 0 ? "EVEN" : "ODD";
console.log(`${number} is ${result} number.`);
