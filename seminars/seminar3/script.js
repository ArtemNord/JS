// task 1.1

// const arrNumber = [1, 2, 3];

// for (let i = 0; i < arrNumber.length; i++) {
//     console.log(arrNumber[i]);
// }

// task 1.2

// const arrAny = ['qwe', 1, 3, 'hi', 7];
// console.log(arrAny.length);

// task 1.3

// const arrChar = ['a', 'b', 'c'];

// arrChar[0] = 1;
// arrChar[1] = -2;
// arrChar[2] = -3;

// console.log(arrChar);

// task 2.1

// const arrNumbers = [1, 2, 3];

// for (let i = 0; i < arrNumbers.length; i++) {
//     arrNumbers[i]++;
// }

// console.log(arrNumbers);

//task 2.2

// const arr = [];
// arr[3] = 'a';
// arr[8] = 'b';

// console.log(arr);
// console.log(`Длина массива: ${arr.length}`);

//task 2.3

// const arr = [1, 2, 3];

// arr.push(4, 5);  // 1 вариант

// for (let i = 4; i <= 5; i++) {  // 2 вариант
//     arr.push(i);
// }

// console.log(arr);

// task 2.4

// const arrAny = [2, 3, 5, 1, 7];
// console.log(arrAny.length);

// for (let i = 0; i < 2; i++) {
//     arrAny.pop();
// }

// console.log(arrAny.length);

// task 3.1

// for (let i = 11; i <= 33; i++) {
//     console.log(i);
// }

// task 3.2

// for (let i = 0; i < 100; i++) {
//     if ((i % 2) !== 0) {
//         console.log(i);
//     } else {
//         continue;
//     }
// }

// task 3.3

// for (let i = 100; i > 0; i--) {
//     console.log(i);
// }

// task 3.4

// let num = 3;
// let count = 0;

// while (num <= 1000) {  // вариант с while
//     num *= 3;
//     count++;
// }

// for (let i = 0; ; i++) {
//   // вариант с for
//   if (num < 1000) {
//     num = num * 3;
//     count++;
//   } else {
//     break;
//   }
// }

// console.log(`Число итераций для получения ${num} = ${count}`);

// // task 4.1

// const arr = [2, 5, 9, 15, 1, 4];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 3 && arr[i] < 10) {
//     console.log(arr[i]);
//   } else {
//     continue;
//   }
// }

// // task 4.2

// let sum = 0;

// for (let i = 0; i <= 100; i++) {
//   if (i % 2 === 0) {
//     sum += i;
//   } else {
//     continue;
//   }
// }

// console.log(`Сумма четных чисел от 2 до 100 = ${sum}.`);

// // task 4.3

// const arr = [2, 5, 9, 3, 1, 4];
// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }

// console.log(sum);

// // task 4.4

// const arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(arrNum.join("-"));

// let stringNum = "";

// for (let i = 1; i <= 10; i++) {
//   stringNum += "-";
//   if (i < 10) {
//     stringNum += i;
//   } else {
//     break;
//   }
// }

// console.log(stringNum);

// // task 4.5

// const arrNum = [2, 5, 9, 0, 3, 1, 4];

// for (let i = 0; i < arrNum.length; i++) {
//   if (arrNum[i] !== 0) {
//     console.log(arrNum[i]);
//   } else {
//     break;
//   }
// }

// // task 5.1

// const arrAny = [2, 4, 1, 3, 1, 6, 8, 9, 0];

// for (let i = 0; i < arrAny.length; i++) {
//   if (arrAny[i] % 2 === 0) {
//     console.log(Math.pow(arrAny[i], 2));
//   } else if (arrAny[i] % 3 === 0) {
//     console.log(Math.pow(arrAny[i], 3));
//   }
// }

// task 5.2

const stringArr1 = [];
for (let i = 0; i < 2; i++) {
  const stringArr2 = [];

  for (let j = 1; j <= 3; j++) {
    if (i === 1) {
      stringArr2[j] = j + 3;
    } else {
      stringArr2[j] = j;
    }
  }
  stringArr1.push(stringArr2);
}

console.log(stringArr1);

// // task 5.3

// const arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
// let count = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === 3) {
//     count++;
//   } else {
//     continue;
//   }
// }

// console.log(count);

// // task 5.4

// const arrNum = [1, 2, 3, 4, 5];

// arrNum.splice(1, 2);
// console.log(arrNum);
