function isAgeValid(age ){
    if (age >= 18 && age <=60){
        return true;
    } else {
        return false;
    }
}
console.log(isAgeValid(17));
console.log(isAgeValid(18));
console.log(isAgeValid(60));
console.log(isAgeValid(61));


function FizzBuzz(n) {
    if (n % 3 === 0 && n % 5 === 0){
        return "FizzBuzz";
    } else if (n % 3 === 0 ){
        return "Fizz";
    } else if (n % 5 === 0) {
        return "Buzz";
    } else {
        return n;
    }
}

console.log(FizzBuzz(15));
console.log(FizzBuzz(10));
console.log(FizzBuzz(9));
console.log(FizzBuzz(11));

for(let i = 1; i <= 30; i++){
    console.log(FizzBuzz(i));
}

// function sum(){
//     let total = 0;
//     for(let i = 0; i <= array.length - 1; i++){
//         total = total + array[i];
//     } 
//     return total; 
// }

function sum(numbers){
    let total = 0;
    for(const number of numbers){
        total = total + number;
    } 
    return total; 
}

console.log(sum([5, 4, 1, 10]));
console.log(sum([]));

function getPosition(list, item) {
    const index = list.indexOf(item)
    if(index === -1) {
        return "нет в списке"
    } else {
        return index + 1;
    }
}

console.log(getPosition(["Хлеб", "Молоко", "Сыр"], "Молоко")); // 2
console.log(getPosition(["Хлеб", "Молоко", "Сыр"], "Хлеб"));   // 1
console.log(getPosition(["Хлеб", "Молоко", "Сыр"], "Масло"));  // нет в списке


const users = [
  {id: 1, name: "Вася"},
  {id: 2, name: "Петя"}
];

console.log(users.find(user => user.name === "Петя"));
console.log(users.find(user => user.id === 2));

const user5 = users.find(user => user.id ===5)
if(user5){
    console.log(user5.id);
} else {
    console.log("Не найден");
}