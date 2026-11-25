const product = { title: "Ноутбук", price: 500000, inStock: true, };
console.log(product.title);
console.log(product.price);

product.price = 100;
console.log(product);

product.category = "Техника";
console.log(product);

console.log(product.color)

const user = { name: "Yana", age: 35 };
user.age = user.age + 1;
console.log(user);

delete user.age;
console.log(user);

console.log(product.color.length)

