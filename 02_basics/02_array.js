const girls_names = ["Anita", "Rakhi", "Tanu", "Mansi"]
const boys_names = ["Ajay", "Amit", "Gaurav", "Sumit"]

// girls_names.push(boys_names)

// console.log(girls_names);
// console.log(girls_names[4]);

// const concat = girls_names.concat(boys_names);
// console.log(concat);

const another_array = [1, 2, 3, [4, 5, 6,], 7, [4, 5,[6, 7]]];

const real_another_array = another_array.flat(Infinity)

// console.log(real_another_array);

// console.log(Array.isArray("Amit"))
// console.log(Array.from("Amit"))
// console.log(Array.from({name:"Amit"})); //Interesting note

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));