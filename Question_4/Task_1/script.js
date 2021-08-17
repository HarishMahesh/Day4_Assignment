// Task 1: Simple Programs todo for variables

// 1. Declare four variables without assigning values and print them in console

let a,b,c,d;
console.log(a,b,c,d);

/* 2. How to get value of the variable myvar as output
var myvar= 1;
console.log("myvar"); */

var myvar = 1;
console.log(myvar);

// 3.  Declare variables to store your first name, last name, marital status, country and age in multiple lines

let firstName = 'harish';
let lastName = 'mahesh';
let maritalStatus = 'single';
let country = 'india';
let age = 23;

// 4. Declare variables to store your first name, last name, marital status, country and age in a single line

let firstName1 = 'harish',lastName1 = 'mahesh',maritalStatus1 = 'single',country1 = 'india',age1 = 23;

// 5.  Declare variables and assign string, boolean, undefined and null data types

let name = 'harish mahesh'
let isMarried = false;
let Age = undefined;
let experiance = null;

/* 6. Convert the string to integer
parseInt()
Number()
Plus sign(+) */

let str = '456'

console.log(parseInt(str));
console.log(Number(str));
console.log(+str);

// 7. Write 6 statement which provide truthy & falsey values.

console.log( '12' > '2');  // false
console.log('2' > '12');  // true
console.log(2 > '12');  // false
console.log(2 > 'jhon'); // false
console.log(!undefined); //true