/*
1. Написати функцію, яка перетворює строку на масив слів,
    сортує його за алфавітним порядком і повертає (у масиві не повинно бути пробілів як елементів)
 */

const str = "Це довільний текст для створення масиву слів ";
function stringToArray(str) {
    let arr = str.trim().toLowerCase().split(' ')
    return arr.sort()
}

console.log('TASK 1')
console.log(stringToArray(str));    // виводить [ 'для', 'довільний', 'масиву', 'слів', 'створення', 'текст', 'це' ]
console.log()

/*
2. Написати функцію, яка видаляє з масива елементи, що дублюються, та повертає масив оригінальних елементів,
відсортованих за зростанням
 */
const initialArray = [1, 4, 6, 6, 7, 5, 34, 5, 1000, 66, 1];
function removeDuplicatesAndSort(arr) {
    const arrNew = [];
    arr.sort((a, b) => a - b)  // для зручності подальшого прибирання дублікатів, спочатку сортуємо
    for (let i=0; i < arr.length; i++) {
        if (arr[i] !== arr[i+1]) arrNew.push(arr[i])  // формуємо новий масив, уникаючи повторів елементів
    }
    return arrNew
}

console.log('TASK 2')
console.log(removeDuplicatesAndSort(initialArray)); // виводить [ 1, 4, 5, 6, 7, 34, 66, 1000 ]
console.log()

/*
3. Написати функцію, яка поверне масив парних чисел
 */
const initialArray2 = [2, 3, 6, 7, 9, 12];
function arrayOfEvens(arr) {
    const arrNew = [];
    for (let i=0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) arrNew.push(arr[i])  // формуємо новий масив, обираючи тільки парні значення
    }
    return arrNew
}

console.log('TASK 3')
console.log(arrayOfEvens(initialArray2)); // виводить [ 2, 6, 12 ]
console.log()

/*
4. Написати функцію, яка сформує масив з послідовності чисел, формуючи його з аргумента, який збільшує
кожний наступний елемент послідовності на самого себе. Максимальне значення масиву не повинно перевищувати число 30.
 */
function createArray(element) {
    const arr = []
    let nextElement = element
    while (nextElement <= 30) {
        arr.push(nextElement)
        nextElement += element
    }
    return arr
}

console.log('TASK 4')
console.log(createArray(5)); // виведе [ 5, 10, 15, 20, 25, 30 ]
console.log(createArray(3)); // виведе [ 3,  6,  9, 12, 15, 18, 21, 24, 27, 30 ]

