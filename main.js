// 1. დაწერეთ ფუქნცია, სახელად sayHello, რომელიც დაპრინტავს - "Hello, World".

// function sayHello() {
//   console.log("hello world");
// }
// sayHello();
// 2. დაწერეთ ფუნქცია, სახელად greet, რომელიც პარამეტრა მიიღებს სახელს და დაპრინტავს - "გამარჯობა, [სახელი]"
/*

function greet() {
    let name = prompt("what's your name? ");
    return name;
}
console.log("hello, " + greet())
*/

// 3. დაწერეთ ფუნქცია, სახელად sum, რომელიც არგუმენტებად მიიღებს ორ რიცხვს და დააბრუნებს მათ ჯამს. შედეგი გამოიტანეთ ტერმინალში.
/*
function sum() {
  let x = 5;
  let y = 20;
  sum = x + y;
  return sum;
}
console.log(sum());
*/
// 4. დაწერეთ ფუნქცია, სახელად calculateArea, რომელიც არგუმენტად მიიღებს ოთხკუთხედის სიგრესა და სიგანეს და დააბრუნებს მის ფართობს. შედეგი გამოიტანეთ ტერმინალში.

/*
function calculateArea() {
    let a = Number(prompt("სიგრძე: "));
    let b = Number(prompt("სიგანე: "));
    area = a * b;
    return area;
}
console.log(calculateArea());
*/
// 5. დაწერეთ ფუნქცია, რომელიც მიიღებს ორ არგუმენტს და დააბრუნებს მათ შორის უდიდესს. გამოიყენეთ სამივე - Function Declaration, Function Expression, Arrow Function.

/*
let x = Number(prompt("enter the first number: "));
let y = Number(prompt("enter the second number: "));
function greater(x, y) {
  if (x > y) {
    console.log(x);
  } else if (x === y) {
    console.log("equal");
  } else {
    console.log(y);
  }
  return;
}
greater(x, y);
*/

/*
let x = Number(prompt("enter the first number: "));
let y = Number(prompt("enter the second number: "));
const greater = function (x, y) {
  if (x > y) {
    console.log(x);
  } else if (x === y) {
    console.log("equal");
  } else {
    console.log(y);
  }
  return;
};
greater(x, y);
*/

/*
const greater = (x, y) => {
  if (x > y) {
    console.log(x);
  } else if (x === y) {
    console.log("equal");
  } else {
    console.log(y);
  }
  return;
};

greater(10, -1);

*/
// 6. დაწერეთ ფუქნცია, რომელიც პარამეტრად მიიღებს იმ რაოდენობას, რამდენჯერად უნდა გამოკონსოლდეს "Hello, World".

/*
function hello(x) {
  for (i = 0; i < x; i++) {
    console.log("hello, world");
  }
  return;
}
hello(5)
*/
// 7. დაწერეთ ფუქნცია, სახელად celsiusToFahrenheit, რომელიც პარამეტრად მიიღებს ცელსიუსს და გადაიყვანს ფარენჰეიტში. ფორმულა - (Celsius \* 9/5) + 32

/*
const celsiusToFahrenheit = (x) => {
  return (x * 9) / 5 + 32;
};
console.log(celsiusToFahrenheit(5));
*/
// 8. დაწერეთ ფუნქცია სახელად sumDigits, რომელიც არგუმენტად იღებს რიცხვს და აბრუნებს მისი ციფრების ჯამს.
// function sumDigits(x) {
//   let sum = 0;
//   x = Math.abs(x);
//   while (x > 0) {
//     let remiander = x % 10;
//     x = Math.floor(x / 10);
//     sum += remiander;
//   }
//   return sum;
// }
// console.log(sumDigits(-1234));
// 9. დაწერეთ ფუნქცია სახელად countBs, რომელიც იღებს სტრიქონს თავის ერთადერთ არგუმენტად და აბრუნებს სტრიქონში დიდი "B" სიმბოლოების რაოდენობას.

// function countBs(string) {
//   let sum = 0;
//   while (string.includes("B")) {
//     sum++;
//     string = string.replace("B", "");
//   }
//   return sum;
// }
// console.log(countBs("aBbbBBBBBBBBc"));

// function countBs(str) {
//   let sum = 0;
//   i = 0;
//   while (i < str.length) {
//     i++;
//     if (str[i] === "B") {
//       sum++;
//     }
//   }
//   return sum;
// }
// console.log(countBs("aBBb"));

// 10. დაწერეთ ფუნქცია, რომელიც მიიღებს ორ პარამეტრს და დააჯამებს ყველა რიცხვს გარკვეულ შუალედში. მაგალითად შეკრიბავს რიცხვებს 5-დან 100-მდე.

// function sum(x, y) {
//   sum = 0;
//   for (i = x; i < y; i++) {
//     sum = sum + i;
//   }
//   return sum;
// }

// console.log(sum(-3, 4));
// 11. დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს სტრინგს და დააბრუნებს true-ს თუ სტრინგი არის პალინდრომი (თავიდან და ბოლოდან იგივენარიად იწერება) და false-ს თუ არაა პალინდრომი.

// const palindrom = function (str) {
//   let reversed = "";
//   let i = str.length - 1;
//   while (i >= 0) {
//     reversed += str[i];
//     i--;
//   }
//   if (str === reversed) {
//     console.log("true");
//   } else {
//     console.log("false");
//   }

//   return;
// };

// palindrom("ajka");
