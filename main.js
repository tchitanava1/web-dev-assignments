// 1. დაწერეთ პროგრამა, რომ იპოვოთ მასივის ყველა რიცხვის ჯამი.

// let arr = [1, 2, 3, 4, 5];
// sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum = sum + arr[i];
// }
// console.log(sum);

// 2. დაწერეთ პროგრამა მასივში რიცხვების საშუალოს საპოვნელად.

// let arr = [1, 2, 3, 4, 5];
// sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum = sum + arr[i];
//   average = sum / arr.length;
// }
// console.log(average);

// 3. დაწერეთ პროგრამა რიცხვების მასივის ზრდის მიხედვით დასალაგებლად.
// let arr = [2, 5, 1, -1, -300, 30];
// const sorted = (a, b) => a - b;
// arr.sort(sorted);
// console.log(arr);
// 4. დაწერეთ პროგრამა მასივში ყველაზე დიდი ელემენტის მოსაძებნად.

// let arr = [1, 2, 3, 4, 51, -27, 0, 100];
// console.log(Math.max(...arr)

// function arrayMax(arr) {
//   let max = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }
// console.log(arrayMax([1, 2, 3, 4, 51, -27, 0, 100]));

// 5. დაწერეთ პროგრამა მასივის ყველაზე პატარა ელემენტის მოსაძებნად.

// let arr = [1, 2, 3, 4, 5, -1];
// console.log(Math.min(...arr));

// function arrayMin(arr) {
//   let min = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < min) {
//       min = arr[i];
//     }
//   }
//   return min;
// }

// console.log(arrayMin([8, 2, 6, 200000, 627, 0, -2]));

// 6. დაწერეთ პროგრამა, რათა შეამოწმოთ, შეიცავს თუ არა მასივი კონკრეტულ ელემენტს.

// let arr = [1, 2, 3, 4, 6];
// console.log(arr.includes(1));

// function konk(arr, n) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === n) {
//       return true;
//     }
//   }
//   return false;
// }

// console.log(konk([1, 3, 4], 4));
// 7. დაწერეთ პროგრამა მასივიდან ელემენტის ამოსაღებად.
// let arr = [1, 2, 3, 4, 6];
// delete arr[3];
// arr.splice(2, 1);
// console.log(arr);

// function arrayDelete(arr, x) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== x) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }

// console.log(arrayDelete([1, 2, 3, 4, "blablabla"], "blablabla"));

// 8. დაწერეთ პროგრამა მასივში კონკრეტული ელემენტის გავრცელების რაოდენობის დასათვლელად.
// let arr = [1, "blabla", 2, 6, "blabla", 3, 4, 6, 3, 5, 6];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === "blabla") {
//     sum++;
//   }
// }
// console.log(sum);
// 9. დაწერეთ პროგრამა, რომ იპოვოთ მასივის ყველა ლუწი რიცხვის ჯამი.
// let arr = [1, 2, 3, 4, 5];
// sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 !== 0) {
//     continue;
//   }
//   sum = sum + arr[i];
// }
// console.log(sum);
// 10. დაწერეთ პროგრამა მასივში სიდიდით მეორე რიცხვის მოსაძებნად.

// let arr = [1, 2, 7, 3, 4, 5];
// const sorted = (a, b) => a - b;
// arr.sort(sorted);
// console.log(arr[arr.length - 2]);

// 11. დაწერეთ პროგრამა, რათა შეამოწმოთ არის თუ არა ორი მასივი ტოლი.
// function arrays(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   } else {
//     for (let i = 0; i < arr1.length; i++) {
//       if (arr1[i] !== arr2[i]) {
//         return false;
//       }
//     }
//   }
//   return true;
// }

// let array1 = [1, 2, 3, 5];
// let array2 = [1, 2, 3];

// console.log(arrays(array1, array2));

// 12. დაწერეთ პროგრამა რომ ორი სორტირებული მასივის შერთდეს და გახდეს ერთი მასივი რომელიც ასევე სორტირებული იქნება.
// let arr = [1, 2, 7, 3, 4, 5];
// let arr1 = [-1, 2, -7, 3, -4, 500];

// const sorted = (a, b) => a - b;

// let arr2 = arr.concat(arr1);
// arr2.sort(sorted);
// console.log(arr2);

// 13. დაწერეთ პროგრამა სტრიქონების მასივის ანბანის მიხედვით დასალაგებლად.
// let arr = ["ba", "de", "cv", "fk", "ea", "as"];
// arr.sort();
// console.log(arr);
// 14. დაწერეთ პროგრამა მრავალ მასივებს შორის საერთო ელემენტების მოსაძებნად.

// function arrays(arr1, arr2, arr3) {
//   let common = [];
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr2.includes(arr1[i]) && arr3.includes(arr1[i])) {
//       common.push(arr1[i]);
//     }
//   }
//   return common;
// }
// console.log(arrays([-1, 2, 3, 5, 56], [1, 2, 3, -1, 56], [-1, 9, 7, 56]));

// 15. შექმენით ობიექტი სახელწოდებით car თვისებებით მარკის, მოდელისა და წლისთვის. დაბეჭდეთ ობიექტი კონსოლზე.

// let car = {
//   brand: "toyota",
//   model: "corolla",
//   year: 2020,
// };

// console.log(car);

// 16. დაამატეთ მეთოდი car ობიექტს სახელწოდებით start, რომელიც ბეჭდავს "The car is starting!" როდესაც გამოძახება. გამოიძახეთ დაწყების მეთოდი.

// let car = {
//   brand: "toyota",
//   model: "corolla",
//   year: 2020,
// };

// car.start = function () {
//   console.log("The car is starting!");
// };

// car.start();

// 17. შექმენით სხვა ობიექტი სახელად Person სახელის, ასაკისა და ქალაქის თვისებებით. დაბეჭდეთ სახელის თვისება წერტილის გამოყენებით.

// let person = {
//   name: "dazmiri",
//   age: "56",
//   city: "paris",
// };
// console.log(person.name);
// person.job = "stripper";
// console.log(person);
// 18. დაამატეთ ახალი თვისება სახელწოდებით job, Person ობიექტს და მიანიჭეთ მას მნიშვნელობა. დაბეჭდეთ განახლებული ობიექტი.
