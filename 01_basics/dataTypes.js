//  Primitive

//  7 types : String, Number, Boolean, null, undefined, symbol, bigint

const isLogedIn = false;
const outsideTemp = null;
let UserEmail;

const Id = Symbol('123')
const anotherId = Symbol('123')

// console.log(Id === anotherId);

const BigNumber = 3865936945799087480957973487n
// console.log(typeof(BigNumber))

// Reference (Non-Premitive)

// Array, Objects, functions, 

const names = ["Amit", "Rahul", "gaurav"];
let myobj = {name: "Amit", age: 24, gender: "Male",};

console.log(typeof(names));
console.log(typeof(myobj));

function myfunction(){
    
}