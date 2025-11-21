// ### სავარჯიშოები

// 1.რიცხვების მასივის გათვალისწინებით, გამოიყენეთ ფილტრი ახალი მასივის შესაქმნელად, რომელიც შეიცავს მხოლოდ ლუწი რიცხვებს.
// function filterArray(array) {
//   let passed = [];
//   for (let element of array) {
//     if (element % 2 === 0) {
//       passed.push(element);
//     }
//   }
//   return passed;
// }

// console.log(filterArray([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// 2
// function filterArray(array, test) {
//   let passed = [];
//   for (let element of array) {
//     if (test(element)) {
//       passed.push(element);
//     }
//   }
//   return passed;
// }

// console.log(
//   filterArray([1, 2, 3, 4, 5, 6, 7, 8, 9], (element) => element % 2 === 0)
// );

// 3

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const filteredEvenArray = arr.filter((element) => element % 2 === 0);
// console.log(filteredEvenArray);

// 2.მომხმარებლების გაფილტვრა ასაკის მიხედვით: მომხმარებლის ობიექტების მასივის გათვალისწინებით, თვისებების სახელით და ასაკის მიხედვით, გამოიყენეთ ფილტრი 18 წელზე უფროსი ასაკის მომხმარებელთა მასივის შესაქმნელად.
// 1
// const user = [
//   { name: "nika", age: 20 },
//   { name: "nini", age: 24 },
//   { name: "ninutsa", age: 17 },
//   { name: "temo", age: 20 },
// ];

// const filterAdult = user.filter((user) => user.age >= 18);
// console.log(filterAdult);

// 2

// function filterAdult(users) {
//   let passed = [];
//   for (let user of users) {
//     if (user.age >= 18) {
//       passed.push(user);
//     }
//   }
//   return passed;
// }
// let user = [
//   { name: "nika", age: 20 },
//   { name: "nini", age: 24 },
//   { name: "ninutsa", age: 17 },
//   { name: "temo", age: 20 },
// ];

// console.log(filterAdult(user));

// 3

// function filterAdult(users, test) {
//   let passed = [];
//   for (let user of users) {
//     if (test(user)) {
//       passed.push(user);
//     }
//   }
//   return passed;
// }
// let user = [
//   { name: "nika", age: 20 },
//   { name: "nini", age: 24 },
//   { name: "ninutsa", age: 17 },
//   { name: "temo", age: 20 },
// ];

// console.log(filterAdult(user, (user) => user.age >= 18));

// 3.სტრიქონების გაფილტვრა სიგრძის მიხედვით: სტრიქონების მასივის გათვალისწინებით, გამოიყენეთ ფილტრი მასივის შესაქმნელად, რომელიც შეიცავს მხოლოდ 5 სიმბოლოზე მეტ სტრიქონებს.

// 1

// function filterArray(array) {
//   let passed = [];
//   for (let string of array) {
//     if (string.length > 5) {
//       passed.push(string);
//     }
//   }
//   return passed;
// }
// console.log(
//   filterArray(["ქართული", "მათემატიკა", "ისტორია", "ფიზიკა", "ქიმია"])
// );

// 2

// function filterArray(array, test) {
//   let passed = [];
//   for (let string of array) {
//     if (test(string)) {
//       passed.push(string);
//     }
//   }
//   return passed;
// }
// console.log(
//   filterArray(
//     ["ქართული", "მათემატიკა", "ისტორია", "ფიზიკა", "ქიმია"],
//     (string) => string.length > 5
//   )
// );

// 3
// let strArray = ["ქართული", "მათემატიკა", "ისტორია", "ფიზიკა", "ქიმია"];
// const filterArray = strArray.filter((string) => string.length > 5);
// console.log(filterArray);
// 4.გააორმაგეთ რიცხვები: მოცემული რიცხვების მასივისთვის, შექმენით ახალი მასივი, სადაც თითოეული რიცხვი გაორმაგდება.

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const doubleArray = arr.map((element) => element * 2);
// console.log(doubleArray);

// 2

// function doubleArray(arr) {
//   let result = [];
//   for (let element of arr) {
//     element = element * 2;
//     result.push(element);
//   }
//   return result;
// }
// console.log(doubleArray([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// 5.მომხმარებლის ობიექტების მასივის გათვალისწინებით, შექმენით მასივი,სადაც მხოლოდ მომხმარებლის სახელებს დააბრუნებს.

// let users = [
//   { name: "nika", age: 20 },
//   { name: "nini", age: 24 },
//   { name: "ninutsa", age: 17 },
//   { name: "temo", age: 20 },
// ];

// let usernames = user.map((user) => user.name);
// console.log(usernames);

// 2.

// function usernames(users) {
//   let passed = [];
//   for (let user of users) {
//     passed.push(user.name);
//   }
//   return passed;
// }

// console.log(
//   usernames([
//     { name: "nika", age: 20 },
//     { name: "nini", age: 24 },
//     { name: "ninutsa", age: 17 },
//     { name: "temo", age: 20 },
//   ])
// );

// 6.სტრიქონების მასივის გათვალისწინებით, შევქმნათ ახალი მასივი, სადაც თითოეული სტრიქონი გარდაიქმნება მაღალ რეგისტრში,ანუ დიდ ასოებად..

// function toUpper(array) {
//   let result = [];
//   for (let string in array) {
//     result[string] = array[string].toUpperCase();
//   }
//   return result;
// }
// console.log(toUpper(["a", "b", "c", "d"]));

// 2
// let arr1 = ["a", "b", "c", "d"];
// const upperArray = (array) => array.map((string) => string.toUpperCase());
// console.log(upperArray(array));

// 7.იპოვეთ რიცხვების მასივში ყველა რიცხვის ჯამი.ვიყენებთ მაღალი დონის ფუნქციებს.
// function sum(array) {
//   let sum = 0;
//   for (let element of array) {
//     sum = sum + element;
//   }
//   return sum;
// }

// console.log(sum([1, 2, 3, 4]));

// 2
// let arr = [1, 2, 3, 4, 5];
// const arraySum = (arr) => arr.reduce((sum, num) => sum + num, 0);
// console.log(arraySum(arr));
// 8.გვაქვს მასივი,სადაც ყრია ადამიანის სახელები,ჩვენი მიზანია შევქმნათ ობიექტი, რომელშიც მითითებული იქნება თუ რამდენჯერ მეორდება მასივში თითოეული სახელი. მაგალითად: \{ "გიო": 2, "საბა": 5, "ნიკა": 3 \}
// const names = ["nika", "nika", "nika", "oto", "oto", "oto", "nini"];

// const namesCount = names.reduce((sum, name) => {
//   sum[name] = (sum[name] || 0) + 1;
//   return sum;
// }, {});
// console.log(namesCount);
// 9.რიცხვების მასივის გათვალისწინებით,დავალაგოთ მასივი ზრდადობით.
// let arr2 = [-1, -2, -3, -4, -5, -6, -7, -8];
// const zrdadobit = arr2.sort((a, b) => a - b);
// console.log(zrdadobit);

// 10.რიცხვების მასივის გათვალისწინებით,დავალაგოთ მასივი კლებადობით.
// let arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
// const klebadobit = arr1.sort((a, b) => b - a);
// console.log(klebadobit);
// 11.მომხმარებლების დალაგება სახელების მიხედვით: მომხმარებლის ობიექტების მასივის გათვალისწინებით,დავაბრუნოთ მასივი რომელიც დალაგებული იქნება  ანბანურად მომხმარებლის სახელის მიხედვით.
// const usernames = [
//   { name: "ნიკა", age: 20 },
//   { name: "ნინი", age: 24 },
//   { name: "ოთო", age: 23 },
//   { name: "თემო", age: 20 },
// ];

// const userSorted = usernames.sort((a, b) => a.name.localeCompare(b.name));
// console.log(userSorted);

// 12.სტრიქონების მასივის გათვალისწინებით, დავაბრუნოთ მასივი,რომელშიც იქნება ელემენტები ზრდადობით,სტრიქონების სიგრძის  მიხედვით.

function stringSort(arr) {}
// 13.მასივის გათვალისწინებით, გამოიყენეთ forEach თითოეული ელემენტის კონსოლში დასაპრინტად.

// 14.რიცხვების მასივის გათვალისწინებით, გამოიყენეთ forEach რიცხვების  ჯამის გამოსათვლელად.

// 15.რიცხვების მასივის გათვალისწინებით, გამოიყენეთ every, რათა შეამოწმოთ არის თუ არა ყველა რიცხვი დადებითი.
// რიცხვების მასივის გათვალისწინებით, გამოიყენეთ some, რათა შეამოწმოთ არის თუ არა ზოგიერთი  რიცხვი დადებითი.
