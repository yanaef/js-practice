// Создайте массив products с четырьмя товарами: "Хлеб", "Молоко", "Сыр", "Яйца".
// Выведите через includes, есть ли "Сыр". Угадайте ответ заранее.
// Выведите, есть ли "Масло".
// Выведите номер "Молоко" через indexOf.
// Выведите indexOf("Масло"). Что получилось и что это значит?
// Выведите products.includes("сыр") (с маленькой буквы). Угадайте ответ и объясните почему.
// Напишите условие через if: если "Хлеб" есть в списке, выведите "Хлеб есть", иначе "Хлеба нет".

const products = ["Хлеб", "Молоко", "Сыр", "Яйца"];
console.log(products.includes("Сыр"));
console.log(products.includes("Масло"));
console.log(products.indexOf("Молоко"));
console.log(products.indexOf("Масло"));
console.log(products.includes("сыр"));

if (products.includes("Хлеб")) {
    console.log("Хлеб есть");
} else {
    console.log("Хлеба нет");
}

if (!products.includes("Масло")) {
    console.log("Масла нет")
}

// Часть 1. Простые вопросы к списку. Каждый ответ выводите через console.log. Сначала угадайте на листочке.
// Есть ли в меню "Салат"?
// Есть ли в меню "Пицца"?
// Под каким номером стоит "Компот"?
// Что выведет menu.indexOf("Суши")?
// Что выведет menu.includes("борщ") (с маленькой буквы)? Почему?

const menu = ["Борщ", "Пельмени", "Салат", "Компот", "Блины"];
console.log(menu.includes("Салат"));
console.log(menu.includes("Пицца"));
console.log(menu.indexOf("Компот"));
console.log(menu.indexOf("Суши"));
console.log(menu.indexOf("борщ"));

// Часть 2. Условия. Напишите через if / else:
// Если "Блины" есть в меню, выведите "Блины есть", иначе "Блинов нет".
// Если "Пицца" нет в меню, выведите "Пиццы нет".

if (menu.includes("Блины")) {
    console.log("Блины есть");
} else {
    console.log("Блинов нет");
}

if (!menu.includes("Пицца")) {
    console.log("Пиццы нет")
}

// Часть 3. Своя функция. Здесь пригодится всё, что вы знаете про return.
// Напишите функцию hasDish(dish),
//  которая принимает название блюда и возвращает true, если оно есть в меню,
//  и false, если нет. Внутри используйте menu.includes(...).
// Проверьте её на "Борщ", "Суши", "Компот", выводя результат через console.log(hasDish(...)).

function hasDish(dish) {
    if (menu.includes(dish)) {
        return true;
    } else {
        return false;
    }
}

console.log(hasDish("Борщ"));
console.log(hasDish("Суши"));
console.log(hasDish("Компот"));

// Осталась часть 5 (со звёздочкой)
// Функция getPosition(dish):
// возвращает номер блюда в меню, начиная с 1;
// возвращает "нет в меню", если блюда нет.

function getPosition(dish) {
    const index = menu.indexOf(dish);
    if (index === -1) {
        return "нет в меню"
    } else {
        return index + 1;
    }
}
console.log(getPosition("Пельмени"))
console.log(getPosition("Борщ"))
console.log(getPosition("Суши"));
console.log(getPosition("Блины"));