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

// //task 4 

// let num1 = prompt('Input your first number:'); // Number('1');
// let num2 = prompt('Input your second number:');
// let num3 = prompt('Input your third number:');

// const sum = (firstNumber, secondNumber, thirdNumber) => {
//     return (Number(firstNumber) + Number(secondNumber) + Number(thirdNumber));
// }

// let param1 = '1';
// let param2 = 3;
// let param3 = 3;

// console.log(`sum = ${sum(num1, num2, num3)}`);
// console.log(`sum = ${sum(param1, param2, param3)}`);

// function func(num = 5) {
//     return (num * num);
// }

// console.log(func(2));
// console.log(func(3));
// console.log(func());

// //task 5

// const mathSqrt = (num) => {
//         return Math.sqrt(num);
// }

// const sum = (firstNumber, secondNumber) => {
//     return (Number(firstNumber) + Number(secondNumber));
// }

// console.log(sum(mathSqrt(3), mathSqrt(4)));

// //task 6

// const minMax = (firstNumber, secondNumber) => {
//     (firstNumber < secondNumber) ? firstNumber : secondNumber;
// }

// console.log(minMax(3, 1)); 

//task 6

const dayOfTheWeek = (num) => {
    let day;
    if (num === 1) {
        day = 'Monday';
    } else if (num === 2) {
        day = 'Tuesday';
    } else if (num === 3) {
        day = 'Wednesday';
    } else if (num === 4) {
        day = 'Thursday';
    } else if (num === 5) {
        day = 'Friday';
    } else if (num === 6) {
        day = 'Saturday';
    } else if (num === 7) {
        day = 'Sunday';
    } else {
        day = 'Input number 1-7.';
    }
    return day;      
}

console.log(dayOfTheWeek(1));

// v.2

function getDayOfTheWeek(numberDay) {
    switch (numberDay) {
        case 1:
            alert('Monday');
            break;
        case 2:
            alert('Tuesday');
            break;
        case 3:
            alert('Wednesday');
            break;
        case 4:
            alert('Thursday');
            break;

        case 5:
            alert('Friday');
            break;

        case 6:
            alert('Saturday');
            break;

        case 7:
            alert('Sunday');
            break;

    }
}

getDayOfTheWeek(+prompt('Input number 1-7.'));

//task 7

const helloTimesOfDay = (name, time) => {
    let message;
    if (time > 6 && time < 10) {
        message = `Доброе утро ${name}.`;
    } else if (time > 10 && time < 16) {
        message = `Добрый день ${name}.`;
    } else if (time > 16 && time < 22) {
        message = `Добрый вечер ${name}.`;
    } else {
        message = `Доброй ночи ${name}.`;
    }
    return message;
}

console.log(helloTimesOfDay('Artem', 12));

// v.2

function getGoodDay(name, hourDay) {
    if (hourDay >= 6 && hourDay < 10) {
        alert(`Good morning ${name}.`);
    } else if (hourDay >= 10 && hourDay < 18) {
        alert(`Good afternoon ${name}.`);
    } else if (hourDay >= 18 && hourDay < 21) {
        alert(`Good evening ${name}.`);
    } else {
        alert(`Good night ${name}.`);
    }
}

let date = new Date();

console.log(date);
console.log(getGoodDay('Artem', date.getHours()));
