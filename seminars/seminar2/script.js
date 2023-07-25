// //task 1

// const helloNameAge = (firstName, secondName, age) => {

//     console.log(`Привет ${firstName} ${secondName} с возрастом ${age}.`);
// }

// let firstName = prompt('Input your first name:');
// let secondName = prompt('Input your second name:');
// let age = prompt('Input your age:')

// helloNameAge(firstName, secondName, age);

// //task 2

// let num = Number(prompt('Input number:'));

// const squaring = (number) => {
//     number = Math.pow(number, 2);
//     return number;
// }

// console.log(`Квадратное значение от ${num} = ${squaring(num)}.`);

//task 3

// let num1 = Number(prompt('Input number:'));

// const checkPlusOrMinus = (number) => {
//     if (number > 0) {
//         console.log('+++');
//     } else {
//         console.log('---');
//     }
// }

// checkPlusOrMinus(num1);

//task 4 

let num1 = prompt('Input your first number:'); // Number('1');
let num2 = prompt('Input your second number:');
let num3 = prompt('Input your third number:');

const sum = (firstNumber, secondNumber, thirdNumber) => {
    return (Number(firstNumber) + Number(secondNumber) + Number(thirdNumber));
}

let param1 = '1';
let param2 = 3;
let param3 = 3;

console.log(`sum = ${sum(num1, num2, num3)}`);
console.log(`sum = ${sum(param1, param2, param3)}`);

function func(num = 5) {
    return (num * num);
}

console.log(func(2));
console.log(func(3));
console.log(func());
