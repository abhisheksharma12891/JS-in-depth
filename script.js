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


// ------------------ OBJECT ------------------
const user1 = { firstName : 'Abhishek', lastName : 'Sharma', age : 21, isMarried : false };
console.log(user1);
console.log(user1.firstName);
console.log(user1.lastName);
console.log(user1.age);
console.log(user1.isMarried);
console.log(user1['firstName']);
console.log(user1['lastName']);
console.log(user1['age']);
console.log(user1['isMarried']);


const user2 = { firstName : 'Akhilesh', lastName : 'Sharma', age : 19, isMarried : false };
console.log(user2);
console.log(user2.firstName);
console.log(user2.lastName);
console.log(user2.age);
console.log(user2.isMarried);
console.log(user2['firstName']);
console.log(user2['lastName']);
console.log(user2['age']);
console.log(user2['isMarried']);

console.log(Boolean(user1===user2))


// ------------------ ARRAY IN JS ------------------

let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits); // ["Apple", "Banana", "Mango"]


// --Creating Arrays--

// Using array literal
let numbers = [1, 2, 3, 4, 5];

// Using new Array()
let cars = new Array("BMW", "Audi", "Tesla");


// Accessing Elements
let colors = ["Red", "Green", "Blue"];
console.log(colors[0]); // Red
console.log(colors[2]); // Blue


// Changing Element
colors[1] = "Yellow";
console.log(colors); // ["Red", "Yellow", "Blue"]


// Array Properties
console.log(colors.length); // 3


//  Common Array Methods
let fruits = ["Apple", "Banana", "Mango"];

fruits.push("Orange");   // Add at end
fruits.pop();            // Remove from end
fruits.unshift("Grapes");// Add at start
fruits.shift();          // Remove from start

console.log(fruits.indexOf("Banana")); // Find index
console.log(fruits.includes("Mango")); // true
console.log(fruits.sort());            // Sort array
console.log(fruits.reverse());         // Reverse array


// Looping through Arrays
let fruits = ["Apple", "Banana", "Mango"];

// Using for loop
for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

// Using for...of
for(let fruit of fruits){
    console.log(fruit);
}



// ------------------ ARRAY METHOD IN JS ------------------
// Adding & Removing Elements

let fruits = ["Apple", "Banana", "Mango"];

// Add at end
fruits.push("Orange"); 
console.log(fruits); // ["Apple", "Banana", "Mango", "Orange"]

// Remove from end
fruits.pop();
console.log(fruits); // ["Apple", "Banana", "Mango"]

// Add at start
fruits.unshift("Grapes");
console.log(fruits); // ["Grapes", "Apple", "Banana", "Mango"]

// Remove from start
fruits.shift();
console.log(fruits); // ["Apple", "Banana", "Mango"]


// Searching in Array
console.log(fruits.indexOf("Banana")); // 1
console.log(fruits.includes("Mango")); // true


// Changing / Splicing
// splice(start, deleteCount, items...)
fruits.splice(1, 1, "Kiwi"); 
console.log(fruits); // ["Apple", "Kiwi", "Mango"]

// slice(start, end) → creates copy
let sliced = fruits.slice(0, 2);
console.log(sliced); // ["Apple", "Kiwi"]

// Sorting
let numbers = [4, 1, 5, 2];
numbers.sort(); // Alphabetically sort (wrong for numbers)
console.log(numbers); // [1, 2, 4, 5]

// Correct numeric sort
numbers.sort((a, b) => a - b);
console.log(numbers); // [1, 2, 4, 5]

numbers.reverse(); // Reverse array
console.log(numbers); // [5, 4, 2, 1]

// Joining
let words = ["Hello", "World"];
console.log(words.join(" ")); // "Hello World"


// Looping Methods
let nums = [1, 2, 3, 4, 5];

// forEach
nums.forEach(n => console.log(n));

// map → returns new array
let doubled = nums.map(n => n * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// filter → returns new array with condition
let evens = nums.filter(n => n % 2 === 0);
console.log(evens); // [2, 4]

// reduce → accumulates to single value
let sum = nums.reduce((acc, n) => acc + n, 0);
console.log(sum); // 15

// Combining Arrays
let a = [1, 2];
let b = [3, 4];
let combined = a.concat(b);
console.log(combined); // [1, 2, 3, 4]

let spreadCombined = [...a, ...b];
console.log(spreadCombined); // [1, 2, 3, 4]


//concat
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = arr1.concat(arr2);
console.log(arr3); // [1, 2, 3, 4, 5]

//index
let arr = ['a', 'b', 'c'];
console.log(arr.indexOf('b')); // 1

//lastIndexOf
console.log(arr.lastIndexOf('b')); // 1

//includes
console.log(arr.includes('b')); // true

//reverse
let arr = [1, 2, 3, 4, 5];
console.log(arr.reverse()); // [5, 4, 3, 2, 1]
//join
let arr = ['a', 'b', 'c'];
console.log(arr.join('')); // "abc"

//sort
let arr = [4, 2, 7, 1];
console.log(arr.sort((a, b) => a - b)); // [1, 2]


// Multi-dimensional Arrays
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix[1][2]); // 6
let arr = [
  ['a','b','c','d'],
  ['e','f','g','h'],
  ['i','j','k','l'],
  ['m','n','o','p']
];

console.log(arr[1][1]) // f


// ------------------ Shallow Copy ------------------
let original = { name: "John", address: { city: "Delhi" } };

// Shallow copy using spread operator
let shallow = { ...original };

shallow.name = "Mike";        // Changes only in copy
shallow.address.city = "Mumbai"; // Changes in both (reference shared)

console.log(original); // { name: "John", address: { city: "Mumbai" } }
console.log(shallow);  // { name: "Mike", address: { city: "Mumbai" } }


// ------------------ Deep Copy ------------------
let original = { name: "John", address: { city: "Delhi" } };

// Deep copy using JSON methods
let deep = JSON.parse(JSON.stringify(original));

deep.name = "Mike";
deep.address.city = "Mumbai";

console.log(original); // { name: "John", address: { city: "Delhi" } }
console.log(deep);     // { name: "Mike", address: { city: "Mumbai" } }


// ------------------ WHILE LOOP ------------------

// Count from 1 to 5
let i = 1;

while (i <= 5) {
  console.log(i);
  i++; // Increment to avoid infinite loop
}


// Even Numbers
let num = 2;

while (num <= 10) {
  console.log(num);
  num += 2; // Add 2 each time
}


// Infinite Loop Warning
let x = 1;

while (x > 0) {
  console.log("This will run forever!");
}


// Using break
let n = 1;

while (true) {
  console.log(n);
  if (n === 5) break; // Exit loop at 5
  n++;
}

// ------------------ FOR LOOP ------------------
// Basic For Loop (Count 1 to 5)

for (let i = 1; i <= 5; i++) {
  console.log(i);
}


// Reverse Counting
for (let i = 5; i >= 1; i--) {
  console.log(i);
}

// Even Numbers
for (let num = 2; num <= 10; num += 2) {
  console.log(num);
}

// Loop Through Array
let fruits = ["Apple", "Banana", "Cherry"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}


// ------------------ DO WHILE LOOP ------------------
// Count 1 to 5
let i = 1;

do {
  console.log(i);
  i++;
} while (i <= 5);

// Runs at Least Once Even if Condition is False
let x = 10;

do {
  console.log("This will run once");
  x++;
} while (x < 5);

// Even Numbers
let num = 2;

do {
  console.log(num);
  num += 2;
} while (num <= 10);

// Compound Assignment Operators

let num = 10;

num += 5;  // num = 15
console.log("After += 5:", num);

num -= 3;  // num = 12
console.log("After -= 3:", num);

num *= 2;  // num = 24
console.log("After *= 2:", num);

num /= 4;  // num = 6
console.log("After /= 4:", num);

num %= 5;  // num = 1
console.log("After %= 5:", num);

num **= 3; // num = 1^3 = 1
console.log("After **= 3:", num);
