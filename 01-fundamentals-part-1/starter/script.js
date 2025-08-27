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

// // JavaScript Fundamentals - Part 2

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

// //JavaScript Fundamentals - Part 3

////////////////////////////////////
// Strings and Template Literals
// const firstName = "Jonas";
// const job = "teacher";
// const birthYear = 1991;
// const year = 2037;

// const jonas =
//   "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
// console.log(jonas);

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(jonasNew);

// console.log(`I'm ${2037 - 1991} years old`);
// console.log(`Math works: ${2 + 3} equals five`)
// console.log(`Comparison too: ${5 > 3}`);

// console.log(`Just a regular string...`);

// console.log(
//   "String with \n\
// multiple \n\
// lines"
// );

// console.log(`String
// multiple
// lines`);

// //////
// // Create variables for:
// const myName = "Kyle"; // Your name
// const myAge = 20; // Your age
// const myJob = "BSIT Student"; // Your job/student status
// const currentYear = 2025;

// // Use template literals to create:
// // "Hi, I'm [name], a [age] year old [job]!"
// console.log(`Hi, I'm ${myName}, a ${myAge} year old ${myJob}!`);
// // Log it to the console

// // Create a template literal that:
// // 1. Calculates your birth year: currentYear - myAge
// // 2. Shows a calculation: 10 * 5
// // 3. Includes a comparison: myAge >= 18
// // Example: "Born in ${}, 10*5 = ${}, Adult: ${}"
// console.log(`Born in ${currentYear - myAge}, 10*5 = ${10 * 5}, Adult: ${myAge >= 18}`);

// const age = 15;

// if (age >= 18) {
//   console.log("Kyle can start driving license");
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Kyle is too young. Wait another ${yearsLeft} years :)`);
// }

// const birthYear = 2005;

// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);

// const score = 95;

// if (score >= 60) {
//   console.log(`You passed with ${score} points!`);
//   console.log(`Congratulations!`);
// } else {
//   const pointsneeded = 60 - score;
//   console.log(`You failed. Need ${pointsneeded} more points.`);
// }

// Create a grade calculator:
// const testScore = 31; // Change this to test different scores

// // Use if/else to determine:
// // 90+: "Excellent! Grade A"
// // 80-89: "Good job! Grade B"
// // 70-79: "Not bad! Grade C"
// // 60-69: "You passed! Grade D"
// // Below 60: "You failed! Study harder"

// // Your code here...
// if (testScore >= 90) {
//   console.log("Excellent! Grade A");
// } else if (testScore >= 80) {
//   console.log("Good job! Grade B");
// } else if (testScore >= 70) {
//   console.log("Not bad! Grade C");
// } else if (testScore >= 60) {
//   console.log("You passed! Grade D");
// } else {
//   console.log("You failed! Study harder");
// }

// Create an age verification system:
// const userAge = 12; // Change this to test

// // Rules:
// // - 18+: "Welcome! You can access all content"
// // - 13-17: "Welcome! Restricted content only"
// // - Under 13: "Sorry, you're too young"

// // Your code here...
// if (userAge >= 18) {
//   console.log("Welcome! You can access all content");
// } else if (userAge >= 13) {
//   console.log("Welcome! Restricted content only");
// } else {
//   console.log("Sorry, you're too young");
// }

// ////////////////////////////////////
// // Truthy and Falsy Values

// console.log(Boolean(0)); // false
// console.log(Boolean(undefined)); // false
// console.log(Boolean("Jonas")); // true
// console.log(Boolean({})); // true (empty object)
// console.log(Boolean("")); // false (empty string)

// const money = 0;
// if (money) {
//   console.log("Don't spend it all ;)");
// } else {
//   console.log("You should get a job!");
// }

// let height = 6;
// if (height) {
//   console.log("YAY! Height is defined");
// } else {
//   console.log("Height is UNDEFINED"); 
// }

// if (height !== undefined) {
//   console.log("Height is defined");
// }

// Test these values with Boolean() and if statements:

// For each value, log:
// 1. The value itself
// 2. Boolean(value)
// 3. Whether it passes an if statement

// console.log("Value:", 0);
// console.log("Boolean:", Boolean(0));
// if (0) {
//   console.log("Truthy!");
// } else {
//   console.log("Falsy!");
// }
// console.log("------");

// console.log("Value:", 1);
// console.log("Boolean:", Boolean(1));
// if (1) {
//   console.log("Truthy!");
// } else {
//   console.log("Falsy!");
// }
// console.log("------");

// console.log("Value:", "");
// console.log("Boolean:", Boolean(""));
// if ("") {
//   console.log("Truthy!");
// } else {
//   console.log("Falsy!");
// }
// console.log("------");

// console.log("Value:", "hello");
// console.log("Boolean:", Boolean("hello"));
// if ("hello") {
//   console.log("Truthy!");
// } else {
//   console.log("Falsy!");
// }
// console.log("------");

// console.log("Value:", undefined);
// console.log("Boolean:", Boolean(undefined));
// if (undefined) {
//   console.log("Truthy!");
// } else {
//   console.log("Falsy!");
// }
// console.log("------");

// console.log("Value:", null);
// console.log("Boolean:", Boolean(null));
// if (null) {
//   console.log("Truthy!");
// } else {
//   console.log("Falsy!");
// }
// console.log("------");

// console.log("Value:", NaN);
// console.log("Boolean:", Boolean(NaN));
// if (NaN) {
//   console.log("Truthy!");
// } else {
//   console.log("Falsy!");
// }
// console.log("------");

// console.log("Value:", {});
// console.log("Boolean:", Boolean({}));
// if ({}) {
//   console.log("Truthy!");
// } else {
//   console.log("Falsy!");
// }
// console.log("------");

// console.log("Value:", []);
// console.log("Boolean:", Boolean([]));
// if ([]) {
//   console.log("Truthy!");
// } else {
//   console.log("Falsy!");
// }
// console.log("------");

//////
// Coding Challenge #2

// Challenge #1 BMI Calculation
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / heightJohn ** 2;
// console.log(BMIMark, BMIJohn);

// // Your if/else statement here:
// // Compare BMIs and create intelligent messages
// // Use template literals for beautiful output
// if (BMIMark > BMIJohn) {
//   console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
// } else {
//   console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
// }

// // JavaScript Fundamentals - Part 4
// //////

// const inputYear = "2005";
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 20);

// console.log(Number("Kyle"));
// console.log(typeof NaN);

// console.log(String(23), 23);
// console.log(typeof String(23));

// // type coercion (automatic)
// console.log("I am " + 23 + " years old");
// console.log("23" - "10" - 3);
// console.log("23" / "2");
// console.log("23" * "2");

// // Can you guess what these will output?
// let n = "1" + 1; //11
// n = n - 1; //10
// console.log(n);

// console.log(2 + 3 + 4 + "5"); //95
// console.log("10" - "4" - "3" - 2 + "5"); //15

// // Predict the output, then test:
// console.log("5" + 2); // "52"
// console.log("5" - 2); // 3
// console.log("5" * 2); // 10
// console.log("5" / 2); // 2.5

// // Convert these explicitly:
// const userAge = "25"; // Convert to number
// console.log(Number(userAge)); // 25

// const userScore = 95; // Convert to string
// console.log(String(userScore)); // "95"

// // This calculator has a bug - fix it!
// // i removed prompt for testing purposes
// const num1 = "2"; // Strings
// const num2 = "3"; 
// const sum = num1 + num2; // Bug: adds as strings!
// console.log(`Sum: ${sum}`);

// // Fix: Convert to numbers first
// const fixedSum = Number(num1) + Number(num2);
// console.log(`Fixed Sum: ${fixedSum}`);

//////
// // Equality Operators: == vs. ===

// const age = "18";
// if (age === 18) console.log("You just became an adult :D (strict)");
// if (age == 18) console.log("You just became an adult :D (loose)");

// // Let's see what happens:
// console.log("18" === 18);
// console.log("18" == 18);
// console.log(18 === 18);

// // Why == can be dangerous
// console.log("0" == 0);
// console.log(0 == false);
// console.log("0" == false);
// console.log(null == undefined);

// // Weird cases that cause bugs
// console.log("" == 0);
// console.log("   " == 0);

// // Convert explicitly, then compare strictly
// const favourite = Number(prompt("What's your favourite number?"));
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23) {
//   console.log("Cool! 23 is an amazing number!");
// } else if (favourite === 7) {
//   console.log("7 is also a cool number");
// } else if (favourite === 9) {
//   console.log("9 is also a cool number");
// } else {
//   console.log("Number is not 23 or 7 or 9");
// }

// // Not-equal operator
// if (favourite !== 23) console.log("Why not 23?");

// // Test these comparisons - predict first, then run:
// console.log(5 === "5"); // Your guess: false
// console.log(5 == "5"); // Your guess: true
// console.log(true === 1); // Your guess: false
// console.log(true == 1); // Your guess: true
// console.log(false === 0); // Your guess: false
// console.log(false == 0); // Your guess: true

// // This login system has bugs - fix them!
// const username = prompt("Username:");
// const password = prompt("Password:");

// // // Bugs: using == instead of ===
// // if (username == "admin" && password == "1234") {
// //   console.log("Welcome admin!");
// // } else {
// //   console.log("Access denied");
// // }

// // Fix using strict equality
// if (username === "admin" && password === "1234") {
//   console.log("Welcome admin!");
// } else {
//   console.log("Access denied");
// }

// //////
// // Logical Operators

// const hasDriversLicense = true; // A
// const hasGoodVision = false; // B

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// const isTired = false; // C
// console.log(hasDriversLicense && hasGoodVision && !isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Someone else should drive...");
// }

// // More complex scenarios
// const age = 17;
// const hasPermission = true;
// const hasExperience = false;

// // Can drive if: (age >= 18 OR has permission) AND has experience
// if ((age >= 18 || hasPermission) && hasExperience) {
//   console.log("Approved to drive");
// } else {
//   console.log("Not approved to drive");
// }

// // Create a club entry system with these rules:
// // Entry allowed if: (age >= 21 AND hasID) OR isVIP

// const age = 20; // Try different values
// const hasID = true; // Try different values
// const isVIP = true; // Try different values

// // Your logic here:
// if ((age >= 21 && hasID) || isVIP) {
//   console.log("Welcome to the club!");
// } else {
//   console.log("Sorry, you cannot enter");
// }

// // Create a weather advisor:
// const temperature = 36; // Celsius
// const isRaining = false;
// const isWindy = true;

// // Advice rules:
// // Perfect day: temp 20-30 AND not raining AND not windy
// // Good day: temp 15-35 AND not raining
// // Stay inside: anything else

// // Your code here...
// if (temperature >= 20 && temperature <= 30 && !isRaining && !isWindy) {
//   console.log("Perfect day!");
// } else if (temperature >= 15 && temperature <= 35 && !isRaining) {
//   console.log("Good day!");
// } else {
//   console.log("Stay inside!");
// }

// //////
// // The Conditional (Ternary) Operator

// const age = 17;

// // Basic ternary
// const drink = age >= 18 ? "wine" : "water";
// console.log(drink);

// // Equivalent 
// let drink2;
// if (age >= 18) {
//   drink2 = "wine";
// } else {
//   drink2 = "water";
// }
// console.log(drink2);

// // Perfect for template literals!
// console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);

// // EXERCISE 1

// // Convert these if/else to ternary operators:

// // 1. Login status
// const isLoggedIn = true;
// let welcomeMessage;
// if (isLoggedIn) {
//   welcomeMessage = "Welcome back!";
// } else {
//   welcomeMessage = "Please sign in";
// }
// // Ternary version: 
// const isLoggedIn = true;
// let welcomeMessage = isLoggedIn ? "Welcome back!" : "Please sign in";
// console.log(welcomeMessage);


// // 2. Price with discount
// const isPremium = false;
// let price;
// if (isPremium) {
//   price = 100 * 0.8; // 20% discount
// } else {
//   price = 100;
// }
// // Ternary version:
// const isPremium = false;
// let price = isPremium ? 100 * 0.8 : 100;
// console.log(price);

// // EXERCISE 2

// // Create smart responses using ternary in template literals:
// const score = 12;
// const weather = "rainy";
// const battery = 33; // percentage

// // Create messages like:
// // "Your score: 85 (Passed/Failed)"
// // "Weather is sunny (Great for outdoor activities/Stay inside)"
// // "Battery: 15% (Low battery warning/Battery OK)"

// const scoreMessage = `Your score: ${score} (${score >= 60 ? "Passed" : "Failed"})`;
// const weatherMessage = `Weather is ${weather} (${weather === "sunny" ? "Great for outdoor activities" : "Stay inside"})`;
// const batteryMessage = `Battery: ${battery}% (${battery < 20 ? "Low battery warning" : "Battery OK"})`;

// console.log(scoreMessage);
// console.log(weatherMessage);
// console.log(batteryMessage);

// //////
// //Coding Challenge #4

// const bill = 30; // Test with 275, 40, and 430

// // Step 1: Create the tip calculation using ternary operator
// // Rule: 15% if between 50-300, otherwise 20%
// // Hint: bill >= 50 && bill <= 300

// const tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2;

// // Step 2: Create beautiful output with template literal
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
