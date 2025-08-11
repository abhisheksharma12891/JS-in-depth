// ------------------ BASIC CONSOLE LOGS ------------------

// Print text to the console
console.log("Hello World!");   // Double quotes
console.log('Hello World!');   // Single quotes
console.log(`Hello World!`);   // Backticks (template literals)

// Math operation inside console.log
console.log(14 + 11); // Addition → 25

// ------------------ TYPEOF OPERATOR ------------------
// typeof tells the data type of a value

console.log(typeof "qwerty");     // string
console.log(typeof 7);            // number
console.log(typeof true);         // boolean
console.log(typeof undefined);    // undefined
console.log(typeof null);         // object (this is a known JavaScript quirk)
console.log(typeof BigInt(123));  // bigint
console.log(typeof Symbol('id')); // symbol

// parseInt() converts a string to an integer (ignores non-numeric characters after number)
console.log(parseInt("1234abcd")); // 1234


// ------------------ VARIABLES ------------------

// let → can be reassigned
let userFirstName = 'Abhishek';
console.log(userFirstName);            // Abhishek
console.log(typeof userFirstName);     // string

let userLastName = 'Sharma';
console.log(userLastName);             // Sharma
console.log(typeof userLastName);      // string

// Concatenating two strings with space
let userFullName = userFirstName + " " + userLastName;
console.log(userFullName);             // Abhishek Sharma
console.log(typeof userFullName);      // string

let userIntro = 'CSE Student at PSIT';
console.log(userIntro);                // CSE Student at PSIT
console.log(typeof userIntro);         // string

let userAge = 22;
console.log(userAge);                  // 22
console.log(typeof userAge);           // number

let isMale = true;
console.log(isMale);                   // true
console.log(typeof isMale);            // boolean

// Using + to combine strings and variables
let introLine = "Hi, my name is " + userFirstName + " " + userLastName + " and I am " + userAge + " years old.";
console.log(introLine);                // Full sentence
console.log(typeof introLine);         // string

// Updating let variable
userFirstName = "Gullu";
console.log(userFirstName);            // Gullu
console.log(typeof userFirstName);     // string


// ------------------ ARRAYS ------------------
const dayInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
console.log(dayInWeek);            // Prints full array
console.log(typeof dayInWeek);     // object (arrays are a type of object)
console.log(dayInWeek.length);     // 7 (number of items in array)
console.log(typeof dayInWeek.length); // number


// ------------------ STRING METHODS ------------------
const message = "Hello, World!";
console.log(message);                 // Hello, World!
console.log(message[3]);               // l (character at index 3)
console.log(message.length);           // 13 (total characters)
console.log(message.toUpperCase());    // HELLO, WORLD!
console.log(message.toLowerCase());    // hello, world!
console.log(message.charAt(0));        // H
console.log(message.charCodeAt(0));    // 72 (Unicode value of H)
console.log(message.includes("World")); // true
console.log(message.indexOf("World"));  // 7 (first occurrence index)
console.log(message.lastIndexOf("World")); // 7 (same here, only one occurrence)
console.log(message.slice(7, 12));      // World (from index 7 to 11)
console.log(message.split(" "));        // ["Hello,", "World!"]
console.log(message.concat(" Nice to meet you.")); // Hello, World! Nice to meet you.
console.log(message.trim());            // Removes spaces from start & end (none here)
console.log(message.padStart(20, "*")); // Pads at start until length 20
console.log(message.padEnd(20, "*"));   // Pads at end until length 20
console.log(message.repeat(3));         // Repeats 3 times
console.log(message.replace("World", "Universe")); // Hello, Universe!
console.log(message.replaceAll("l", "L")); // HeLLo, WorLd!
console.log(message.startsWith("Hello"));  // true
console.log(message.endsWith("World!"));   // true
console.log(message.includes("World", 7)); // true (search starts at index 7)
console.log(message.includes("World", 75)); // false (start index too big)


// ------------------ BASIC MATH OPERATORS ------------------
console.log(12 + 4); // 16
console.log(12 - 4); // 8
console.log(12 * 4); // 48
console.log(12 / 4); // 3
console.log(12 % 4); // 0 (remainder)
console.log(12 ** 4); // 20736 (exponentiation, 12^4)


// Using variables for math
const a = 12;
const b = 4;
const add = a + b;
const sub = a - b;
const mul = a * b;
const div = a / b;
const rem = a % b;
const exp = a ** b; // 12^4
console.log(add, sub, mul, div, rem, exp);


// ------------------ MATH OBJECT ------------------

// Math.floor() → Round down
console.log(Math.floor(1.2)); // 1

// Math.random() → Random number between 0 (inclusive) and 1 (exclusive)
console.log(Math.random());

// Math.round() → Round to nearest integer
console.log(Math.round(2.6)); // 3

// Math.max() → Largest number
console.log(Math.max(5, 9, 2)); // 9

// Math.min() → Smallest number
console.log(Math.min(5, 9, 2)); // 2

// Math.abs() → Absolute value
console.log(Math.abs(-10)); // 10

// Math constants
console.log(Math.E);       // 2.718281828459045 (Euler's number)
console.log(Math.LN10);    // 2.302585092994046 (Natural log of 10)
console.log(Math.LOG10E);  // 0.4342944819032518 (Log base 10 of e)
console.log(Math.LOG2E);   // 1.4426950408889634 (Log base 2 of e)
console.log(Math.PI);      // 3.141592653589793 (Pi)
console.log(Math.SQRT1_2); // 0.7071067811865476 (Square root of 1/2)

// Math functions
console.log(Math.acos(1));        // 0 (arc cosine)
console.log(Math.sqrt(16));       // 4 (square root)
console.log(Math.sin(Math.PI/2)); // 1 (sine of 90 degrees)
console.log(Math.cos(0));         // 1 (cosine of 0 degrees)
console.log(Math.ceil(4.2));      // 5 (round up)

// ------------------ DIVISION BY ZERO ------------------
console.log(8 / 0);   // Infinity → Positive number divided by 0
console.log(-8 / 0);  // -Infinity → Negative number divided by 0
console.log(0 / 0);   // NaN (Not-a-Number) → 0 divided by 0 is undefined


// ------------------ DIALOG BOXES ------------------
// These run only in browsers, not in Node.js

// Alert → shows a message
alert("This is an alert box — just shows a message.");

// Confirm → asks OK/Cancel, returns true/false
const isConfirmed = confirm("Do you want to continue?");
console.log("User clicked:", isConfirmed);

// Prompt → asks for user input
const userInput = prompt("What is your name?");
console.log("User entered:", userInput);



// ------------------ AREA & PERIMETER OF RECTANGLE ------------------
const h = 5; // height
const w = 3; // width

// Area = height × width
console.log('Area of given rectangle = ' + (h * w)); // 15

// Perimeter = 2 × (height + width)
console.log('Perimeter of given rectangle = ' + 2 * (h + w)); // 16


// ------------------ FALSY VALUES IN JS ------------------
console.log(Boolean(0))
console.log(Boolean(-0))
console.log(Boolean(NaN))
console.log(Boolean(''))
console.log(Boolean(undefined))
console.log(Boolean(null))

console.log(!!(0))
console.log(!!(-0))
console.log(!!(NaN))
console.log(!!(''))
console.log(!!(undefined))
console.log(!!(null))

// ------------------ COMPARISON OPERATORS IN JAVASCRIPT ------------------

// == (Equality) → Compares values after type conversion
console.log(5 == '5');      // true → values are same after converting '5' to number
console.log(true == 1);     // true → true becomes 1
console.log(false == 0);    // true → false becomes 0
console.log(null == undefined); // true → special case in JS

// === (Strict Equality) → Compares values AND types (no type conversion)
console.log(5 === '5');     // false → number !== string
console.log(5 === 5);       // true → same value & type
console.log(true === 1);    // false → boolean !== number
console.log(null === undefined); // false → different types

// != (Inequality) → Opposite of ==
console.log(5 != '5');      // false → because '5' equals 5 after type conversion
console.log(5 != 7);        // true → values are different

// !== (Strict Inequality) → Opposite of ===
console.log(5 !== '5');     // true → different types
console.log(5 !== 5);       // false → same value & type

// > (Greater than)
console.log(10 > 5);        // true
console.log(5 > 10);        // false
console.log('b' > 'a');     // true → string comparison is based on Unicode values

// < (Less than)
console.log(10 < 5);        // false
console.log(5 < 10);        // true
console.log('apple' < 'banana'); // true → 'a' comes before 'b'

// >= (Greater than or equal to)
console.log(5 >= 5);        // true
console.log(10 >= 5);       // true
console.log(4 >= 5);        // false

// <= (Less than or equal to)
console.log(5 <= 5);        // true
console.log(4 <= 5);        // true
console.log(6 <= 5);        // false

// (Special Case)
console.log(NaN == NaN); // false


//use of && (And)
let age = 20;
let hasID = true;

if (age >= 18 && hasID) {
  console.log("Allowed to enter");
} else {
  console.log("Not allowed");
}


// use of || (Or)
let isWeekend = false;
let isHoliday = true;

if (isWeekend || isHoliday) {
  console.log("You can relax!");
} else {
  console.log("Work day");
}


//use of ! (Not)
let isRaining = false;

if (!isRaining) {
  console.log("Go outside, it's sunny!");
}


// ------------------ DECIDION MAKING USING IF STATEMENT IN JAVASCRIPT ------------------
const username = prompt('Pls enter ur name');
const userAge = prompt('Pls enter ur age');

console.log(`Name:  ${username}`)
console.log(`Age : ${userAge}`)

if (userAge >= 0 && userAge < 18)
  {
    console.log('You are a child u can not work');
  }
else if (userAge >= 18 && userAge < 65)
  {
    console.log('You are an adult u can work');
  }
else if (userAge >= 66)
  {
    console.log('You are an old u can not work');
  }
else
  {
    console.log('You are not born yet');
  }


// ------------------ SWITCH CASE IN JS ------------------

const dayNum = prompt('Pls enter no. of Day');

switch (dayNum) {
  case '1':
    console.log('Sunday');
    break;
  case '2':
    console.log('Monday');
    break;
  case '3':
    console.log('Tuesday');
    break;
  case '4':
    console.log('Wednesday');
    break;
  case '5':
    console.log('Thursday');
    break;
  case '6':
    console.log('Friday');
    break;
  case '7':
    console.log('Saturday');
    break;
  default:
    console.log('Invalid Day');
}


// ------------------ TERNARY OPERATOR ------------------
// Example: Check if a number is even or odd
const number = prompt('Pls enter no.');

const result = (number % 2 === 0) ? "Even" : "Odd";

console.log(number + ' is '  + result + ' ' + 'number');




