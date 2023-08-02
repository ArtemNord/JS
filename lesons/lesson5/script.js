// const productNew = {
//   name: "Table",
//   productPrice: 2000,
//   count: 2,
//   userRegistred: false,

//   reg: function () {
//     this.userRegistred = true;
//   },
//   countProduct: function () {
//     if (this.count > 0) {
//       console.log("Вы можете купить этот товар.");
//     } else {
//       console.log("Товар нельзя добавить.");
//     }
//   },
//   buyProduct: function () {
//     if (this.userRegistred) {
//       console.log("Товар в корзине.");
//     } else {
//       console.log(
//         "Вам необходимо зарегистрироваться, сначала выполнить product.reg()"
//       );
//     }
//   },
// };
// productNew.buyProduct();
// productNew.reg();
// productNew.buyProduct();

// console.log(productNew);

// const productTest = {
//   text: "hello",
//   price: 1000,
// };

// for (const key in productTest) {
//   console.log(productTest[key]);
// }

// console.log(Object.values(productTest));
// console.log(Object.keys(productTest));
// console.log(Object.entries(productTest));

//------------------------------

// const productNew = {
//   productImg: "photo.png",
//   productText: "крутое кресло",
// };

// console.log(product.name);
// console.log(productNew.productText);

// let text = productNew.productText;
// console.log(text);

// productNew.link = "product/linkname.html";
// console.log(productNew);

// delete productNew.productText;
// console.log(productNew);

// productNew.link = "catalog/linkname.html";
// console.log(productNew);

// const array = [1, 2, 3, 10, 15];
// console.log(array);
// console.log(array.map((item) => item * 2));
// console.log(array);
// const arrayUp = array.map((item) => item * 2);
// console.log(arrayUp);

// console.log(array.filter((item) => item >= 10));
// console.log(array.some((item) => item >= 10));
// console.log(array.some((item) => item >= 20));

// console.log(array.reduce((a, b) => a + b) / array.length);

//--------------------------------------

const car = {
  make: "Audi",
  model: "A5",
  year: 2023,
  color: "red",
  passengers: 2,
  power: 249,
  odometer: 0,
  engineIsStarted: false,

  startEngine() {
    this.engineIsStarted = true;
  },
  stopEngine() {
    this.engineIsStarted = false;
  },
  haveRoadTrip(distance) {
    if (this.engineIsStarted) {
      this.odometer += distance;
    } else {
      alert("Запусти двигатель!");
    }
  },
};

console.log(car.model);
car.power = 250;
console.log(car);

// function haveRoadTrip(myCar, distance) {
//   myCar.odometer += distance;
// }
car.startEngine();
car.haveRoadTrip(150);
console.log(car.odometer);

// Работа с forin
// console.log("Все ключи объекта car:");
// for (const key in car) {
//   console.log(key);
// }
// console.log("Все значения объекта car:");
// for (const key in car) {
//   console.log(car[key]);
// }

// const group1 = {
//   Ivanov: {
//     practicePlace: "ldu-1",
//     practiceTime: 56,
//   },
//   Petrov: {
//     practicePlace: "kamaz",
//     practiceTime: 120,
//   },
//   Sidorov: {
//     practicePlace: "ldu-1",
//     practiceTime: 148,
//   },
//   Belkin: {
//     practicePlace: "GosDZU",
//     practiceTime: 20,
//   },
//   Avdeev: {
//     practicePlace: "LPK",
//     practiceTime: 160,
//   },
// };

// const group1Students = Object.keys(group1);
// console.log(group1Students);
// console.log(Object.values(group1));
// console.log(Object.entries(group1));

// console.log(Object.values(car));
// console.log(Object.entries(car));

// map
//
// Метод map является одним из самых используемых при работе с массивом. Он позволяет
// проитерировать весь массив, и создать на основе него новый массив. Map (от английского
// карта) - данные метод позволяет сделать как бы карту соответствия исходного массива и
// нового. Метод принимает аргумент-функцию, в которую при работе передаются аргументы:
// текущий элемент массива, его индекс, и полный массив. Функция аргумент должна сделать
// необходимые вычисления и вернуть новый элемент, из которых будет построен новый массив.

const studentsPracticeTime = [
  {
    firstName: "Ivanov",
    practiceTime: 56,
  },
  {
    firstName: "Petrov",
    practiceTime: 120,
  },
  {
    firstName: "Sidorov",
    practiceTime: 148,
  },
  {
    firstName: "Belkin",
    practiceTime: 20,
  },
  {
    firstName: "Avdeev",
    practiceTime: 160,
  },
];

const dataForTable = studentsPracticeTime.map((student) => {
  if (student.practiceTime < 120) {
    return {
      Student: student.firstName,
      Practice: "Not passed",
    };
  } else {
    return {
      Student: student.firstName,
      Practice: "Passed",
    };
  }
});

console.table(dataForTable);

// filter
//
// Метод filter используется для фильтрации элементов массива по какому-нибудь правилу,
// которое задаете вы сами. Это очень полезный метод, который позволяет исключить из
// исходного массива лишние элементы и получить новый массив. Метод filter также, как и метод
// map получает в качестве аргумента функцию обратного вызова, с теми же аргументами, только
// эта функция должна вернуть false если элемент должен быть исключен, или true, чтобы
// текущий элемент попал в новый, возвращаемый функцией filter массив.

const studentsPassedPractice = studentsPracticeTime.filter((student) => {
  if (student.practiceTime < 120) return false;
  return true;
});

console.table(studentsPassedPractice);

// reduce
//
//Метод reduce не так просто понять с первого раза. Этот метод еще называют свёрткой, т.к. он
// проходится по всему массиву и позволяет собрать и обработать его значение в новую форму,
// например в одно значение (допустим сумму значений всех элементов).

let totalTime = 0;

for (let i = 0; i < studentsPracticeTime.length; i++) {
  // вариант без reduce
  totalTime += studentsPracticeTime[i].practiceTime;
}
console.log(totalTime);

const totalTime1 = studentsPracticeTime.reduce((acc, student) => {
  return acc + student.practiceTime;
}, 0);
console.log(totalTime1);

// some
//
// Метод some используется, когда нам нужно проверить, что в массиве есть хоть один
// подходящий нам элемент. Например мы хотим проверить, есть ли среди всех студентов хоть
// кто-то, кто прошел практику

const isSomebodyPassedPractice = studentsPracticeTime.some((student) => {
  console.log(student.firstName);
  return student.practiceTime >= 120;
});

console.log(isSomebodyPassedPractice);

// find
//
//Когда в нашем массиве studentsPracticeTime лежат объекты, а мы хотим найти элемент
// массива по фамилии студента, но не знаем сколько часов практики он уже отработал, мы не
// можем применить метод indexOf, т.к. в нашем массиве объекты, а как мы знаем объекты
// сравниваются по ссылкам, соответственно для поиска в массиве объектов мы должны иметь
// ссылку на конкретный объект, вряд ли у нас такая будет, если мы ищем элемент. Нам поможет
// метод find - он позволяет найти элемент в массиве по заданному условию. В отличия от метода
// indexOf, метод find позволяет искать не точное совпадение элемента.

const studentBelkin = studentsPracticeTime.find((student) => {
  console.log(student.firstName);
  return student.firstName === "Belkin";
});
console.log(studentBelkin.practiceTime);

// Деструктуризация

const { firstName, practiceTime } = studentsPracticeTime; // Деструктуризация - мы
// объявляем все переменные в фигурных скобках, название должно совпадать с
// нужным нам параметром.

const students = ["Ivanov", "Petrov", "Belkin"];
const [student1, student2, student3] = students; // Деструктуризация - Тут
// мы указываем имена переменных в квадратных скобках, и в них по порядку
// будут записаны элементы массива.

const student = {
  firstName: "Ivan",
  lastName: "Petrov",
  age: 21,
};

const { firstName: studentName, lastName, age = 20 } = student; // Деструктурируем значение ключа firstName в переменную studentName. И
// зададим для возраста значение по умолчанию, равное 20.
