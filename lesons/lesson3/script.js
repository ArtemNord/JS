// function helloName(name) {
//     console.log(`Привет ${name}!`);
// }

// helloName('Игорь');

// let count = 1;
// function counter() {
//     count++;
//     return count;    
// }

// counter(count)
// console.log(count);

// const lvlUpAge = () => count + 5;
// console.log(lvlUpAge());

// function hello() {
//     console.log('Hello function');
// }
// hello();

// const sum = (param1, param2) => param1 + param2;
// console.log(sum(2, 5));

// const salary = (money) => {
//     money = money * 0.87; //money - money * 0.13
//     return money * 0.75;
// }

// const userMoney = Number(prompt('Сколько ты зарабатываешь: '));

// let moneyMonth = salary(userMoney);

// console.log(`Для расходов можно использовать: ${salary(userMoney)}`);
// console.log(`На еду желательно потратить не больше: ${moneyMonth * 0.3}`);

// function sayHello() {
//     alert('Привет');
//     alert('Push the button.');
// }
// sayHello();

// let userAnswer = prompt('Зимой и летом одним цветом:');

// if (userAnswer === 'елка') {
//     console.log('true');
// } else {
//     console.log('false');
// }

// let userAnswer2 = prompt('Сидит дед во 100 шуб одет:');

// if (userAnswer2 === 'лук') {
//     console.log('true');
// } else {
//     console.log('false');
// }

function askQuestion(answer, question) {
    const userAnswer = prompt(question);

    if (userAnswer.toLowerCase() === answer) {
        console.log('true');
    } else {
        console.log('false');
    }
}



const puzzle = () => {
    askQuestion('лук', 'Сидит дед во 100 шуб одет:');
    askQuestion('елка', 'Зимой и летом одним цветом:');
}