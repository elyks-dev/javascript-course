// ////////////////////////////////////
// // JavaScript Fundamentals Part 2 - Hour 1
// // PART 1 - Functions, and Scopes.
// console.log("Part 2 is now working");

// //function - Declarations and Expressions
// console.log(' === FUNCTIONS === ');

// function logger() {
//     console.log("My name is Kyle");
// }

// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// console.log(fruitProcessor(3, 4));

// // const juice1 = 'Juice with 5 apples and 0 oranges.';
// // const juice1 = 'Juice with 5 apples and 0 oranges.';
// // const juice1 = 'Juice with 5 apples and 0 oranges.';

// const juice1 = fruitProcessor(5, 0);
// const juice2 = fruitProcessor(2, 4);
// const juice3 = fruitProcessor(3, 2);
// console.log(juice1);

// // Function expressions
// const calcAge = function (birthYear) {
//     return 2025 - birthYear;
// }

// console.log(calcAge(2005)); 
// console.log(calcAge(1991));

// function introduce(firstName, lastName, age) {
//     const introduction = `Hi, I'm ${firstName} ${lastName}, and I'm ${age} years old.`;
//     return introduction;
// }   

// console.log(introduce('Kyle', 'Alonzo', 20));

// function yearsUntilRetirement(birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if (retirement > 0) {
//         return`${firstName} retires in ${retirement} years.`;
//     } else {
//         return`${firstName} has already retired.`;
//     }
// }

// console.log(yearsUntilRetirement(2005, "Kyle"));

// //global scope
// const globalVar = "I am global";

// function testScope() {
//     const localVar = "I am local";
//     console.log(globalVar);
//     console.log(localVar);
// }

// ////////////////////////////////////
// // Coding Challenge #1

// // Function to calculate average of 3 scores
// function calcAverage(score1, score2, score3) {
//   // Your code here
//   return (score1 + score2 + score3) / 3; 
// }

// // Function to check winner
// function checkWinner(avgDolphins, avgKoalas) {
//   // Your code here
//   // Remember: team needs DOUBLE the score to win
//   // Use template literals for nice output
//   if (avgDolphins >= 2 * avgKoalas) {
//     return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     return `Koalas win (${avgKoalas} vs. ${avgDolphins})`;
//   } else {
//     return 'No team wins! Koalas: ' + avgKoalas + ', Dolphins: ' + avgDolphins;
//   }
// }

// // Test Data 1
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(checkWinner(scoreDolphins, scoreKoalas));

// // Test Data 2
// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(checkWinner(scoreDolphins, scoreKoalas));

// ////////////////////////////////////
// // JavaScript Fundamentals Part 2 - Hour 2
// // PART 2 - Introduction to Arrays


// const student1Grade = 85;
// const student2Grade = 90;
// const student3Grade = 78;

// const grades = [85, 90, 78, 92, 88];
// console.log(grades);

// const friends = ['Jang', 'Jason', 'Gab'];
// console.log(friends);

// const mixed = ["Kyle", 20, true, friends];
// console.log(mixed);

// const years = new Array(1991, 2005, 2008, 2020);
// console.log(years);

// // array starts counting at 0
// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);

// //change the value per index
// friends[1] = 'Jay';
// console.log(friends);

// const firstName = 'Kyle';
// const kyle = [firstName, 'Alonzo', 2025 - 2005];
// console.log(kyle)

// const calcAge = function(birthYear) {
//     return 2025 - birthYear;
// }

// const ages = [calcAge(2005), calcAge(1991), calcAge(2010)];
// console.log(ages);

// // Array Methods - Adding elements
// // Add an item at the end of the list
// const newLength = friends.push('Kobe');
// console.log(friends);
// console.log(newLength);
// const newLength2 = friends.push('LeBron');
// console.log(friends);

// // Add the first item in a list
// friends.unshift('Curry');
// console.log(friends);

// // removing elements
// const popped = friends.pop();
// const popped2 = friends.pop();
// console.log(popped);
// console.log(popped2);
// console.log(friends);

// const shifted = friends.shift();
// console.log(shifted);
// console.log(friends);

// // find an element
// // indexOf
// console.log(friends.indexOf('Jay'));
// console.log(friends.indexOf('Gab'));

// // includes()
// console.log(friends.includes('Jay'));
// console.log(friends.includes('Curry'));

// // Array Iteration - Loops

// for (let i = 0; i < friends.length; i++) {
//     console.log(friends[i]);
// }

// friends.forEach(function(friend, index) {
//     console.log(`Friend ${index + 1}: ${friend}`);
// });

// friends.forEach((friend, index) => {
//     console.log(`Friend ${index + 1}: ${friend}`);
// });

// const grades2 = [85, 92, 78, 96, 74];
// let total = 0;

// for (let i = 0; i < grades2.length; i++) {
//     total += grades2[i];
// }

// const average = total / grades2.length;
// console.log(`Average grade: ${average.toFixed(2)}`);

// let passedCount = 0;
// grades2.forEach((grade) => {
//         if (grade >= 70) passedCount++;
// });
// console.log(`${passedCount} out of ${grades2.length} students passed.`);

// ////////////////////////////////////
// // Coding Challenge #2 - Student Grade Manager

// const grades = [78, 85, 92, 67, 88, 95, 73, 82];

// // Function to calculate average
// function calculateAverage(grades) {
//   // Your code here
//   // Hint: Sum all grades, divide by length
//   let sum = 0;
//     for (let i = 0; i < grades.length; i++) {
//         sum += grades[i];
//     }
//     return sum / grades.length;
// }

// // Function to find highest grade
// function findHighestGrade(grades) {
//   // Your code here
//   // Hint: Start with first grade, compare with each subsequent grade
//     let highest = grades[0];
//         for (let i = 1; i < grades.length; i++) {
//             if (grades[i] > highest) {
//                 highest = grades[i];
//             }
//         }
//         return highest;
// }

// // Function to find lowest grade
// function findLowestGrade(grades) {
//   // Your code here
//   // Hint: Similar to highest, but use < comparison
//     let lowest = grades[0];
//         for (let i = 1; i < grades.length; i++) {
//             if (grades[i] < lowest) {
//                 lowest = grades[i];
//             }
//         }
//         return lowest;
// }

// // Function to count passing students
// function countPassing(grades, passingGrade) {
//   // Your code here
//   // Hint: Counter pattern - increment when condition is met
//     let count = 0;
//         for (let i = 0; i < grades.length; i++) {
//             if (grades[i] >= passingGrade) {
//                 count++;
//             }
//         }
//         return count;
// }

// // Generate complete report
// const average = calculateAverage(grades);
// const highest = findHighestGrade(grades);
// const lowest = findLowestGrade(grades);
// const passing = countPassing(grades, 70);

// console.log("=== GRADE REPORT ===");
// console.log(`Average: ${average.toFixed(2)}`);
// console.log(`Highest: ${highest}`);
// console.log(`Lowest: ${lowest}`);
// console.log(`Passing students: ${passing} out of ${grades.length}`);

// ////////////////////////////////////
// // JavaScript Fundamentals Part 2 - Hour 3

// // Problems with Arrays
// const kyleArray = [
//     "Kyle",
//     "Alonzo",
//     2025 - 2005,
//     "Student",
//     ["Jang", "Jason", "Gab"],
// ];

// console.log(kyleArray[0]);
// console.log(kyleArray[1]);

// const kyleObject = {
//     firstName: 'Kyle',
//     lastName: 'Alonzo',
//     age: 2025 - 2005,
//     job: 'Student',
//     friends: ['Jang', 'Jason', 'Gab'],
// };
// console.log(kyleObject);

// // Property access methods
// // Dot notation
// console.log(kyleObject.firstName);
// console.log(kyleObject.lastName);
// console.log(kyleObject.age);

// // bracket notation
// console.log(kyleObject['firstName']);
// console.log(kyleObject['lastName']);
// console.log(kyleObject['age']);

// const nameKey = 'Name';
// console.log(kyleObject['first' + nameKey]);


// // Modifying existing properties
// kyleObject.job = "Programmer";
// kyleObject["age"] = 21;
// console.log(kyleObject);

// // Add new properties
// kyleObject.location = "philippines";
// kyleObject["twitter"] = "kyleprogrammer";
// kyleObject.hasDriverLicense = true;
// console.log(kyleObject);

// // Exercise 1
// // 1. Create a 'book' object with title, author, pages, and isRead properties
// const book = {
//   title: "Supernatural",
//   author: "Eric Kripke",
//   pages: 900,
//   isRead: true
// };

// // 2. Create a 'playlist' object with name, creator, songs array, and genre
// const playlist = {
//   name: "Chill Vibes",
//   creator: "Kyle",
//   songs: ["Sunflower", "888", "Electric Love"],
//   genre: "Indie/Pop"
// };

// // 3. Access and log different properties using both dot and bracket notation
// console.log(book.title);
// console.log(book["author"]);
// console.log(playlist.name);
// console.log(playlist["creator"]);

// // 4. Add a new property to each object
// book.yearPublished = 1988;
// playlist.totalSongs = 3;

// // 5. Modify an existing property in each object
// book.isRead = false;
// playlist.genre = "Lo-fi / Chill";

// // Final check
// console.log(book);
// console.log(playlist);

// // Objects vs Arrays Decision Making

// // Arrays
// const listOfYears = [1991, 1984, 2005, 2020];
// const shoppingList = ["apples", "bananas", "milk", "bread"];
// const testScores = [80, 93, 87, 89];

// // Objects
// const person = {
//     name: "Kyle",
//     age: 20,
//     occupation: "student",
// };
// const car = {
//     brand: "Toyota",
//     model: "Camry",
//     year: 2020,
//     color: "white",
// };

// // objects can contain arrays, arrays can contain objects
// const student = {
//     name: "Sarah",
//     grades: [90, 87, 99],
//     address: {
//         street: "288 Cross St",
//         city: "New York",
//     },
// };

// console.log(student.grades[0]);
// console.log(student.address.city);

// // Object Methods

// const john = {
//     firstName: "John",
//     lastName: "Winchester",
//     birthYear: 1954,
//     job: "Hunter",
//     friends: ["Bobby", "Daniel", "Caleb"],
//     hasDriversLicense: true,

//     calcAge: function(birthYear) {
//         return 2025 - birthYear;
//     },
// };

// console.log(john.calcAge(2000));

// //'this' keyword
// const johnImproved = {
//     firstName: "John",
//     lastName: "Winchester",
//     birthYear: 1954,
//     job: "Hunter",
//     friends: ["Bobby", "Daniel", "Caleb"],
//     hasDriversLicense: true,

//     calcAge: function() {
//         this.age = 2025 - this.birthYear;
//         return this.age;
//     },

//     getSummary: function() {
//         return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} drivers license`;
//     },
// };

// console.log(johnImproved.calcAge());
// console.log(johnImproved.age);
// console.log(johnImproved.getSummary());

// // Create a 'calculator' object:
// // 1. Properties: num1, num2, operator
// // 2. Methods: add(), subtract(), multiply(), divide()
// // 3. Method: calculate() that uses the operator to perform the right operation
// // 4. Method: getResult() that returns a formatted string
// // 5. Use 'this' to access the object's own properties

// const calculator = {
//   num1: 10,
//   num2: 5,
//   operator: "+",

//   add: function () {
//     return this.num1 + this.num2;
//   },

//   subtract: function () {
//     return this.num1 - this.num2;
//   },

//   multiply: function () {
//     return this.num1 * this.num2;
//   },

//   divide: function () {
//     return this.num1 / this.num2;
//   },

//   calculate: function () {
//     if (this.operator === "+") {
//       return this.add();
//     } else if (this.operator === "-") {
//       return this.subtract();
//     } else if (this.operator === "*") {
//       return this.multiply();
//     } else if (this.operator === "/") {
//       return this.divide();
//     } else {
//       return "Invalid operator";
//     }
//   },

//   getResult: function () {
//     return `${this.num1} ${this.operator} ${this.num2} = ${this.calculate()}`;
//   },
// };

// // Test your calculator
// console.log(calculator.calculate());
// console.log(calculator.getResult());

// ////////////////////////////////////
// // Coding Challenge #3 - User Profile System

// const user = {
//   firstName: "Sarah",
//   lastName: "Johnson",
//   birthYear: 1995,
//   location: "New York",
//   interests: ["photography", "travel", "coding"],
//   friends: [
//     { name: "Michael", status: "active" },
//     { name: "Emma", status: "inactive" },
//     { name: "David", status: "active" },
//   ],
//   isActive: true,

//   // Calculate age method
//   calcAge: function () {
//     this.age = new Date().getFullYear() - this.birthYear;
//     return this.age;
//   },

//   // Add friend method
//   addFriend: function (name, status = "active") {
//     this.friends.push({ name: name, status: status });
//     return this.friends.length;
//   },

//   // Get active friends count
//   getActiveFriends: function () {
//     const activeFriends = this.friends.filter(friend => friend.status === "active");
//     return activeFriends.length;
//   },

//   // Toggle active status
//   toggleStatus: function () {
//     this.isActive = !this.isActive;
//     return this.isActive;
//   },

//   // Generate profile summary
//   getSummary: function () {
//     const age = this.calcAge();
//     const activeFriends = this.getActiveFriends();
//     const status = this.isActive ? "Active" : "Inactive";

//     return `${this.firstName} ${this.lastName} (${age}) from ${this.location}
// Currently: ${status}
// ${activeFriends} active friends out of ${this.friends.length} total
// Interests: ${this.interests.join(", ")}
// Connected and sharing life's adventures`;
//   },
// };

// // Test your user profile system
// console.log(user.getSummary());
// user.addFriend("Alex", "active");
// user.toggleStatus();
// console.log("\nAfter updates:");
// console.log(user.getSummary());

// ////////////////////////////////////
// // JavaScript Fundamentals Part 2 - Hour 4

// // Select DOM Elements

// // 1st Method
// // querySelector - uses css selectors

// const message = document.querySelector(".message");
// // gets us the entire element object with all its properties
// console.log(message);

// const button = document.querySelector('#btn');
// console.log(button);

// const heading = document.querySelector("h1");
// console.log(heading);
// // query selector returns the first matching element

// console.log(message.textContent);
// console.log(button.id);
// console.log(heading.tagName);
// console.log(heading.textContent);

// // getElementByID
// const buttonByID = document.getElementById("btn");
// console.log(buttonByID);
// console.log(buttonByID === button);

// // querySelectorAll - Multiple elements
// const allParagraphs = document.querySelectorAll("p");
// console.log(allParagraphs);
// console.log(allParagraphs[0]);

// // Modifying element content

// const message = document.querySelector(".message");

// console.log(message.textContent);
// message.textContent = "Hello From JavaScript";
// console.log(message.textContent);

// // innerHTML
// message.innerHTML = "<strong>Bold text from JS!</strong>";

// // innerText
// console.log(message.innerText);


// // Input Element Values
// const input = document.querySelector(".guess");

// console.log(input.value);
// input.value = "Default text";

// const heading = document.querySelector("h1");
// heading.style.color = "red";
// heading.style.backgroundColor = "yellow";
// heading.style.fontSize = "3rem";

// const button = document.querySelector("#btn");
// button.style.padding = "20px";
// button.style.borderRadius = "10px";


// // Event Listeners - user interactions

// button.addEventListener('click', function() {
//     console.log('Button was clicked!');
//     message.textContent = "You Clicked the button";
//     message.style.color = "green";
// });

// let clickCount = 0;
// button.addEventListener("click", function () {
//     clickCount++;
//     button.textContent = `Clicked ${clickCount} times`;
//     button.style.backgroundColor = `hsl(${clickCount * 30}), 70%, 50%)`; 
// });


// const display = document.querySelector(".message");
// input.addEventListener('input', function() {
//     const userText = input.value;
//     display.textContent = `You typed ${userText}`;
//     display.style.fontSize = `${userText.length + 10}px`;
// });

// // keyboard events - respond to specific key
// input.addEventListener("keydown", function (event) {
//     console.log(`Key pressed ${event.key}`);

//     if (event.key === 'Enter') {
//         display.textContent = `You pressed Enter! Text was ${input.value}`;
//         input.value = ""; //clear input
//     }
// })