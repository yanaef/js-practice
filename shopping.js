// Задача: список покупок
// Создайте файл shopping.js.
// Часть 1. Заполняем список.
// Создайте пустой массив list.
// Через push добавьте три товара: "Хлеб", "Молоко", "Сыр".
// Выведите list.length. Должно получиться 3.
// Часть 2. Выводим список. Через for...of выведите каждый товар на своей строке.
// Часть 3. Убираем последнее.
// Часть 4. Считаем буквы. Создайте let totalLetters = 0. Через for...of пройдите по оставшемуся списку и к totalLetters прибавляйте длину каждого слова. Длину слова даёт .length: например, "Хлеб".length это 4. Выведите итог после цикла. Должно получиться 10 (в слове «Хлеб» 4 буквы, в слове «Молоко» 6).


const list = [];
list.push('Хлеб', 'Молоко', 'Сыр');
console.log(list.length);

for(let item of list){
    console.log(item);
}

let removed = list.pop();
console.log(removed);
console.log(list.length);

let totalLetters = 0;
for(let item of list){
    totalLetters =totalLetters + item.length;
}
console.log(totalLetters);

