// // Remember, we're gonna use strict mode in all scripts now!
// 'use strict';

// //////
// // Hour 1: Professional Environment Setup
// // Professional Development Environment Setup

// console.log('=== DEVELOPMENT ENVIRONMENT SETUP ===');

// const messyExample = function (name, age) {
//   if (age >= 18) {
//     return 'Hello ' + name + ', you are an adult';
//   } else {
//     return 'Hello ' + name + ', you are a minor';
//   }
// };

// console.log('Current messy code example:', messyExample('Kyle', 20));
// console.log('Goal: Automatic formatting, auto-refresh, and typing shortcuts');

// //////
// // Extension Installation Test

// function testExtensions() {
//   const extensionTests = [
//     { name: 'Prettier', status: 'installed', purpose: 'code formatting' },
//     { name: 'Live Server', status: 'installed', purpose: 'auto refresh' },
//     {
//       name: 'Auto Rename Tag',
//       status: 'installed',
//       purpose: 'HTML efficiency',
//     },
//   ];

//   return extensionTests;
// }

// const extensionStatus = testExtensions();
// console.log('Extension installation status:', extensionStatus);

// //////
// // Prettier Configuration Test

// const prettierTest = {
//   firstName: 'Sarah',
//   lastName: 'Johnson',
//   skills: ['JavaScript', 'React', 'Node.js'],
//   isActive: true,
// };

// const messyFunction = function (x, y, z) {
//   if (x > 0 && y > 0) {
//     return x + y + z;
//   } else {
//     return 0;
//   }
// };

// const messyArrow = items => {
//   return items.map(item => {
//     return item.toUpperCase();
//   });
// };

// console.log(
//   'Before Prettier formatting - this code works but looks unprofessional'
// );

// // Create this with terrible formatting:
// const studentTest = {
//   firstName: 'Kyle',
//   skills: ['HTML', 'CSS', 'JavaScript'],
//   experience: 'beginner',
//   goals: ['become-developer', 'build-projects'],
// };

// const testFunc = function (data) {
//   for (let i = 0; i < data.length; i++) {
//     console.log(data[i]);
//   }
// };

// //////
// // Live Server Testing

// // Test 1: Basic live reload
// let liveServerTest = 'Updated message - change #2';
// console.log('Live Server test:', liveServerTest);

// // Test 2: Time-based updates
// const timeStamp = new Date().toLocaleTimeString();
// const updateCount = 1;

// console.log(`Live Server update #${updateCount} at ${timeStamp}`);

// // Test 3: Function testing
// function demonstrateLiveReload() {
//   const randomColor = ['red', 'blue', 'green', 'purple', 'orange'][
//     Math.floor(Math.random() * 5)
//   ];
//   const message = `Live Server rocks! Random color: ${randomColor}`;

//   console.log(message);
//   return message;
// }

// demonstrateLiveReload();

// //////
// function showCurrentTime() {
//   const now = new Date().toLocaleTimeString();
//   console.log('Current time:', now);
//   return now;
// }

// showCurrentTime();

// //////
// console.log('Testing snippet functionality - cl + Tab created this!');

// function testSnippets() {
//   console.log('Function created with snippet - func + Tab!');
//   return 'Snippets working perfectly!';
// }

// testSnippets();

// const snippetTest = message => {
//   console.log(`Arrow function from snippet: ${message}`);
//   return message;
// };

// snippetTest('Snippets save so much typing time!');

// //////
// // Environment Setup Verification

// console.log('Professional Development Environment Complete!');
// console.log('Prettier: Automatic code formatting');
// console.log('Live Server: Automatic browser refresh');
// console.log('Snippets: Fast code generation');
// console.log('Extensions: Enhanced productivity');
// console.log('Ready for professional JavaScript development!');

// function calculateTimeSavings() {
//   const dailyConsoleLogs = 50;
//   const keystrokesSavedPerLog = 11;
//   const dailySavings = dailyConsoleLogs * keystrokesSavedPerLog;
//   const monthlySavings = dailySavings * 22;

//   console.log(`Daily keystrokes saved: ${dailySavings}`);
//   console.log(`Monthly keystrokes saved: ${monthlySavings}`);

//   return { daily: dailySavings, monthly: monthlySavings };
// }

// calculateTimeSavings();

// //////
// // Hour 2: Problem-Solving Framework
// // Developer Skills Hour 2 - Learning How to Code & Problem-Solving Framework
// 'use strict';

// console.log('=== HOUR 2: DEVELOPER MINDSET & PROBLEM SOLVING ===');

// console.log(
//   'Key insight: Professional developers think systematically, not just code'
// );

// console.log('Goal: Transform from beginner to professional problem-solver');

// console.log('4-Step Framework: Understand → Divide → Research → Implement');

// ////////////////////////////////////
// // PRACTICAL PROBLEM-SOLVING: Smart Home Thermometer

// /*
// PROBLEM STATEMENT:
// Given an array of temperatures from one day, calculate the temperature amplitude.
// Keep in mind that sometimes there might be a sensor error.

// Test data: [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5]

// STEP 1: UNDERSTANDING THE PROBLEM
// - Temperature amplitude = difference between highest and lowest temperature
// - Sensor errors = 'error' strings that should be ignored
// - Return a number representing amplitude (max - min)

// STEP 2: SUB-PROBLEMS
// 1. How to ignore errors? (Skip non-number values)
// 2. Find max value in temperature array
// 3. Find min value in temperature array
// 4. Subtract min from max and return result
// */

// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }

//   console.log('Max temperature:', max);
//   console.log('Min temperature:', min);
//   return max - min;
// };

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
// const amplitude = calcTempAmplitude(temperatures);
// console.log('Temperature amplitude is:', amplitude);

// ////////////////////////////////////
// // EXTENDED PROBLEM: Two Arrays

// /*
// PROBLEM 2: Function should handle TWO arrays of temperatures

// STEP 1: UNDERSTAND - Merge arrays, then apply existing logic
// STEP 2: SUB-PROBLEMS - 1) Merge arrays 2) Use existing algorithm
// STEP 3: RESEARCH - array1.concat(array2) method
// STEP 4: IMPLEMENT - Combine and reuse existing code
// */

// const calcTempAmplitudeNew = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log('Merged array:', temps);

//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }

//   console.log('Max temperature:', max);
//   console.log('Min temperature:', min);
//   return max - min;
// };

// const array1 = [3, 5, 1];
// const array2 = [9, 0, 5];
// const amplitudeNew = calcTempAmplitudeNew(array1, array2);
// console.log('Temperature amplitude is:', amplitudeNew);

// // Expected Result: max = 9, min = 0 → amplitude = 9

// console.log(
//   'Problem-solving framework applied successfully to extended challenge!'
// );

// console.log('Framework mastered - ready for independent problem solving!');

// //////
// // Hour 3: Research & Debugging Skills
// // Developer Skills Hour 3 - Research Skills & Debugging Fundamentals
// "use strict";

// console.log("=== HOUR 3: RESEARCH & DEBUGGING MASTERY ===");

// console.log(
//   "Goal: Master research and debugging like a professional developer"
// );
// console.log(
//   "Strategic research builds lasting knowledge, not just quick fixes"
// );

// ////////////////////////////////////
// // PROFESSIONAL GOOGLE RESEARCH TECHNIQUES

// /*
// Sources:
// - MDN Docs: Math.max() with spread syntax
// - Stack Overflow: reduce / loop for big arrays
// - Built In + GeeksforGeeks: confirm loop, reduce, Math.max as standard methods
// */

// function demonstrateArrayMax(numbers) {
//   // Method 1
//   const method1 = Math.max(...numbers);

//   // Method 2
//   let method2 = numbers[0];
//   for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] > method2) method2 = numbers[i];
//   }

//   // Method 3
//   const method3 = numbers.reduce((max, current) =>
//     current > max ? current : max
//   );

//   return { method1, method2, method3 };
// }

// // Test our research with sample data
// const testNumbers = [3, 7, 2, 9, 1, 5];
// const maxResults = demonstrateArrayMax(testNumbers);
// console.log("Multiple approaches from research:", maxResults);

// ////////////////////////////////////
// // STACK OVERFLOW RESEARCH RESULTS

// /*
// Research Question: "How to reverse a string in JavaScript?"
// Sources: Stack Overflow discussions
// Methods: split-reverse-join, manual loop, spread operator
// */

// function reverseStringMethods(str) {
//   // Method 1
//   const method1 = str.split("").reverse().join("");

//   // Method 2
//   let method2 = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     method2 += str[i];
//   }

//   // Method 3
//   const method3 = [...str].reverse().join("");

//   return { method1, method2, method3 };
// }

// const reverseResults = reverseStringMethods("hello");
// console.log("Stack Overflow research results:", reverseResults);

// ////////////////////////////////////
// // MDN DOCUMENTATION MASTERY

// function demonstrateConcat() {
//   const array1 = [1, 2, 3];
//   const array2 = [4, 5, 6];
//   const array3 = [7, 8, 9];

//   const simple = array1.concat(array2);
//   const multiple = array1.concat(array2, array3);

//   console.log("Original array1 unchanged:", array1);

//   return { simple, multiple };
// }

// const concatResults = demonstrateConcat();
// console.log("MDN documentation applied:", concatResults);

// ////////////////////////////////////
// // SYSTEMATIC DEBUGGING METHODOLOGY

// function calculateAverageScore(scores) {
//   if (!Array.isArray(scores)) throw new TypeError('scores must be an array');
//   if (scores.length === 0) return 0;

//   let total = 0;
//   let validCount = 0;

//   for (let i = 0; i < scores.length; i++) {
//     const val = scores[i];
//     if (typeof val !== 'number' || Number.isNaN(val)) {
//       console.warn(`Skipping invalid score at index ${i}:`, val);
//       continue;
//     }
//     total += val;
//     validCount++;
//   }

//   return validCount > 0 ? total / validCount : 0;
// }

// function calculateAverageScoreDebug(scores) {
//   console.group('calculateAverageScoreDebug()');
//   console.log('Input:', scores);

//   debugger;

//   let sum = 0;
//   let count = 0;

//   for (let i = 0; i < scores.length; i++) {
//     const current = scores[i];
//     console.log(`Index ${i} →`, current);

//     if (typeof current === 'number' && !Number.isNaN(current)) {
//       sum += current;
//       count++;
//     } else {
//       console.error('Invalid value, ignored:', { i, current });
//     }
//   }

//   const average = count ? sum / count : 0;
//   console.table({ sum, count, average });
//   console.groupEnd();
//   return average;
// }

// const testScores = [85, 92, 78, 96, 88];
// const mixedScores = [85, 'error', 78, null, 96, NaN, 88];

// console.log('Fixed average:', calculateAverageScore(testScores));
// console.log('Fixed average (mixed):', calculateAverageScore(mixedScores));

// const debugResult = calculateAverageScoreDebug(mixedScores);
// console.log('Debug session result:', debugResult);

// ////////////////////////////////////
// // BROWSER DEVELOPER TOOLS MASTERY
// // Copy into your script.js and open DevTools (F12) to explore the logs and debugger.

// function demonstrateConsoleDebugging(data) {
//   console.group('Debugging Session');

//   console.log('Input data:', data);

//   if (typeof data !== 'object' || data === null) {
//     console.warn(
//       'Warning: Expected object/array, got',
//       data === null ? 'null' : typeof data
//     );
//   }

//   try {
//     console.table(data);
//   } catch (err) {
//     console.error('console.table failed for input:', data, err);
//   }

//   console.groupEnd();

//   return Array.isArray(data) ? data.length : Object.keys(data || {}).length;
// }

// // Test console debugging with different data types
// const arrayData = [1, 2, 3, 4, 5];
// const objectData = { name: 'John', age: 30, city: 'New York' };

// console.log(
//   'demonstrateConsoleDebugging(arrayData) =>',
//   demonstrateConsoleDebugging(arrayData)
// );
// console.log(
//   'demonstrateConsoleDebugging(objectData) =>',
//   demonstrateConsoleDebugging(objectData)
// );
// console.log(
//   "demonstrateConsoleDebugging('hello') =>",
//   demonstrateConsoleDebugging('hello')
// );

// ////////////////////////////////////
// // DEBUGGER STATEMENT AND BREAKPOINTS

// function stepThroughDebugging(numbers) {
//   debugger;

//   if (!Array.isArray(numbers)) {
//     console.error('Expected an array of values. Received:', numbers);
//     return 0;
//   }

//   let sum = 0;
//   let count = 0;

//   for (let i = 0; i < numbers.length; i++) {
//     const currentNumber = numbers[i];

//     console.log(`Processing index ${i}: value =`, currentNumber);

//     if (typeof currentNumber === 'number' && !Number.isNaN(currentNumber)) {
//       sum += currentNumber;
//       count++;
//     } else {
//       console.error(`Invalid number at index ${i}:`, currentNumber);
//     }
//   }

//   const average = count > 0 ? sum / count : 0;
//   console.log('Final results:', { sum, count, average });

//   console.table([{ sum, count, average }]);

//   return average;
// }

// // Test debugging function - open DevTools to see debugger pause and logs
// const mixedNumbers = [10, 20, 'error', 30, null, 40];
// const debugResult = stepThroughDebugging(mixedNumbers);
// console.log('Debug session result:', debugResult);

// ////////////////////////////////////
// // SYSTEMATIC BUG FIXING APPLICATION

// /*
// DEBUGGING PROCESS APPLICATION:

// STEP 1: IDENTIFY ✅
// - Bug: calculateAverageScore returns NaN or wrong value
// - Expected: Average of [85, 92, 78, 96, 88] should be 87.8
// - Actual: Getting NaN or incorrect value

// STEP 2: ISOLATE ✅
// - Bug location: Inside calculateAverageScore function
// - Specific issues: initialization, loop condition, division

// STEP 3: INVESTIGATE ✅
// - total starts as undefined (undefined + number = NaN)
// - Loop goes one iteration too far (accesses undefined)
// - Division uses wrong denominator

// STEP 4: FIX ✅
// - Initialize total to 0
// - Change <= to < in loop condition
// - Remove + 1 from division

// STEP 5: PREVENT ✅
// - Add input validation
// - Add type checking for array elements
// */

// function calculateAverageScoreFixed(scores) {
//   // STEP 5 - PREVENT: Add input validation
//   if (!Array.isArray(scores) || scores.length === 0) {
//     console.error("Invalid input: scores must be a non-empty array");
//     return 0;
//   }

//   // STEP 4 - FIX: Proper initialization
//   let total = 0;
//   let count = 0;

//   // STEP 4 - FIX: Correct loop condition
//   for (let i = 0; i < scores.length; i++) {
//     // STEP 5 - PREVENT: Add type checking
//     if (typeof scores[i] === "number" && !isNaN(scores[i])) {
//       total += scores[i];
//       count++;
//     } else {
//       console.warn(`Skipping non-number value at index ${i}:`, scores[i]);
//     }
//   }

//   // STEP 4 - FIX: Correct division
//   return count > 0 ? total / count : 0;
// }

// // ===========================
// // Comprehensive Testing
// // ===========================

// console.group("Debugging Verification Tests");

// // Test 1 - Normal case
// const normalScores = [85, 92, 78, 96, 88];
// const normalResult = calculateAverageScoreFixed(normalScores);
// console.log("Normal case result:", normalResult); // should be 87.8

// // Test 2 - Edge case with invalid data
// const mixedScores = [85, "invalid", 92, null, 78];
// const mixedResult = calculateAverageScoreFixed(mixedScores);
// console.log("Mixed data result:", mixedResult);

// // Test 3 - Error case with invalid input
// const errorResult = calculateAverageScoreFixed("not an array");
// console.log("Error case result:", errorResult);

// // Test 4 - Edge case with empty array
// const emptyResult = calculateAverageScoreFixed([]);
// console.log("Empty array result:", emptyResult);

// console.groupEnd();

// console.log("Systematic debugging process successfully applied!");
// console.log(
//   "All bugs identified, isolated, investigated, fixed, and prevented"
// );

// //////
// // Hour 4: Apply everything to real challenges
// "use strict";

// console.log("=== HOUR 4: ADVANCED PROBLEM-SOLVING MASTERY ===");

// console.log("Ready to tackle complex problems using systematic approaches");
// console.log("Challenge: Build solutions that work under pressure");

// // Section 1: Weather Forecast Challenge
// const data1 = [17, 21, 23];
// const data2 = [12, 5, -5, 0, 4];

// function printForecast(arr) {
//   if (!Array.isArray(arr) || arr.length === 0) {
//     console.error("printForecast: expected a non-empty array");
//     return;
//   }
//   let result = "...";
//   for (let i = 0; i < arr.length; i++) {
//     result += `${arr[i]}°C in ${i + 1} days...`;
//   }
//   console.log(result);
// }

// // Map approach (functional)
// function printForecastMap(arr) {
//   if (!Array.isArray(arr) || arr.length === 0) {
//     console.error("printForecastMap: expected a non-empty array");
//     return;
//   }
//   const formatted = arr.map((temp, index) => `${temp}°C in ${index + 1} days`);
//   console.log("..." + formatted.join("...") + "...");
// }

// // Reduce approach (concise)
// function printForecastReduce(arr) {
//   if (!Array.isArray(arr) || arr.length === 0) {
//     console.error("printForecastReduce: expected a non-empty array");
//     return;
//   }
//   const result = arr.reduce(
//     (acc, temp, index) => acc + `${temp}°C in ${index + 1} days...`,
//     "..."
//   );
//   console.log(result);
// }

// // Tests for weather formatter
// printForecast(data1);
// printForecast(data2);
// printForecastMap(data1);
// printForecastReduce(data1);

// console.log("Weather forecast formatter working correctly!");

// // Section 2: Time-Pressured Challenge
// function analyzeWorkWeek(dailyHours) {
//   if (!Array.isArray(dailyHours) || dailyHours.length !== 7) {
//     console.error("analyzeWorkWeek: expected an array of 7 numbers");
//     return null;
//   }

//   const totalHours = dailyHours.reduce((sum, h) => sum + h, 0);
//   const averageHours = Math.round((totalHours / dailyHours.length) * 10) / 10;
//   const maxHours = Math.max(...dailyHours);
//   const maxDayIndex = dailyHours.indexOf(maxHours);
//   const dayNames = [
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//     "Sunday",
//   ];
//   const maxDay = dayNames[maxDayIndex] || null;
//   const daysWorked = dailyHours.filter((h) => h > 0).length;
//   const isFullTime = totalHours >= 35;

//   return {
//     totalHours,
//     averageHours,
//     maxDay,
//     daysWorked,
//     isFullTime,
//   };
// }

// const weeklyHours = [7.5, 8, 6.5, 0, 8.5, 4, 0];
// console.log("Work week analysis:", analyzeWorkWeek(weeklyHours));

// // Optimized version
// function analyzeWorkWeekOptimized(dailyHours) {
//   if (!Array.isArray(dailyHours) || dailyHours.length !== 7) {
//     console.error("analyzeWorkWeekOptimized: expected an array of 7 numbers");
//     return null;
//   }

//   const totalHours = dailyHours.reduce((s, h) => s + h, 0);
//   const averageHours = Math.round((totalHours / 7) * 10) / 10;
//   const maxHours = Math.max(...dailyHours);
//   const maxIndex = dailyHours.indexOf(maxHours);
//   const dayNames = [
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//     "Sunday",
//   ];
//   const workingDays = dailyHours
//     .map((h, i) => (h > 0 ? dayNames[i] : null))
//     .filter(Boolean);

//   return {
//     totalHours,
//     averageHours,
//     maxDay: dayNames[maxIndex] || null,
//     daysWorked: workingDays.length,
//     isFullTime: totalHours >= 35,
//     workingDays,
//   };
// }

// console.log("Optimized analysis:", analyzeWorkWeekOptimized(weeklyHours));

// Section 3: Debug Legacy Code - Fixed and Enhanced
// function enhancedForecastFunction(temperatures, options = {}) {
//   if (!Array.isArray(temperatures) || temperatures.length === 0) {
//     console.error(
//       "enhancedForecastFunction: temperatures must be a non-empty array"
//     );
//     return "";
//   }

//   const { unit = "°C", separator = "...", includeIndex = true } = options;
//   const pieces = [];

//   for (let i = 0; i < temperatures.length; i++) {
//     const dayNumber = includeIndex ? i + 1 : i;
//     pieces.push(`${temperatures[i]}${unit} in ${dayNumber} days`);
//   }

//   return separator + pieces.join(separator) + separator;
// }

// const testData = [15, 18, 22, 19];
// console.log("Enhanced function (default):", enhancedForecastFunction(testData));
// console.log(
//   "Enhanced function (custom):",
//   enhancedForecastFunction(testData, { unit: "°F", separator: " | ", includeIndex: true })
// );

// console.log("Complete developer skills successfully applied!");
// console.log("Legacy code debugged, fixed, and enhanced systematically");
