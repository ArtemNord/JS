// // task 1.1

// const weekday = {
//   1: "Mondey",
//   2: "Tuesday",
//   3: "Wednesday",
//   4: "Thursday",
//   5: "Friday",
//   6: "Saturday",
//   7: "Sunday",
// };
// console.log(weekday[2]);

// // task 1.2

// const user = {
//   name: "Artem",
//   surname: "Nord",
//   age: 36,
// };
// console.log(`-${user.name}-${user.surname}-${user.age}-`);

// // task 1.3

// user.fatherName = prompt("Input father name: ");
// console.log(user);

// // task 1.4

// delete user.surname;
// console.log(user);

// // task 2.1

// const arr1 = ["mn", "tu", "we", "th", "fr", "sa", "su"];
// const arr2 = [1, 2, 3, 4, 5, 6, 7];
// const arrObject = {};

// for (let i = 0; i < arr1.length; i++) {
//   arrObject[i + 1] = arr1[i];
// }
// console.log(arrObject);

// // task 2.2

// const obj = {
//   x: 1,
//   y: 2,
//   z: 3,
// };

// for (const value in obj) {
//   obj[value] **= 2;
//   console.log(obj[value]);
// }
// console.log(obj);

// task 3.1

const obj = {
  key1: {
    key1: 1,
    key2: 2,
    key3: 3,
  },
  key2: {
    key1: 4,
    key2: 5,
    key3: 6,
  },
  key3: {
    key1: 7,
    key2: 8,
    key3: 9,
  },
};

// let sum = 0;

// for (const key in obj) {             // variant 1
//   for (const key2 in obj[key]) {
//     sum += obj[key][key2];
//   }
// }

//------------------------

// console.log(                         // variant 2
//   Object.values(obj)
//     .map((item) =>
//       Object.values(item).reduce((sum, current) => sum + current, 0)
//     )
//     .reduce((partialSum, current) => partialSum + current, 0)
// );

// console.log(sum);
// console.log(Object.values(obj));
// console.log(Object.keys(Object.values(obj)));
// console.log(Object.values(Object.values(obj)));
// console.log(Object.entries(Object.values(obj)));

// task 4

const riddles = {
  question: "Зимой белый, летом серый:",
  answer: "заяц",

  askQuestion() {
    const answer1 = prompt(this.question);
    if (answer1 === this.answer) {
      console.log("Верно.");
    } else {
      console.log("Вы проигралию");
    }
  },
};

riddles.askQuestion();
