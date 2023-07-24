// // Задание 1

// const task1 = () => {
//     let age = Number(prompt('Input your age: ', 18));
//     if (age <= 0) {
//         alert('Ввели не верное значение');
//     } else if (age === 1) {
//         alert(`Ваш возраст ${age} год.`);
//     } else if (age >= 2 && age <= 4) {
//         alert (`Ваш возраст ${age} года`);
//     } else {
//         alert(`Ваш возраст ${age} лет.`);
//     }

//     let myName = prompt('Input your name: ', 'Ivan');
//     alert(`Добро пожаловать на сайт ${myName}`);
// }

// task1();

// // Задание 2

// let a = 13;
// let b = 5;
// console.log(a % b);

// let c;
// alert(c);

// alert('abc' * 3);

// alert(1 / 0);
// alert(-1 / 0);

// alert('2' * '3');

// Задание 3

let num = 5;

let a = '2';
let b = '3';
console.log(a + b);

const task3 = () => {
    let num1 = Number(prompt('Input first number: '));
    let num2 = Number(prompt('Input second number: '));

    if (num1 === 0 || num2 === 0) {
        alert('Введен ноль');
    // } else if ((typeof(num1) != Number) || (typeof(num2) != Number)) {
    //     alert('Введите число');
    } else {
        console.log(`Сумма чисел равна ${num1 + num2}`);
        console.log(`Разность чисел равна ${num1 - num2}`);
        console.log(`Произведение чисел равно ${num1 * num2}`);
        console.log(`Частное чисел равно ${num1 / num2}`);
        console.log(`Остаток от деления чисел равен ${num1 % num2}`);
    }
}

task3();