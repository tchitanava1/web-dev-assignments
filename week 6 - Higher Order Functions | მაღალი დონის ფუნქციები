// ### სავარჯიშოები

// 1.რიცხვების მასივის გათვალისწინებით, გამოიყენეთ ფილტრი ახალი მასივის შესაქმნელად, რომელიც შეიცავს მხოლოდ ლუწი რიცხვებს.

// 1
// function onlyEven(arr) {
//   let passed = [];
//   for (let element of arr) {
//     if (element % 2 === 0) {
//       passed.push(element);
//     }
//   }
//   return passed;
// }

// console.log(onlyEven([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// 2
// function onlyEven1(arr, test) {
//   let passed = [];
//   for (let element of arr) {
//     if (test(element)) {
//       passed.push(element);
//     }
//   }
//   return passed;
// }

// console.log(
//   onlyEven1([1, 2, 3, 4, 5, 6, 7, 8], (element) => element % 2 === 0)
// );

// 3
// const evenElements = (array) => array.filter((element) => element % 2 === 0);
// console.log(evenElements([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// 2.მომხმარებლების გაფილტვრა ასაკის მიხედვით: მომხმარებლის ობიექტების მასივის გათვალისწინებით, თვისებების სახელით და ასაკის მიხედვით, გამოიყენეთ ფილტრი 18 წელზე უფროსი ასაკის მომხმარებელთა მასივის შესაქმნელად.
// 1

// function userAgeFilter(array) {
//   const passed = [];
//   for (let user of array) {
//     if (user.age >= 18) {
//       passed.push(user);
//     }
//   }
//   return passed;
// }

// console.log(
  // userAgeFilter([
  //   { name: "ნიკა", age: 20 },
  //   { name: "ნინი", age: 24 },
  //   { name: "ოთო", age: 13 },
  //   { name: "დიანა", age: 25 },
  // ])
// );

// 2

// function filterUserAge(array, test) {
//   let passed = [];
//   for (let user of array) {
//     if (test(user)) {
//       passed.push(user);
//     }
//   }
//   return passed;
// }

// console.log(
//   filterUserAge(
//     [
//       { name: "ნიკა", age: 20 },
//       { name: "ნინი", age: 24 },
//       { name: "ოთო", age: 13 },
//       { name: "დიანა", age: 25 },
//     ],
//     (user) => user.age >= 18
//   )
// );

// 3

// const filterUserAge = (users) => users.filter((user) => user.age >= 18);

// console.log(
//   filterUserAge([
//     { name: "ნიკა", age: 20 },
//     { name: "ნინი", age: 24 },
//     { name: "ოთო", age: 13 },
//     { name: "დიანა", age: 25 },
//   ])
// );
// 3.სტრიქონების გაფილტვრა სიგრძის მიხედვით: სტრიქონების მასივის გათვალისწინებით, გამოიყენეთ ფილტრი მასივის შესაქმნელად, რომელიც შეიცავს მხოლოდ 5 სიმბოლოზე მეტ სტრიქონებს.

// 1
// function stringLength(array) {
//   let passed = [];
//   for (let string of array) {
//     if (string.length > 5) {
//       passed.push(string);
//     }
//   }
//   return passed;
// }

// console.log(
//   stringLength(["ქართული", "მათემატიკა", "ისტორია", "ფიზიკა", "ქიმია"])
// );

// 2
// function stringLength(array, test) {
//   let passed = [];
//   for (let string of array) {
//     if (test(string)) {
//       passed.push(string);
//     }
//   }
//   return passed;
// }

// console.log(
//   stringLength(
//     ["ქართული", "მათემატიკა", "ისტორია", "ფიზიკა", "ქიმია"],
//     (string) => string.length > 5
//   )
// );

// 1

// const filterString = (array) => array.filter((string) => string.length > 5);
// console.log(
//   filterString(["ქართული", "მათემატიკა", "ისტორია", "ფიზიკა", "ქიმია"])
// );
// 4.გააორმაგეთ რიცხვები: მოცემული რიცხვების მასივისთვის, შექმენით ახალი მასივი, სადაც თითოეული რიცხვი გაორმაგდება.
// 1

// function doubleElement(array) {
//   let result = [];
//   for (let element of array) {
//     element = element * 2;
//     result.push(element);
//   }
//   return result;
// }

// console.log(doubleElement([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// 2
// const doubleElement = (array) => array.map((element) => element * 2);
// console.log(doubleElement([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// 3

// function mapDouble(array, transform) {
//   let doubled = [];
//   for (let element of array) {
//     doubled.push(transform(element));
//   }
//   return doubled;
// }

// console.log(mapDouble([1, 2, 3, 4, 5, 6, 7, 8, 9], (element) => element * 2));

// 5.მომხმარებლის ობიექტების მასივის გათვალისწინებით, შექმენით მასივი,სადაც მხოლოდ მომხმარებლის სახელებს დააბრუნებს.

// 1
// function usernames(array) {
//   let result = [];
//   for (let usernames of array) {
//     result.push(usernames.name);
//   }
//   return result;
// }

// console.log(
  // usernames([
  //   { name: "ნიკა", age: 20 },
  //   { name: "ნინი", age: 24 },
  //   { name: "ოთო", age: 13 },
  //   { name: "დიანა", age: 25 },
  // ])
// );

// 2

// function usernames(array, action) {
//   let passed = [];
//   for (let users of array) {
//     passed.push(action(users));
//   }
//   return passed;
// }

// console.log(
//   usernames(
//     [
//       { name: "ნიკა", age: 20 },
//       { name: "ნინი", age: 24 },
//       { name: "ოთო", age: 13 },
//       { name: "დიანა", age: 25 },
//     ],
//     (users) => users.name
//   )
// );

// 3
// const usernames = (array) => array.map((user) => user.name);
// console.log(
//   usernames([
//     { name: "ნიკა", age: 20 },
//     { name: "ნინი", age: 24 },
//     { name: "ოთო", age: 13 },
//     { name: "დიანა", age: 25 },
//   ])
// );

// 6.სტრიქონების მასივის გათვალისწინებით, შევქმნათ ახალი მასივი, სადაც თითოეული სტრიქონი გარდაიქმნება მაღალ რეგისტრში,ანუ დიდ ასოებად..

// function upperCase(array) {
//   let result = [];
//   for (let string of array) {
//     string = string.toUpperCase();
//     result.push(string);
//   }
//   return result;
// }

// console.log(upperCase(["a", "s", "d"]));

// 2
// function upper(array, transform) {
//   let result = [];
//   for (let string of array) {
//     result.push(transform(string));
//   }
//   return result;
// }

// console.log(upper(["a", "s", "d"], (string) => string.toUpperCase()));

// 3
// const upper = (array) => array.map((string) => string.toUpperCase());
// console.log(upper(["a", "s", "d"]));

// 7.იპოვეთ რიცხვების მასივში ყველა რიცხვის ჯამი.ვიყენებთ მაღალი დონის ფუნქციებს.

// const arraySum = (array) => array.reduce((sum, num) => sum + num, 0);
// console.log(arraySum([1, 2, 3]));

// 8.გვაქვს მასივი,სადაც ყრია ადამიანის სახელები,ჩვენი მიზანია შევქმნათ ობიექტი, რომელშიც მითითებული იქნება თუ რამდენჯერ მეორდება მასივში თითოეული სახელი. მაგალითად: \{ "გიო": 2, "საბა": 5, "ნიკა": 3 \}

// function nameCount(names) {
//   let result = {};
//   for (let name of names) {
//     if (result[name]) {
//       result[name]++;
//     } else {
//       result[name] = 1;
//     }
//   }
//   return result;
// }

// console.log(nameCount(["nika", "nika", "nika", "oto", "oto", "oto", "nini"]));

// 2
// function nameCount(names, action) {
//   let result = {};
//   for (let name of names) {
//     result.push(action(name));
//   }
//   return result;
// }

// console.log(
//   nameCount(
//     ["nika", "nika", "nika", "oto", "oto", "oto", "nini"],
//     (sum, name) => {
//       sum[name] = (sum[name] || 0) + 1;
//       return sum;
//     },
//     {}
//   )
// );

// const nameCount = (names) =>
//   names.reduce((sum, name) => {
//     sum[name] = (sum[name] || 0) + 1;
//     return sum;
//   }, {});

// console.log(nameCount(["nika", "nika", "nika", "oto", "oto", "oto", "nini"]));

// ეს თითქოს გავიგე რამდენიმეჯერ გავაკეთე მაგრამ ბოლომდე ვერ ვიგებ მაინც

// // 9.რიცხვების მასივის გათვალისწინებით,დავალაგოთ მასივი ზრდადობით.

// const zrdadobit = (array) => array.sort((a, b) => a - b);
// console.log(zrdadobit([1, 2, 34, 5, -6, -7, -4]));

// 10.რიცხვების მასივის გათვალისწინებით,დავალაგოთ მასივი კლებადობით.

// const klebadobit = (array) => array.sort((a, b) => b - a);
// console.log(klebadobit([1, 2, 34, 5, -6, -7, -4]));

// 11.მომხმარებლების დალაგება სახელების მიხედვით: მომხმარებლის ობიექტების მასივის გათვალისწინებით,დავაბრუნოთ მასივი რომელიც დალაგებული იქნება  ანბანურად მომხმარებლის სახელის მიხედვით.

// const alphabet = (array) => array.sort((a, b) => a.name.localeCompare(b.name));
// console.log(
// alphabet([
//   { name: "ნიკა", age: 20 },
//   { name: "ნინი", age: 24 },
//   { name: "ოთო", age: 23 },
//   { name: "თემო", age: 20 },
// ])
// );
// 12.სტრიქონების მასივის გათვალისწინებით, დავაბრუნოთ მასივი,რომელშიც იქნება ელემენტები ზრდადობით,სტრიქონების სიგრძის  მიხედვით.

// const stringZrd = (array) => array.sort((a, b) => a.length - b.length);

// console.log(stringZrd(["a", "ab", "aaa", "s"]));

// 13.მასივის გათვალისწინებით, გამოიყენეთ forEach თითოეული ელემენტის კონსოლში დასაპრინტად.
// const array1 = ["a", "b", "c"];

// array1.forEach((element) => console.log(element));

// 14.რიცხვების მასივის გათვალისწინებით, გამოიყენეთ forEach რიცხვების  ჯამის გამოსათვლელად.

// const array1 = [1, 2, 3];
// let sum = 0;
// array1.forEach((element) => (sum += element));
// console.log(sum);

// 15.1 რიცხვების მასივის გათვალისწინებით, გამოიყენეთ every, რათა შეამოწმოთ არის თუ არა ყველა რიცხვი დადებითი.
// const isPositive = (element) => element > 0;

// const array1 = [1, 2, 3, 4, 5, 6, 7];

// console.log(array1.every(isPositive));

// 15.2 რიცხვების მასივის გათვალისწინებით, გამოიყენეთ some, რათა შეამოწმოთ არის თუ არა ზოგიერთი  რიცხვი დადებითი.
// const isPositive = (element) => element > 0;

// const array1 = [-1, -2, -3, -4, -5, 6, -7];

// console.log(array1.some(isPositive));

// 16.იურიდიული ასაკის ყველა მომხმარებელი: მომხმარებლის ობიექტების სიმრავლის გათვალისწინებით,  შეამოწმეთ, არის თუ არა ყველა მომხმარებელი 18 წლის ან უფროსი ასაკის.

// const users = [
//   { name: "ნიკა", age: 20 },
//   { name: "ნინი", age: 24 },
//   { name: "ოთო", age: 23 },
//   { name: "თემო", age: 20 },
// ];

// const isAdult = (user) => user.age >= 18;
// console.log(users.every(isAdult));

// 17.სტრიქონების მასივის გათვალისწინებით, შეამოწმეთ,არის თუ არა ყველა სტრიქონი ცარიელი.

// const array1 = ["2", "1", ""];

// const isEmpty = (string) => string === "";

// console.log(array1.every(isEmpty));

// 18.ზოგიერთი რიცხვი კენტია: რიცხვების მასივის გათვალისწინებით,  შეამოწმეთ არის თუ არა კენტი რიცხვები.

// const numbers = [4, 2, 6, 4, 8, 7, 10];
// const isOdd = (element) => element % 2 !== 0;
// console.log(numbers.some(isOdd));

// 19.ზოგიერთი მომხმარებელი ასაკობრივ ზღვარს ქვემოთ: მომხმარებლის ობიექტების სიმრავლის გათვალისწინებით, გამოიყენეთ some, რომ შეამოწმოთ არის თუ არა 18 წლამდე ასაკის მომხმარებლები.
// const users = [
//   { name: "ნიკა", age: 20 },
//   { name: "ნინი", age: 24 },
//   { name: "ოთო", age: 2 },
//   { name: "თემო", age: 20 },
// ];

// const isMinor = (user) => user.age < 18;
// console.log(users.some(isMinor));

// 20.დაწერეთ ფუნქცია სახელწოდებით capitalizeWords, რომელიც იღებს წინადადებას (სტრიქონს) არგუმენტად და აბრუნებს ახალ წინადადებას, სადაც თითოეული სიტყვის პირველი ასო დიდია.
// function capitalizeWords(string) {
//   const string1 = string.split(" ");
//   for (let i = 0; i < string1.length; i++) {
//     string1[i] = string1[i].charAt(0).toUpperCase() + string1[i].slice(1);
//   }
//   const string2 = string1.join(" ");
//   return string2;
// }
// console.log(capitalizeWords("adandali dandali chemi okros shandali"));

// 2
// const capitalizeWords = (string) =>
//   string
//     .split(" ")
//     .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//     .join(" ");

// console.log(capitalizeWords("adandali dandali chemi okros shandali"));

// 21.დაწერეთ ფუნქცია, რომელიც მიიღებს ობიექტების მასივს და თვისების სახელს და აბრუნებს ამ თვისების უნიკალური მნიშვნელობების მასივს ყველა ობიექტიდან.
// const users = [
//   { name: "ნიკა", age: 20 },
//   { name: "ნინი", age: 24 },
//   { name: "ნინი", age: 24 },
//   { name: "ოთო", age: 2 },
//   { name: "თემო", age: 20 },
// ];

// const uniqueFun = (users) => users.filter((a, b) => a.name !== b.name);
// console.log(uniqueFun(users));

// function unique(users) {
//   let unique = [];
//   for (let i = 0; i < users.length; i++) {
//     if (users[i].name !== users[i].name) {
//       unique.push(users[i]);
//     }
//   }
//   return unique;
// }

// console.log(
//   unique([
//     { name: "ნიკა", age: 20 },
//     { name: "ნინი", age: 24 },
//     { name: "ნინი", age: 24 },
//     { name: "ოთო", age: 2 },
//     { name: "თემო", age: 20 },
//   ])
// );  ამ ამოცანაზეც მჭირდება მითითებები არ გამომდის

// const uniqueFun = (users) => new Set(users.map((users) => users.name));
// console.log(
//   uniqueFun([
//     { name: "ნიკა", age: 20 },
//     { name: "ნინი", age: 24 },
//     { name: "ნინი", age: 24 },
//     { name: "ოთო", age: 2 },
//     { name: "თემო", age: 20 },
//   ])
// );

// 2
// function unique(array, property) {
//   let result = [];
//   for (let users of array) {
//     if (!result.includes(users[property])) {
//       result.push(users[property]);
//     }
//   }
//   return result;
// }

// console.log(
//   unique(
//     [
//       { name: "ნიკა", age: 20 },
//       { name: "ნინი", age: 24 },
//       { name: "ნინი", age: 24 },
//       { name: "ოთო", age: 2 },
//       { name: "თემო", age: 20 },
//     ],
//     "name"
//   )
// );

//ვსო გავიგე მაგრამ წინა არასწორი ამოცანები დავტოვე მაინც
// 22.დაწერეთ ფუნქცია, რომელიც იღებს სტრიქონს შეყვანად და აბრუნებს ჭეშმარიტს, თუ ის არის პანგრამა (შეიცავს ანბანის ყველა ასოს ერთხელ მაინც), ცრუ სხვა შემთხვევაში.

// function isPangram(string) {
//   const unique = new Set(string);
//   return unique.size === 26;
// }

// console.log(isPangram("abcdefghijklmnopqrstuvwxyzzzzz"));

// 2
// const unique = (isPangram) => {
//   const unique = new Set(isPangram);
//   return unique.size === 26;
// };

// console.log(unique("abcdefghijklmnopqrstuvwxyzzzzz"));

// 3
// function alph(string) {
//   const alphabet = "abcdefghijklmnopqrstuvwxyz";
//   const lower = string.toLowerCase();
//   for (let i of alphabet) {
//     if (!lower.includes(i)) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(alph("abcdefghijklmnopqrstuvwxyzzzzz"));

// 23.დაწერეთ ფუნქცია, რომელიც მიიღებს წინადადებას შეყვანად და აბრუნებს უნიკალური სიტყვების მასივს ანბანური თანმიმდევრობით, გამოკლებით გავრცელებული ინგლისური სიტყვების, როგორიცაა "the", "a" და "is".

// function unique(string) {
//   let arr = [];
//   const string1 = string.split(" ");
//   const string2 = new Set(string1);
//   for (let element of string2) {
//     if (element !== "the" && element !== "a" && element !== "is") {
//       arr.push(element);
//     }
//   }
//   return arr.sort((a, b) => a.localeCompare(b));
// }

// console.log(unique("the is a adandali adandali dandali blabla zzzz wow"));

// 4
// const unique = (string) =>
//   string
//     .split(" ")
//     .filter(
//       (element) => element !== "the" && element !== "a" && element !== "is"
//     )
//     .sort((a, b) => a.localeCompare(b))
//     .join(" ");
// console.log(unique("the is a adandali adandali dandali blabla zzzz wow"));

// 24.დაწერეთ პროგრამა, რომ ამოიღოთ ყველა ცრუ მნიშვნელობა მასივიდან.

// const array = [0, "", undefined, null, NaN, false, 123, "ლალალალალალ", true];

// const removeFalse = (array) => array.filter(Boolean);
// console.log(removeFalse(array));

// const removeFalse = (array) => array.filter((element) => element);
// console.log(removeFalse(array));
// 25.დაწერეთ პროგრამა წინადადებაში სიტყვების თანმიმდევრობის შესაბრუნებლად

// let string = "ashmalaxa lalala";

// const reversed = string.split(" ").reverse().join(" ");
// console.log(reversed);

// const array = [1, 2, 3, 4, 5];

// const sumarray = (array) =>
//   array.reduce((sum, num) => {
//     if (num % 2 === 0) {
//       sum = sum + num;
//     }
//     return sum;
//   }, 0);

// console.log(sumarray(array));
