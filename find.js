// Массив [5, 12, 8, 20]. Найдите первое число больше 10 и выведите. Угадайте ответ заранее.
const numbers = [5, 12, 8, 20];
let number = numbers.find(n => n > 10);
console.log(number);

// Найдите первое число больше 100. Что вывелось и почему?
number = numbers.find(n => n > 100);
console.log(number);

// Массив ["Хлеб", "Молоко", "Сыр"]. Найдите первое слово длиннее 4 букв (подсказка: word.length).
const list = ["Хлеб", "Молоко", "Сыр"];
let item = list.find(item => item.length > 4);
console.log(item);

// Перепишите правило из пункта 1 сначала как обычную функцию, потом как стрелочную, и убедитесь, что результат одинаковый
function isBig(n) {
   return n > 10;
}

let isBig2 = n => n > 10;


console.log(numbers.find(isBig))
console.log(numbers.find(isBig2))
