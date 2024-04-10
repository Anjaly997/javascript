const score = 500
// console.log(score)

const balance = new Number(800)
// console.log(balance)

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));


const otherNumber = 45.9766577328

// console.log(otherNumber.toPrecision(5));

const hundreds = 100000000
// console.log(hundreds.toLocaleString('en-IN'));


//++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++//
// console.log(Math.abs(-4));//changes the negative vaalue to +
// console.log(Math.round(3.987));
// console.log(Math.ceil(4.2));//rounds a number up to the nearest integer or to the nearest multiple of specified significance.
// console.log(Math.floor(3.8));// The nearest integer to the number, rounding DOWN.
// console.log(Math.min(4,5,6,78,9));

console.log(Math.random());// gives the random number between 0-1 in decimal

console.log(Math.floor(Math.random()*10) + 1); //to avoid the cases in which value can be 0. or 00.67978 we use +1

const min =10
const max =20

console.log(Math.floor(Math.random() * (max-min +1)) +min)
