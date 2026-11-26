const order =
{
    id: 5,
    customer: { name: "Иванов", city: "Москва" },
    total: 10
};
console.log(order.customer.name);

order.customer.city = "Брянск";
console.log(order);

order.customer.phone = "89001112233";
console.log(order);

if (order.delivery) {
    console.log(order.delivery.address);
} else {
    console.log("Адреса нет");
}