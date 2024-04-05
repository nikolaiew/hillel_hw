// ДЗ.1 BigBoss
// Уявімо собі, що ми є власниками великої компанії, яка розробляє платформу для продажу квитків. Окрім того, наша
// компанія продає рішення для організації продажу цих квитків. Таким чином, у нас будуть клієнти, які придбають наше
// програмне забезпечення (ПО). По суті, ці клієнти будуть подібні до "дочірніх компаній" (subCompany), які вже
// використовують наше ПО для продажу квитків. Крім цього, ці "дочірні компанії" також можуть стати постачальниками
// цього рішення, і в цьому випадку вони вже будуть "внучатами компанії" (subSubCompany), і так далі і далі ...
//
// Ось приклад об'єкту, зверніть увагу на вкладеність, та маєте на увазі що об'єкт може ставати ще глибшим.
// Вам необхідно написати функцію findValueByKey(companyName), яка буде приймати значення у вигляді companyName
// та надавати інформацію про цю subCompany.
// Умови ДЗ.1 - обмежень не має. Підказк, можна рекурсією, можна через масиви

const company = {
    name: 'Велика Компанія',
    type:'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
        {
            name: 'Клієнт 1',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
                {
                    name: 'Клієнт 1.1',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                },
                {
                    name: 'Клієнт 1.2',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                    partners: [
                        {
                            name: 'Клієнт 1.2.3',
                            type: 'subSubCompany',
                            uses: 'Рішення для продажу квитків',
                            sells: 'Рішення для продажу квитків',
                        }
                    ]
                }
            ]
        },
        {
            name: 'Клієнт 2',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків'
        }
    ]
};

function findValueByKey(companyName) {
    // необов'язкова функція кастомного виводу інформації з додаванням назв компаній-партнерів, якщо вони є
    function printCompanyInfo(companyInfo) {
        for (let key in companyInfo) {
            if (key === 'partners') {
                let partnersNames = ''
                for (let i = 0; i < companyInfo.partners.length; i++) {
                    partnersNames = partnersNames + ' [' + companyInfo.partners[i].name + ']'
                }
                console.log(key + ':' + partnersNames)
            }
            else console.log(key + ': ' + companyInfo[key])
        }
        console.log()  // пропускаємо рядок, на випадок виводу декількох компанії з однаковою назвою
    }
    function arrayIter(arr) {  // функція ітерації по компаніям-об'єктам массиву в пошуках потрібної назви компанії
        for (let i = 0; i < arr.length; i++) {
            // навідь у разі вдалого пошуку, вирішив не припиняти подальший пошук, на випадок існування однакових назв компаній
            if (arr[i].name === companyName) {  // порівнюємо назви
                isFindCompany = true  // якщо знайшли - взводимо "флаг"
                // console.log(Object.entries(arr[i]))  // "простий" вивід
                printCompanyInfo(arr[i])  // "кастомний" вивід
            }
            if ("partners" in arr[i]) {     // якщо у поточного об'єкту є масив партнерів,
                arrayIter(arr[i].partners)  // то викликаємо рекурсію для його перевірки
            }
        }
    }
    let isFindCompany = false  // "флаг" вдалого пошуку
    arrayIter(company.clients)  // пошук починається з масиву клієнтів "Великої компанії"
    if (!isFindCompany) console.log('Компанія "' + companyName + '" серед клієнтів відсутня!')  // повідомлення про невдалий пошук
}

console.log('TASK 1')
findValueByKey('Клієнт 1')
console.log()


// ДЗ.2 Робота з обʼєктом.
// Створіть об'єкт з щонайменше трьома властивостями (намагайтесь виявити фантазію). Напишіть метод getInfo(),
// який виводитиме всі властивості об'єкта у вигляді пар "ключ: значення". Зверніть увагу: метод повинен працювати
// навіть після додавання нових властивостей до об'єкта.
// Наприклад так:
// obj.getInfo(); // Правильна інформація про об'єкт
// obj.newProperty = 'Нова властивість!'; // Додали властивість до об'єкта
// obj.getInfo(); // Виводить всі властивості, включаючи щойно додану.
// Умови виконання ДЗ.2
// Не використовувати методи keys, values, entries

const car = {
    brand: 'ford',
    model: 'fiesta',
    color: 'white',
    transmission: 'automatic',
    getInfo: function () {
        for (let key in this) {
            if (typeof this[key] === 'function') continue  // виводимо тільки властивості (не методи)
            else console.log(key + ': ' + this[key])
        }
        console.log()
    }
}

console.log('TASK 2')
car.getInfo()
car.fuel = 'gas'
car.getInfo()

