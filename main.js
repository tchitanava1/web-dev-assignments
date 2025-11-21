// ### დავალებები:

// ### პროექტი 10 - ქულების გამომთვლელი
// შექმენით მარტივი JavaScript პროგრამა, რომელიც ითვლის შეფასებას მოსწავლის ქულების მიხედვით.
// შეფასების სქემა შემდეგნაირია:
// A: 90-100
// B: 80-89
// C: 70-79
// D: 60-69
// F: 0-59
// * პროგრამამ უნდა მოსთხოვოს მომხმარებელს შეიყვანოს რიცხვითი ქულა(0-დან 100-ის ჩათვლით ნებისმიერი რიცხვი).
// * გამოიყენეთ პირობითი ოპერატორები შეყვანილი რიცხვის შეფასების დასადგენად.
// * ეკრანზე გამოიტანეთ როგორც შეყვანილი რიცხვი ასევე შესაბამისი ასო.

// მაგალითად:
// ```shell
// > Enter the student's score: 78
// > Student's Score: 78
// > Grade: C
// ```

// let score = prompt("შეიყვანეთ თქვენი ქულა: ");

// function scoreGrade(score) {
//   score = Number(score);
//   let grade;

//   if (score > 100 || score < 0) {
//     grade = "wrong input";
//     score = "wrong input";
//   } else if (score >= 90 && score <= 100) {
//     grade = "A";
//   } else if (score >= 80 && score <= 89) {
//     grade = "B";
//   } else if (score >= 70 && score <= 79) {
//     grade = "C";
//   } else if (score >= 60 && score <= 69) {
//     grade = "D";
//   } else {
//     grade = "F";
//   }
//   console.log(`შეყვანილი ქულა: ${score}, შეფასება: ${grade}`);
// }

// scoreGrade(score);

// ### პროექტი 11 - Simple Math - მარტივი მათემატიკა
// თქვენ ხშირად დაწერთ პროგრამებს, რომლებიც ეხება რიცხვებს. ხშირად, პროგრამაში მიღებული მონაცემები (input )რიცხვით მონაცემების ტიპებად უნდა გარდაქმნათ. დაწერეთ პროგრამა, რომელიც მოგთხოვთ ორ რიცხვს. ამობეჭდეთ ამ რიცხვების ჯამი, სხვაობა, ნამრავლი და განაყოფი.

// მაგალითად:
// ```shell
// > What is the first number? 10
// > What is the second number? 5
// > 10 + 5 = 15
// > 10 - 5 = 5
// > 10 * 5 = 50
// > 10 / 5 = 2
// ```

// let a = prompt("შეიყვანეთ პირველი რიცხვი: ");
// let b = prompt("შეიყვანეთ მეორე რიცხვი: ");
// function simpleMath(a, b) {
//   a = Number(a);
//   b = Number(b);

//   let sum = a + b;
//   let difference = a - b;
//   let product = a * b;
//   let quotient = a / b;

//   console.log(`${a} + ${b} = ${sum},  \n${a} - ${b} = ${difference}, \n${a} * ${b} = ${product}, \n${a} / ${b} = ${quotient}.`)
// }

// simpleMath(a, b);

// ### პროექტი 12 - Einstein - აინშტაინი
// შეიძლება გსმენიათ, რომ E = mc2, სადაც E წარმოადგენს ენერგიას (იზომება ჯოულებში), M წარმოადგენს მასას (იზომება კილოგრამებში), ხოლო C - სინათლის სიჩქარეს (დაახლოებით 300000000 მეტრი წამში). ეს ალბერტ აინშტაინის ფორმულაა, რაც არსებითად ნიშნავს, რომ მასა და ენერგია ეკვივალენტურია.

// შექმენით პროგრამა, რომელიც მომხმარებლისგან მასის კილოგრამებში შეყვანას მოითხოვს და დაბეჭდავს ამ მასის ეკვივალენტურ რაოდენობას ჯოულში. ეს ორივე რიცხვი უნდა იყოს მთელი (integer).

// მაგალითად:
// ```shell
// > M: 50
// > E: 4500000000000000000
// ```
// * მომხმარებლებისგან მიღებული მნიშვნელობა იქნება სტრიქონის (string) ტიპის. მათემატიკურ გამოთვლებამდე ეს მნიშვნელობები რიცხვებად უნდა გადააქციოთ.
// * შემომავალი (input) და გამომავალი (output) მონაცემები კონვერტაციებისა და სხვა კალკულაციებისგან განცალკევებით უნდა გქონდეთ.

// let massInput = prompt("შეიყვანეთ მასა კილოგრამებში:");
// let mass = Number(massInput);
// const speedOfLight = 300000000;
// let energy = mass * speedOfLight ** 2;
// console.log(`M: ${mass}`);
// console.log(`E: ${energy}`);

// ### პროექტი 13 - Tip Calculator - "ჩაის" კალკულატორი
// ჩვეულებრივ, რესტორანში სადილის შემდეგ სერვისისთვის "ჩაის" ტოვებენ, როგორც წესი, შეერთებულ შტატებში ეს თანხა კვების ღირებულების 15%-ს ან მეტს აღწევს. შექმენით პროგრამა, რომელიც მოითხოვს თანხისა და პროცენტის შეყვანას და გეტყვით, რამდენი დოლარი უნდა დატოვოთ "ჩაის" სახით.

// ასევე, პროგრამაში უნდა გქონდეთ ორი ფუნქცია:

// ერთი input-ად მიიღებს სტრიქონს (დაფორმატებულს, როგორც $##.##), თავში შლის $ ნიშანს და აბრუნებს თანხას ათწილადის სახით. მაგალითად, 50.00 დოლარის შემთხვევაში მან უნდა დააბრუნოს 50.0

// მეორე ფუნქცია input-ად მიიღებს ასევე სტრიქონს (დაფორმატებულს, როგორც ##%), ბოლოში შლის % ნიშანს და აბრუნებს პროცენტს ათწილადის სახით. მაგალითად, თუ input 15%-ია, ფუქცია 0.15-ს დააბრუნებს.

// მაგალითად:
// ```shell
// > How much was the meal? $50.00
// > What percentage would you like to tip? 15%
// > Leave $7.50
// ```

// let cost = prompt("How much was the meal? ")

// function dToFLoat(cost){
// cost = parseFloat(cost.replace("$", ""));
// return cost;
// }

// let perc = prompt("what percentage would you like to tip? ")
// function percToFloat(perc){
// perc = parseFloat(perc.replace("%", "")) / 100;
// return perc;
// }

// let mealCost = dToFLoat(cost);
// let tipPercent = percToFloat(perc);

// let tip = mealCost * tipPercent;
// tip = "$" + tip.toFixed(2);
// console.log(`leave ${tip}`);

// ### პროექტი 14 - Retirement Calculator - საპენსიო კალკულატორი
// თქვენმა კომპიუტერმა იცის, რომელია მიმდინარე წელი, ამიტომ ეს ინფორმაცია თქვენს პროგრამებში შეგიძლიათ, ჩართოთ. უბრალოდ, უნდა გაარკვიოთ, როგორ შეუძლია თქვენს პროგრამირების ენას ამ მონაცემის თქვენთვის მოწოდება.

// შექმენით პროგრამა, რომელიც მოითხოვს თქვენი ამჟამინდელი ასაკისა და იმ ასაკის შეყვანას, როცა გსურთ, პენსიაზე გახვიდეთ; შემდეგ კი განსაზღვრავს, რამდენი წელი დაგრჩათ პენსიაზე გასვლამდე და კონკრეტულად რომელ წელს შეგიძლიათ ამის გაკეთება.

// მაგალითად:
// ```shell
// > What is your current age? 25
// > At what age would you like to retire? 65
// > You have 40 years left until you can retire.
// > It's 2015, so you can retire in 2055.
// ```

// * კიდევ ერთხელ, კალკულაციებამდე დარწმუნდით, რომ მონაცემები რიცხვით ტიპებში გქონდეთ
// * თქვენს პროგრამაში მიმდინარე წელი ხელით არ ჩაწეროთ. ის თქვენი პროგრამირების ენის საშუალებით, სისტემური დროიდან უნდა მიიღოთ.

// let age = Number(prompt("What is your current age? "));
// let retAge = Number(prompt("At what age would you like to retire? "));

// function retCalc(age, retAge) {
//   const cYear = new Date().getFullYear();
//   const calcYear = Number(retAge - age);
//   const retYear = Number(cYear + calcYear);
//   console.log(`You have ${calcYear} years left until you can retire.`);
//   console.log(`It's ${cYear}, so you can retire  in ${retYear}.`);
// }

// retCalc(age, retAge);

// ### პროექტი 15 - Area of a Rectangular Room - მართკუთხა ოთახის ფართობი
// გლობალურ გარემოში მუშაობისას, თქვენ მოგიწევთ ინფორმაციის წარდგენა როგორც მეტრულ, ასევე იმპერიულ საზომ ერთეულებში.

// შექმენით პროგრამა, რომელიც ითვლის ოთახის ფართობს. შესთავაზეთ მომხმარებელს ოთახის სიგრძე და სიგანე ფუტებში. შემდეგ აჩვენეთ ტერიტორია როგორც კვადრატულ ფუტში, ასევე - კვადრატულ მეტრში.

// მაგალითად:
// ```shell
// > What is the length of the room in feet? 15
// > What is the width of the room in feet? 20
// > You entered dimensions of 15 feet by 20 feet.
// > The area is
// > 300 square feet
// > 27.871 square meters
// ```

// * კონვერტაციის ფორმულაა: m2 = f2 × 0.09290304

// let length = Number(prompt("What is the length of the room in feet? "));
// let width = Number(prompt("What is the width of the room in feet? "));

// function area(length, width) {
//   console.log(`You entered dimensions of ${length} feet by ${width} feet.`);
//   const area = length * width;
//   console.log(`The area is ${area} square feet`);
//   const f2 = Number(area * 0.09290304);
//   console.log(`${f2} square meters`);
// }

// area(length, width);

// ### პროექტი 16 - Pizza Party - პიცის წვეულება
// გაყოფა ყოველთვის ზუსტი არ არის და ზოგჯერ ისეთი პროგრამები უნდა დავწეროთ, რომლებშიც ათწილადების ნაცვლად ნაშთი მთელ რიცხვში უნდა გადავაქციოთ. დაწერეთ პროგრამა პიცების თანაბრად გასაყოფად. პროგრამამ input-ებად უნდა მოგთხოვოთ ხალხის რაოდენობა, პიცების რაოდენობა და თითო პიცაზე - ნაჭრების რაოდენობა. ნაჭრების რაოდენობა თანაბარი უნდა იყოს. აჩვენეთ პიცის ნაჭრების რაოდენობა, რომელიც თითოეულმა ადამიანმა უნდა შეჭამოს. თუ ნარჩენები რჩება, დაბეჭდეთ დარჩენილი ნაჭრების რაოდენობა.

// მაგალითად:
// ```shell
// > How many people? 8
// > How many pizzas do you have? 2
// > 8 people with 2 pizzas
// > Each person gets 2 pieces of pizza.
// > There are 0 leftover pieces.
// ```

// * დარწმუნდით, რომ input-ები რიცხვით ტიპებში იყოს.
// * დაამატეთ პროგრამას ფუნქციონალი, რომლითაც output-ში პროგრამა სწორად მართავს მხოლობით და მრავლობით რიცხვს, მაგალითად:
// ```shell
// > Each person gets 2 pieces of pizza.
// > Each person gets 1 piece of pizza.
// ```

// 1.რამდენი ადამიანია
// 2.რამდენი პიცაა
// 3.რამდენი ნაჭერია
// 4.თითოს რამდენი ხვდება
// 5.რამდენი რჩება

// let people = Number(prompt("how many people? "));
// let pizzas = Number(prompt("how many pizzas do you have? "));
// let slices = Number(prompt("How many slices per pizza? "));

// function pizzaParty(people, pizzas, slices){
//     console.log(`${people} people with ${pizzas} pizzas`);
//     slices = slices * pizzas;
//     let left = slices % people;
//     let each = (slices - left) / people;
//     10
//     if (each > 1 || each === 0){
//         console.log(`Each person gets ${each} pieces of pizza.`)
//     } else if (each < 0){
//         console.log("wrong input")
//     } else {
//         console.log(`Each person gets ${each} piece of pizza.`)
//     }

//     if (left > 1 || left === 0){
//         console.log(`There are ${left} leftover pieces`)
//     } else if (left < 0){
//         console.log("wrong input")
//     } else {
//         console.log(`There is ${left} leftover piece`)
//     }
// }

// pizzaParty(people, pizzas, slices)

// ### პროექტი 17 - Grocery List - სასურსათო სია

// დავუშვათ, რომ თქვენ სურსათის ყიდვამდე ყოველთვის ადგენთ საჭირო ნივთების სიას.

// დაწერეთ პროგრამა, რომელიც მოუწოდებს მომხმარებელს, შეიყვანოს თითო ნივთი ახალ სტრიქონზე, მანამ, სანამ მომხმარებელი არ დააჭერს "-"-ს. შემდეგ გამოიტანეთ მომხმარებლის სასურსათო სია - დიდი ასოებით, დალაგებული ანბანურად ერთეულის მიხედვით, თითოეულს კი წინ უნდა უძღვოდეს რიცხვი, თუ რამდენჯერ ჩაწერა მომხმარებელმა ეს ნივთი. ნივთების გამრავლება საჭირო არ არის. input-ების  შემთხვევაში, მნიშვნელობა არ აქვს ასოების რეგისტრს.

// მაგალითად:

// ```shell
// < apple
// < banana
// < banana
// < ice cream

// < 1 APPLE
// < 2 BANANA
// < 1 ICE CREAM

// < lettuce
// < tomato
// < tomato
// < carrot
// < tomato

// < 1 CARROT
// < 1 LETTUCE
// < 3 TOMATO
// ```

// ### პროექტი 18 - Adieu, adieu - მშვიდობით, მშვიდობით

// https://www.youtube.com/embed/Qy9_lfjQopU?si=RA6_z9ATk5q18LHS

// The Sound of Music-ში არის სიმღერა, რომელიც ძირითადად ინგლისურადაა შესრულებული, So Long, Farewell - ამ ტექსტით, სადაც "adieu" ფრანგულად ნიშნავს "მშვიდობით":

// Adieu, adieu, to yieu and yieu and yieu

// რა თქმა უნდა, ტექსტი გრამატიკულად სწორი არ არის, რადგან ის ჩვეულებრივ დაიწერება მძიმეებით, როგორც:

// არც "yieu"-ა სიტყვა - ის უბრალოდ, "you"-სთან ირითმება!

// შექმენით პროგრამა, რომელიც სთხოვს მომხმარებელს სახელებს, თითოს თითო ხაზზე, სანამ მომხმარებელი არ დაწერს ტირეს(-). დაუშვით, რომ მომხმარებელი ჩაწერს მინიმუმ ერთ სახელს. შემდეგ "დაემშვიდობეთ" ამ სახელებს, გამოჰყავით ორი სახელი ერთი, ხოლო სამი სახელი - ორი მძიმით და ერთი "და"' კავშირით, როგორც ქვემოთაა მითითებული:

// Adieu, adieu, to Liesl
// Adieu, adieu, to Liesl and Friedrich
// Adieu, adieu, to Liesl, Friedrich, and Louisa
// Adieu, adieu, to Liesl, Friedrich, Louisa, and Kurt
// Adieu, adieu, to Liesl, Friedrich, Louisa, Kurt, and Brigitta
// Adieu, adieu, to Liesl, Friedrich, Louisa, Kurt, Brigitta, and Marta
// Adieu, adieu, to Liesl, Friedrich, Louisa, Kurt, Brigitta, Marta, and Gretl
