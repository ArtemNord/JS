// let count = 0;
// while (count < 20) {
//     console.log('Hello');
//     count++;
// }

// for (let i = 0; i < 3; i++) {
//     console.log('Hello for');   
// }

// for (let j = 0; j <= 15; j++) {
//     console.log(j); 
    
// }

// let pass;

// do {

//     if (count >= 3) {
//         alert('Пароль не верный');
//     }
//     pass = Number(prompt('Input password'));
//     count++;

// } while (pass !== 234);

// let count = 0;
// alert(`Вы нажали на кнопку ${count} раз.`);

// const clickOnButton = () => {
//     alert(++count);
// }

// const arr = [1, 2, 'hello']; //true - правильное использование
// arr.push('derejabl')
// console.log(arr);
// console.log(arr[2]);
// console.log(arr[arr.length -1]);



// const userInfo = () => {
//     const user = [];

//     user.push(prompt('Input your name:'));
//     user.push(Number(prompt('Input your age:')));

//     return user;
// }

// console.log(userInfo());


// const numbers = [2, 3, 19, 15];

// alert(`Запомни цифры ${numbers}`);

// console.log(numbers.pop());
// console.log(numbers);


// const word = 'example';
// const arrWord = word.split('');
// console.log(arrWord);
// const upWord = arrWord.pop();
// console.log(arrWord);
// arrWord.push(upWord.toLocaleUpperCase());
// console.log(arrWord.join(','));


// const arr = [1, 2, 3];
// const a = 4;
// arr.push(a)
// console.log(arr);


// const arr = [5, 1, 2, 3, 4, 7 , 19];

// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];

//     if (element >= 5) {
//         console.log(element);
//     } else {
//         continue;
//     }
// }

// console.log(arr.indexOf('3'));\


const arrAnswers = ['елка', 'ёлка', 'ель'];
const userAnswer = prompt('Зимой и летом одним цветом: ');

for (let i = 0; i < arrAnswers.length; i++) {
    const element = arrAnswers[i];
    if (element === userAnswer) {
        console.log('True');
        break;
    } else {
        continue;
    }
}