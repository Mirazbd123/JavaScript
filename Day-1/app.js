// variables 
let name = 'Miraz' , age = 26 , position = 'DevOps';
console.log(name);
console.log(age);
console.log(position);
// assigning new values
name = 'Miraz Khan';
age = 25;
position = 'DevOps Engineer';
console.log(name);
console.log(age);
console.log(position);

// constants
const name1 = 'Miraz' , age1 = 26 , position1 = 'DevOps';
console.log(name1);
console.log(age1);
console.log(position1);

// // can assign new values --> not possible
// name1 = 'Miraz Khan';
// age1 = 25.5;
// position1 = 'DevOps Engineer II';
// console.log(name1);
// console.log(age1);
// console.log(position1);

// Test
let test1 = 2 + 3 + "5"; 
console.log(test1); // output 55
// datatype of test1
console.log(typeof(test1)); // string
// datatype of 2 + 3 + "5"
console.log(typeof(2 + 3 + "5")); // string

// Test
let $ = "Hello World";
let $$$ = 2;
let $myMoney = 5;
console.log($);
console.log($$$);
console.log($myMoney);

// Test
let _lastName = "Johnson";
let _x = 2;
let _100 = 5;
console.log(_lastName);
console.log(_x);
console.log(_100);

// Block scope 
{
    let name = 'Soboz'; // if i use let its the local scope
    console.log(name); // soboz
}
console.log(name); // miraz khan

{
    var glob = 'Global'; // if i use var its the global scope
    console.log(glob); // global
}
console.log(glob); // global

// // Test
// let x = "John Doe";

// let x = 0;

// console.log(x);
// using let it will throw an error

// useing var it wont
var x = "John Doe";
console.log(x);
var x = 0;
console.log(x);

// cannot reassigned const variable
const carName = "lolex";
console.log(carName);
// carName = "BMW"; // will throw an error
// console.log(carName);

// Constant Objects and Arrays :::::
// The keyword const is a little misleading.

// It does not define a constant value. It defines a constant reference to a value.

// Because of this you can NOT:

// Reassign a constant value
// Reassign a constant array
// Reassign a constant object
// But you CAN:

// Change the elements of constant array
// Change the properties of constant object

// if - else

let age2 = 10;
if (age2 > 18.05) {
    console.log("You are an adult");
} else {
    console.log("You are not an adult");
}

let myResult = 23.34;
if (myResult >= 33) {
    console.log("You passed");
} else {
    console.log("you are failed");
}