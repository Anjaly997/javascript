// Primitive 

// 7 types : String,Number,Boolean,null,undefined,Symbol,BigInt

const score  = 100
const scoreValue =100.3 //numbertype
const isLoggedIn = false // boolean
const outsideTemp = null
let userEmail;

const id =Symbol('123')
const anotherId= Symbol('123')

console.log(id === anotherId);


const bigNumber = 3456789000876543231n

// console.log(bigNumber);

// Reference (Non-primitive)

// Array,Objects,Functions

const heros =["ninga","shakti","doja"] //array
let mjObj ={
 name: "ann",
 age:24,
}// object


const myFunction = function(){
    console.log("Hello")
}// functions

console.log(typeof bigNumber);
 