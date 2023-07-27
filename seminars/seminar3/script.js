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

let num = 3;
let count = 0;

for (let i = 0; ; i++) {
    if (num < 1000) {
        num = num * 3;
        count++;
    } else {
        break;
    }
}

console.log(`Число итераций для получения ${num} = ${count}`);