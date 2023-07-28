// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

// const printInfoAboutNumbers = (numCount) => {
//   for (let i = 0; i <= numCount; i++) {
//     if (i === 0) {
//       console.log(`${i} - это ноль`);
//     } else if (i % 2 !== 0) {
//       console.log(`${i} - нечетное число`);
//     } else if (i % 2 === 0) {
//       console.log(`${i} - четное число`);
//     }
//   }
// };

// printInfoAboutNumbers(10);

// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

// const arrNumbers = [1, 2, 3, 4, 5, 6, 7];
// arrNumbers.splice(3, 2);
// console.log(arrNumbers);

// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

// const randomNumber = (minNum, maxNum) => {
//   let randomNum = Math.floor(Math.random() * (maxNum - minNum)) + minNum;
//   return randomNum;
// };

// const createRandomArray = () => {
//   const randomArr = [];

//   for (let i = 0; i < 5; i++) {
//     randomArr[i] = randomNumber(0, 9);
//   }

//   return randomArr;
// };

// const array = createRandomArray();

// console.log(array);

// const sumArrayElement = (arr) => {
//   // 1.
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }

//   return sum;
// };

// const findingTheMinimumArrayElement = (arr) => {
//   // 2.
//   let min = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (min > arr[i]) {
//       min = arr[i];
//     } else {
//       continue;
//     }
//   }
//   return min;
// };

// const findingNumberThreeInArray = (arr) => {
//   let count = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 3) {
//       console.log(`Число 3 найдено под индексом = ${i}`);
//       count++;
//     } else {
//       continue;
//     }
//   }

//   if (count === 0) {
//     console.log("Число 3 не найдено.");
//   }
// };

// console.log("1. Рассчитать сумму элементов этого массива");
// console.log(sumArrayElement(array));
// console.log("2. Найти минимальное число");
// console.log(findingTheMinimumArrayElement(array));
// console.log("3. Найти есть ли в этом массиве число 3");
// findingNumberThreeInArray(array);

// *Необязательное задание. *
// Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:
// x
// xx
// xxx
// xxxx
// xxxxx

const rightAngleTriangle = (numberOfLines) => {
  let stringX = "";

  for (let i = 0; i < numberOfLines; i++) {
    console.log((stringX += "x"));
  }
};

rightAngleTriangle(20);
