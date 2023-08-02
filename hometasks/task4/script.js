// // Задание 1
// // Дан объект numbers. Необходимо в консоль вывести все значения больше или равные 3.

// const numbers = {
//   keyin1: 1,
//   keyin2: 2,
//   keyin3: 3,
//   keyin4: 4,
//   keyin5: 5,
//   keyin6: 6,
//   keyin7: 7,

//   moreThanThree() {
//     for (const key in numbers) {
//       if (numbers[key] >= 3) {
//         console.log(numbers[key]);
//       }
//     }
//   },
// };

// numbers.moreThanThree();

// Задание 2
// Необходимо из объекта, который лежит в константе post вывести значения, к которым приписан комментарий, в консоль.

const post = {
  author: "John", // вывести этот текст
  postId: 23,
  comments: [
    {
      userId: 10,
      userName: "Alex",
      text: "lorem ipsum",
      rating: {
        likes: 10,
        dislikes: 2, // вывести это число
      },
    },
    {
      userId: 5, // вывести это число
      userName: "Jane",
      text: "lorem ipsum 2", // вывести этот текст
      rating: {
        likes: 3,
        dislikes: 1,
      },
    },
  ],
};

console.log(post.author);

const findDislikes = post.comments.map((value) => {
  if (value.rating.dislikes === 2) {
    return console.log(value.rating.dislikes);
  }
});

const findUserID = post.comments.map((value) => {
  if (value.userId === 5) {
    return console.log(value.userId);
  }
});

const findText = post.comments.map((value) => {
  if (value.text === "lorem ipsum 2") {
    return console.log(value.text);
  }
});
