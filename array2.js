// Создайте массив из трёх фруктов, добавьте четвёртый через push, выведите массив.
// Уберите последний через pop. Выведите, что он вернул, и сам массив.
// Выведите все элементы через for...of.
// Создайте массив [3, 7, 10, 5] и посчитайте сумму через for...of. Должно получиться 25.

const fruits =['Яблоко', 'Груша', 'Апельсин' ];
console.log(fruits.pop());
console.log(fruits);

for(const fruit of fruits){
    console.log(fruit);
}

const numbers = [3, 7, 10, 5];
let total = 0;
for(const number of numbers){
    total = total + number;
}
console.log(total);
