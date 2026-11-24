const numbers = [5, 12, 8, 20];
const newNumbers = numbers.filter(number => number > 10);
console.log(newNumbers);

const multipleNumbers = newNumbers.map(number => number * 2);
console.log(multipleNumbers);

const list = ["Хлеб", "Молоко", "Сыр"];
const newList = list.filter(item => item.length > 3);
console.log(newList);


