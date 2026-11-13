let total = 0;
for ( let i = 1; i <= 10; i++) {
    console.log(i);
    total = total +i;
}
console.log(total);

function sum (a,b) {
    return a + b ;
}

console.log(sum(2,3));
console.log(sum(10,20));
console.log(sum(-5,5));

function isAdult(age) {
    if( age >= 18) {
        return true;
    } else {
        return false;
    }
}

console.log(isAdult(17));
console.log(isAdult(18));
console.log(isAdult(19));

function isAdult2(age) {
    return age >= 18;
}

function isAgeValid(age) {
    return age >= 18 && age <= 60;
}
console.log(isAgeValid(17));
console.log(isAgeValid(18));
console.log(isAgeValid(60));
console.log(isAgeValid(61));

for (let i = 1; i <= 30; i++ ) {
    if (i % 3 === 0 && i % 5 === 0){
        console.log('FizzBuzz');
    } else if (i % 3 === 0){
        console.log('Fizz');
    } else if (i % 5 === 0){
        console.log('Buzz');
    } else {
        console.log(i);
    }
}зц