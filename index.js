// 1- convert string to number and add 7 to it
console.log(Number("123")+7);
// 2- check if a value is false
function checkIfFalsy(value) {
    if (!value) {
        return "Invalid";
    }
    return value;
}
console.log(checkIfFalsy(0)); 
// 3-Use for loop to print all numbers between 1 and 10, skipping even numbers using continue
for(let i=1; i<=10; i++){
    if(i%2===0){
        continue;
    }
    console.log(i);
}
// 4. Create an array of numbers and return only the even numbers using filter method. 
const numbers = [1, 2, 3, 4, 5].filter((num) => num % 2 == 0);
console.log(numbers);
// 5. Use the spread operator to merge two arrays, then return the merged array. (0.5
const arr1=[1,2,3];
const arr2=[4,5,6];
const merge=[...arr1,...arr2];
console.log(merge);
// 6. Use a switch statement to return the day of the week given a number (1 = Sunday ...., 7 = Saturday).
    let day=2;    
switch(day){
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;  
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("wednesday");
        break;
     case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
    console.log("Invalid day");        
}
// 7. Create an array of strings and return their lengths using map method
const array=["a","ab","abc"].map((len)=>len.length);
console.log(array);
// 8. Write a function that checks if a number is divisible by 3 and 5.
function checkDivide(number){
    if(number%3==0 && number%5==0){
   console.log("divisible by both");  
  } 
   else {
    console.log("not divisible by both");
   }
}
 checkDivide(15);
// 9. Write a function using arrow syntax to return the square of a number
const square=(num)=>num*num;
console.log(square(5));
// 10.Write a function that destructures an object to extract values and returns a formatted string.
function formatted({ name, age }) {
    return `${name} is ${age} years old`;
}
const person = {
    name: "John",
    age: 25
};
console.log(formatted(person));
// 11.Write a function that accepts multiple parameters (two or more) and returns their sum.
function sum(...numbers) {
    console.log(numbers.reduce((total, num) => total + num, 0));
}
sum(1, 2, 3, 4, 5);
// 12. Write a function that returns a promise which resolves after 3 seconds with a 'Success' message. 
function getMessage() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Success");
        }, 3000);
    });
}
getMessage().then((message) => {
    console.log(message);
});
// 13. Write a function to find the largest number in an array. 
function findLargest(arr) {
    return Math.max(...arr);
}
console.log(findLargest([1, 3, 7, 2, 4]));
// 14. Write a function that takes an object and returns an array containing only its keys.
function getKeys(obj) {
    return Object.keys(obj);
}

console.log(getKeys({ name: "John", age: 30 }));
// 15. 15. Write a function that splits a string into an array of words based on spaces.
function splitWords(str) {
    return str.split(" ");
}

console.log(splitWords("The quick brown fox"));


/*
B. Part 2: Essay Questions
1. What is the difference between forEach and for...of? When would you use each?
-for...of is a loop syntax that iterates over the values of an iterable (like an array), while forEach is an array method that executes a function for each element.
Best used when you want to perform an action on every array element.
-for it is a loop that works with iterable objects such as arrays and strings.
Best used when you may need to stop or skip iterations.
2.What is hoisting and what is the Temporal Dead Zone (TDZ)? Explain with examples.
Hoisting is JavaScript's behavior of moving declarations to the top of their scope before the code executes. However, different declarations are treated differently.
example:
console.log(x); // undefined
var x = 10;
The Temporal Dead Zone (TDZ) is the period between entering a block scope and the point where a let or const variable is declared. During this time, the variable exists but cannot be accessed.
example:
console.log(age); // ReferenceError
let age = 20;
3. What are the main differences between == and ===?
== 
Compares values after performing type conversion (type coercion).
Two values of different types may be considered equal.
=== 
Compares both the value and the data type.
No type conversion is performed.
4. Explain how try-catch works and why it is important in async operations.
try-catch handle errors without crashing the program. The code inside the try block is executed, and if an error occurs, control is transferred to the catch block where the error can be handled gracefully.
When working with async functions and await, try-catch is especially important because asynchronous operations may fail due to:
Network errors
Invalid API responses
5. What’s the difference between type conversion and coercion? Provide examples of each.
Type Conversion is when you intentionally change a value from one data type to another using JavaScript functions such as Number(), String(), or Boolean().
let age = "25";
let numberAge = Number(age);
console.log(numberAge); 
console.log(typeof numberAge); 
Type Coercion is when JavaScript automatically converts one data type to another while evaluating an expression.
console.log("5" + 2); // "52"
console.log("5" - 2); // 3
*/ 