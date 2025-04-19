const userName = {
  firstName: "Ashutosh",
  isLoggedIn: true,
};

userName.lastName = "Sahu";

console.log(userName["firstName"]);
console.log(userName.lastName);
console.log(userName);
console.log(typeof userName);

let today = new Date();
console.log(today.getDate());

//Array
let anotherUser = ["Ashutosh", true];
console.log(anotherUser[0]);

let isValue = "2abc";
console.log(typeof isValue);
console.log(Number(isValue));
console.log(Number(null));
