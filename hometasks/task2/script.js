// Задание 1
// Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

// const cubing = (num) => {
//     return Math.pow(num, 3);
// }

// console.log(cubing(2) + cubing(3));

// Задание 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"

// const netSalary = (money) => {
//     let message;
//     if (isNaN(money) === true) {
//         message = 'Значение задано не верно.';
//     } else {
//         money = money * 0.87;
//         message = `Размер заработной платы за вычетом налогов равен ${money}`;
//     }
//     return message;
// }

// let num = Number(prompt('Input your salary'));
// console.log(netSalary(num));


// Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел

// const maxNumber = (firstNumber, secondNumber, thirdNumber) => {
//     if (firstNumber > secondNumber) {
//         if (firstNumber > thirdNumber) {
//             return firstNumber;
//         } else {
//             return thirdNumber;
//         }
//     } else if (secondNumber > thirdNumber) {
//         return secondNumber;
//     } else {
//         return thirdNumber;
//     }
// }

// console.log(maxNumber(2, 3, 1));


// Задание 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.

const sum = (firstNumber, secondNumber) => {
    return firstNumber + secondNumber;
}

const difference = (firstNumber, secondNumber) => {
    if (firstNumber > secondNumber) {
        return firstNumber - secondNumber;
    } else if (firstNumber < secondNumber) {
        return secondNumber - firstNumber;
    } else {
        return 0;
    }
}

const multiplication = (firstNumber, secondNumber) => {
    return firstNumber * secondNumber;
}

const division = (firstNumber, secondNumber) => {
    if (firstNumber > secondNumber) {
        return firstNumber / secondNumber;
    } else if (firstNumber < secondNumber) {
        return secondNumber / firstNumber;
    } else {
        return 0;
    }
}

console.log(sum(2, 6), difference(6, 6), multiplication(2, 6), division(6, 6));