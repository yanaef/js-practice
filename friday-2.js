// Функция isAdult(age): true, если возраст 18 или больше, иначе false. Проверьте на 17, 18, 19.
function isAdult(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}

console.log(isAdult(17));
console.log(isAdult(18));
console.log(isAdult(19));

// Функция sum(numbers): принимает массив, возвращает сумму через for...of. 
// Проверьте на [2, 4, 6] (должно быть 12) и на [] (должно быть 0).
function sum(numbers) {
    let total = 0;
    for (const number of numbers) {
        total = total + number;
    }
    return total;
}

console.log(sum([2, 4, 6]));
console.log(sum([]));

// Дан массив ["Хлеб", "Молоко", "Сыр", "Яйца"]. 
// Через filter оставьте слова длиннее 3 букв и выведите их количество.

const list = ["Хлеб", "Молоко", "Сыр", "Яйца"];
const list2 = list.filter(word => word.length > 3)
console.log(list2.length);

// Часть 1. Найдите Борю по имени через find и выведите его id. Должно получиться 2.
// Часть 2. Найдите пользователя с id: 7 и выведите "не найден". 
// Программа не должна упасть с ошибкой Cannot read properties of undefined.
const users = [{id: 1, name: "Аня"}, {id: 2, name: "Боря"}];

const boris = users.find(user => user.name === "Боря");
if (boris) {
    console.log(boris.id);
} else {
    console.log("не найден");
}

const user = users.find(user => user.id === 7);
if(user){
    console.log(user.id);
} else {
    console.log("не найден");
}

// Выведите order.customer.name.
// Безопасно, с проверкой, выведите order.delivery.address. 
// Если delivery нет, выведите "Адреса нет"

const order = { id: 1, customer: { name: "Иванов" } };
console.log(order.customer.name);
if(order.delivery){
    console.log(order.delivery.address);
} else {
    console.log("Адреса нет");
}

