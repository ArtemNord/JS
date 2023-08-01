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

const array = [1, 2, 3, 10, 15];
console.log(array);
console.log(array.map((item) => item * 2));
console.log(array);
const arrayUp = array.map((item) => item * 2);
console.log(arrayUp);

console.log(array.filter((item) => item >= 10));
console.log(array.some((item) => item >= 10));
console.log(array.some((item) => item >= 20));

console.log(array.reduce((a, b) => a + b) / array.length);
