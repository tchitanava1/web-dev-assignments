// // 1. შექმენით ობიექტი სახელად Person,ობიექტს ექნება სახელი,გვარი,ასაკი.

// let person = {
//   name: "nika",
//   lastname: "tchitanava",
//   age: 21,
// };

// // 2. დაამატეთ ობიექტში  ფუნქცია სახელად  sayHello რომელიც დაპრინტავს ობიექტში
// // სახელის value-ს.

// person.sayHello = function () {
//   console.log(this.name);
// };

// person.sayHello();

// // 3. წაშალეთ ასაკის property.

// delete person.age;
// console.log(person);

// // 4. დაამატეთ ობიექტში job.

// person.job = "content moderator";
// console.log(person);

// // 5. დაამატეთ ობიექტში ფუნქცია რომელიც დააბრუნებს ობიექტის job-ის სიგრძეს.

// person.jobLen = function () {
//   return person.job.length;
// };

// console.log(person.jobLen());

// // 6. ამის შემდეგ დაპრინტეთ უბრალოდ ობიექტში არსებული მეთოდების რაოდენობა.
// let sum = 0;
// for (let key in person) {
//   if (typeof person[key] === "function") {
//     sum++;
//   }
// }
// console.log(sum);

// // 7. დაადგინეთ, აქვს თუ არა ობიექტს gender ფროფერთი. თუ არ აქვს, მაშინ შექმენით მეთოდი რომელიც იმავე ობიექტს gender ფროფერთის შეუქმნის.

// if (!("gender" in person)) {
//   person.gender = "male";
// }

// console.log(person);

// // 8. გადაუარეთ for ციკლით ობიექტს და დაპრინტეთ ყველა property.

// for (let key in person) {
//   console.log(key);
// }

// // 9. გადაუარეთ for ციკლით ობიექტს და დაპრინტეთ ყველა value.

// for (let key in person) {
//   console.log(person[key]);
// }

// // 10. გვაქვს სახელების მასივი. შექმენით ობიექტი, სადაც key-value წყვილებად იქნება სახელები და მათი რაოდენობები მასივში.

// let names = ["nika", "gaga", "ana", "bubuka", "tako", "bubuka", "ana", "ana"];

// let count = {};

// for (let name of names) {
//   if (count[name]) {
//     count[name] += 1;
//   } else {
//     count[name] = 1;
//   }
// }

// console.log(count);

// // 11. შექმენით პროდუქტის პროტოტიპი, რომელსაც ექნება მეთოდი პროდუქტის ფასის საჩვენებლად. პროტოტიპზე დაყრდნობით შექმენით რამდენიმე პროდუქტის ობიექტი, რომელთაც ექნებათ სახელისა და ფასის ფროფერთები.
// // შექმენით კალათის პროტოტიპი რომელზე დაყრდნობითაც შეიქმნება კალათის ობიექტები. კალათის ობიექტში უნდა გვქონდეს მასივი, სადაც შეგვეძლება პროდუქტის ობიექტების დამატება. პროტოტიპშივე უნდა იყოს მეთოდი, რომელიც დაამატებს მასივში ახალ პროდუქტებს და მეთოდი, რომელიც დაითვლის კალათაში არსებული ყველა პროდუქტის ჯამურ ფასს.

// let priceProto = {
//   showPrice() {
//     console.log(`პროდუქტი: ${this.name}, ფასი: ${this.price}`);
//   },
// };

// let product1 = Object.create(priceProto);
// product1.name = "ცივი ყავა ნაყინით";
// product1.price = 11;

// let product2 = Object.create(priceProto);
// product2.name = "ბლინი ნაყინით";
// product2.price = 10;

// console.log(product1, product2);

// let cartProto = {
//   products: [],

//   addProducts(product) {
//     this.products.push(product);
//   },

//   totalPrice() {
//     let total = 0;
//     for (let item of this.products) {
//       total = total + item.price;
//     }
//     return total;
//   },
// };

// let cart1 = Object.create(cartProto);
// cart1.products = [];

// cart1.addProducts(product1);
// cart1.addProducts(product2);

// console.log("Total:", cart1.totalPrice());

// // let priceProto = {
// //   showPrice() {
// //     console.log(`product: ${this.product};  price:  ${this.price}`);
// //   },
// // };

// // let product1 = Object.create(priceProto);
// // product1.name = "ცივი ყავა";
// // product1.price = 10;

// // console.log(product1);

// // let product2 = Object.create(priceProto);
// // product2.name = "მაკ ენ ჩიზი";
// // product2.price = 16;

// // let product3 = Object.create(priceProto);
// // product3.name = "ბლინი ნაყინით";
// // product3.price = 10;

// // console.log(product2);
// // console.log(product3);
// // let cartProto = {
// //   products: [],

// //   addProduct(product) {
// //     this.products.push(product);
// //   },

// //   totalPrice() {
// //     let total = 0;
// //     for (let item of this.products) {
// //       total += item.price;
// //     }
// //     return total;
// //   },
// // };

// // let cart1 = Object.create(cartProto);
// // cart1.products = [];

// // cart1.addProduct(product1);
// // cart1.addProduct(product2);
// // cart1.addProduct(product3);

// // console.log("Total:", cart1.totalPrice());
// // 12. Object Deep Comparison: Write a function that compares two objects deeply and returns true if they are equal, and false otherwise. The function should handle nested objects and arrays. For example, given the objects \{ a: 1, b: \{ c: 2 \} \} and \{ a: 1, b: \{ c: 2 \} \}, the function should return true.

// // 13. Object Transformation: Write a function that takes an array of objects and transforms them into a single object. The transformation should use a specific property of each object as the key and another property as the value. For example, given the array \[\{ id: 1, name: 'Alice' \}, \{ id: 2, name: 'Bob' \}\], and using the id property as the key and the name property as the value, the function should return \{ 1: 'Alice', 2: 'Bob' \}.
// // 14. Object Serialization: Write a function that serializes an object into a string representation. The serialization should handle nested objects and arrays. For example, given the object \{ a: 1, b: \{ c: [2, 3] \} \}, the function should return the string "\{ a: 1, b: \{ c: \[2, 3\] \} \}".
// // 15. Object Prototype Extension: Write a function that extends an object's prototype with additional methods. The additional methods should perform specific operations on the object's properties. For example, extend the Array prototype with a method called sum() that calculates the sum of all elements in the array.

// // დაწერეთ პროგრამა, რათა შეამოწმოთ რიცხვი ლუწია თუ კენტი.

// let x = Number(prompt("sheiyvanet ricxvi: "));

// if (x % 2 === 0) {
//   console.log("luwia");
// } else {
//   console.log("kentia");
// }

// // დაწერეთ პროგრამა, რათა შეამოწმოთ რიცხვი დადებითია, უარყოფითი თუ ნული.

// let y = Number(prompt("sheiyvanet ricxvi: "));

// if (y < 0) {
//   console.log("uaryofitia");
// } else if (y === 0) {
//   console.log("0 arc dadebitia arc uaryofiti");
// } else {
//   console.log("dadebitia");
// }
// // დაწერეთ პროგრამა, რათა შეამოწმოთ იყოფა თუ არა რიცხვი სხვა რიცხვზე.

// let a = Number(prompt("sheiyvanet pirveli ricxvi: "));
// let b = Number(prompt("sheiyvanet meore ricxvi: "));

// if (a % b === 0) {
//   console.log("iyofa");
// } else {
//   console.log("ar iyofa");
// }

// // დაწერეთ პროგრამა, რათა შეამოწმოთ სტრიქონი ცარიელია თუ არა.

// let str1 = prompt("sheiyvanet winadadeba");
// let str = str1.trim();
// if (str.length === 0) {
//   console.log("striqoni carielia");
// } else {
//   console.log("strikoni ar aris carieli");
// }

// // დაწერეთ პროგრამა, რათა შეამოწმოთ, შეიცავს თუ არა სტრიქონი კონკრეტულ სიტყვას.

// // დაწერეთ პროგრამა, რომ იპოვოთ მინიმალური ორი რიცხვიდან.
// // დაწერეთ პროგრამა, რომ იპოვოთ მაქსიმალური ორი რიცხვიდან.
// // დაწერეთ პროგრამა, რომელიც მომხმარებელს შეეკითხება თავის ასაკს და დაადგენს არის თუ არა 18 წლის ან უფრო მეტის. თუ არის, გამოპრინტეთ "Adult", თუარადა - "Minor".
// // დაწერეთ პროგრამა, რომელიც შეეკითხება მომხმარებელს ქულას და გამოიტანს შესაბამის შეფასებას. 91-100 -> A; 81-90 -> B, 71 -> 80: C, 61-70 -> D, 51-60 -> E, 0-50 -> ჩაიჭრა. გამოიყენეთ ორივე - if/else if/else და switch.
// // დაწერეთ პროგრამა, რომელიც მიიღებს შეფასებას (A, B, C, D ან F) ინფუთის სახით და დაბეჭდავს შესაბამის შეტყობინებას switch/case-ის გამოყენებით. მაგალითად, თუ ინფუთი არის "A", უნდა დაბეჭდოს "შესანიშნავი!"
// // დაწერეთ პროგრამა, რომელიც ინფუთის სახით მიიღებს თვის რიცხვს (1 იანვრისთვის, 2 თებერვლისთვის და ა.შ.) და ამობეჭდავს დღეების რაოდენობას ამ თვეში switch/case-ის გამოყენებით.

setTimeout(() => console.log("Tick"), 3000);
console.log("tock");
