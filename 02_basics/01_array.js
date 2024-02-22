// array

const myArray = [0, 1, 2, 3, 4, 5]
const names = ["amit", "rohit", "gaurav"]

// console.log(myArray[2]);
// console.log(names[2]);

// methods

// myArray.push(6);
// myArray.push(8);
// myArray.pop();

// console.log(myArray);

// myArray.unshift(5);
// myArray.shift();

// console.log(myArray);


// console.log(myArray.includes(7));
// console.log(myArray.indexOf(3));

let newArray = myArray.join()

console.log(newArray);
// console.log(typeof(newArray));

console.log("A", myArray);

const myN1 = myArray.slice(0,4)
console.log(myN1);
console.log("B", myArray);

const myN2 = myArray.splice(0,4)
console.log(myN2);
console.log('c', myArray);
