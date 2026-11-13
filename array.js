// Номера в массиве начинаются с 0
// Чтобы вывести последний элемент можно использовать два способа: 
// console.log(array[array.length -1]) или console.log(array.at(-1))

const array = [10, 20, 30, 40, 50];
console.log(array.at(0));
console.log(array.at(-1));
console.log(array.at[-1]); // неправильный вариант для примера
console.log(array.at(-2));