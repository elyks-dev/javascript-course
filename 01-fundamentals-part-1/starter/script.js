// // JavaScript Fundamentals - Part 1
// // We'll write our code here!

// let js = "amazing";
// console.log(40 + 8 + 23 -10);
// console.log("GUMANA KA");

// console.log("=== VARIABLES ===");

// let firstName = "Jonas";
// console.log(firstName);

// let age = 30;
// console.log(age);
// age = 20;
// console.log(age);

// const birthYear = 2005;
// console.log(birthYear);

// const PI = 3.1415;
// console.log(PI);

// var job = "programmer";
// job = "teacher";
// console.log(job);

// age = 51;

// let lastName = "Doe";

// // do not do this
// // let 3years = 3;
// // let kyle&stephen = "ks";

// console.log("=== DATA TYPES ===");

// // Number
// age = 24;
// console.log(age);
// console.log(typeof age);

// // String
// let username = "elyks";
// console.log(username);
// console.log(typeof username);

// // Boolean
// let javascriptIsFun = true;
// console.log(javascriptIsFun);
// console.log(typeof javascriptIsFun);

// // Undefined
// let year;
// console.log(year);
// console.log(typeof year);

// // Dynamic Variable
// let dynamicVariable = 23;
// console.log(dynamicVariable, typeof dynamicVariable);

// // Change into String
// dynamicVariable = "Now I'm a String";
// console.log(dynamicVariable, typeof dynamicVariable);

// //Change into a Boolean
// dynamicVariable = true;
// console.log(dynamicVariable, typeof dynamicVariable);

// 2nd part

// //////
// // Basic Operators - Math Operators
// console.log("=== MATH OPERATORTS ===");

// const now = 2037;
// const ageJonas = now - 1980;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

// console.log("MATH OPERATIONS");
// console.log("Addition:", 20 + 8);
// console.log("Substraction:", 20 - 8);
// console.log("Multiplication", 20 * 8);
// console.log("Division:", 20 / 8);
// console.log("Exponentiation:", 20 ** 8);

// // Math with strings!
// const firstName = "Kyle";
// const lastName = "Alonzo";
// console.log(firstName + " " + lastName);

// console.log("Hello" + "World" + "!");
// console.log("I am " + 20 + " years old");


// //////
// console.log("[=== ASSIGNMENT OPERATORS ===");

// let x = 10 + 15;
// console.log("x starts as:", x );

// x += 10;
// console.log("x starts as:", x);

// x *= 10;
// console.log("x starts as:", x);

// x /= 2;
// console.log("x starts as:", x);

// x++;
// console.log("x starts as:", x);

// x --;
// console.log("x starts as:", x);


// //////
// console.log("=== COMPARISON OPERATORS ===");

// console.log("Age comparison");
// console.log(ageJonas > ageSarah);
// console.log(ageSarah >= 18);
// console.log(ageJonas < 30);

// console.log("Number comparisons");
// console.log(25 > 20);
// console.log(15 < 10);
// console.log(15 <= 10);
// console.log(15 >= 10);

// const isFullAge = ageSarah >= 18;
// console.log("Sarah is adult:", isFullAge);

// console.log("Complex comparison");
// console.log(now - 1991 > now - 2018);

// let z, y;
// z = y = 25 - 10 - 5;
// console.log(x, y);

// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, averageAge);

// ////////////////////////////////////
// // Coding Challenge #1 - BMI Calculator

// // Test Data 1
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// // Your code here:
// // 1. Calculate BMIs
// let markBMI = (massMark / heightMark ** 2);
// let johnBMI = (massJohn / heightJohn ** 2);
// // 2. Create markHigherBMI variable
// const markHigherBMI = markBMI > johnBMI;
// // 3. Log results to console
// console.log("Mark's BMI is: ", markBMI);
// console.log("John's BMI is: ", johnBMI);

// console.log("Mark has higher BMI:", markHigherBMI);

// 3rd part

////////////////////////////////////
// Strings and Template Literals
const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas =
  "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`I'm ${2037 - 1991} years old`);
console.log(`Math works: ${2 + 3} equals five`)
console.log(`Comparison too: ${5 > 3}`);

console.log(`Just a regular string...`);

console.log(
  "String with \n\
multiple \n\
lines"
);

console.log(`String
multiple
lines`);

//////
// Create variables for:
const myName = "Kyle"; // Your name
const myAge = 20; // Your age
const myJob = "BSIT Student"; // Your job/student status
const currentYear = 2025;

// Use template literals to create:
// "Hi, I'm [name], a [age] year old [job]!"
console.log(`Hi, I'm ${myName}, a ${myAge} year old ${myJob}!`);
// Log it to the console