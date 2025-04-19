//Challenges for If-else conditions

// 1. Checking if a number is greater than another number:

let num1 = 5;
let num2 = 8;

console.log("I am regular upper code");
if (num1 > num2) {
  console.log("Num1 is greater than Num2");
} else {
  console.log("Num1 is not greater than Num2");
}
console.log("I am regular bottom code");

// 2. Checking if a string is equal to another string
let userName = "ashu";
let anotherUserName = "ashu";

if (userName === anotherUserName) {
  console.log("Pick Another UserName");
} else {
  console.log("You can pick this username");
}

// 3. Checking if a variable is a number or not
let score = "44";

if (typeof score === "number") {
  console.log("Yep ! this is the number");
} else {
  console.log("No that is not a number");
}

// 4. Checking if a boolean value is true or false
let isTeaReady = false;

if (isTeaReady) {
  console.log("Tea is Ready");
} else {
  console.log("Tea is not Ready");
}

// 5. Checking if an array is empty or not
let items = ["item1"];
console.log(items.length);

if (items.length === 0) {
  console.log("Array is Empty");
} else {
  console.log("Array is NOT empty.");
}
