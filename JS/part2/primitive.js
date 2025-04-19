//Number

let balance = 120;
let anotherBalance = new Number(120);

console.log(balance);
console.log(anotherBalance.valueOf());

console.log(typeof balance);
console.log(typeof anotherBalance);

//Boolean
let isActive = true;
let isReallyActive = new Boolean(true); //not recommended

//null and undefined

let firstName = null;
let lastName = undefined;
console.log(firstName);
console.log(lastName);

//String
let myString = "Hello";
let myStringOne = "Hola";
let username = "Ashutosh";

let oldGreet = myString + " " + "Ashutosh";
console.log(oldGreet);

let greetMessage = `Hello ${username}`;
console.log(greetMessage);

let demoOne = `Value is ${2 * 2}`;
console.log(demoOne);

let sm1 = Symbol("Ashutosh");
let sm2 = Symbol("Ashutosh");
console.log(sm1 === sm2);
console.log(sm1);
