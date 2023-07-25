//Задание 1

const task1 = () => {
    let num1 = Number(prompt('Input first number: '));
    let num2 = Number(prompt('Input second number: '));

    if ((num1 === 1 || num1 < 1) && (num2 === 3 || num2 > 3)) {
        console.log(true);
    } else {
        console.log(false);
    }
}

task1();

// Задание 2

let test = true ; (test === true) ? console.log('+++') : console.log('---');

// Задание 3

const task3 = () => {
    let min = Math.ceil(1);
    let max = Math.floor(31);

    let random = Math.floor(Math.random() * (max - min)) + min;
    console.log(random);

    if (random <= 10) {
        console.log('первая декада месяца');
    } else if (random > 10 && random <= 20) {
        console.log('вторая декада месяца');
    } else {
        console.log('третья декада месяца');
    }
}

task3();

// Задание 4*

const task4 = () => {
    let num = Number(prompt('Input first number: '));

    let hundreds = Math.trunc((num % 1000) / 100);
    let tens = Math.trunc((num % 100) / 10);
    let units = Math.trunc(num % 10);

    console.log(`Пользователь ввел число: ${num} \n В числе ${num} количество сотен: ${hundreds}, десятков: ${tens}, единиц: ${units}.`);
}

task4();