

function myname() {
  console.log("A");
  console.log("M");
  console.log("I");
  console.log("T");
}

// myname()

// function addTwoNumbers(number1, number2){
//    console.log( number1 + number2);
// }

function addTwoNumbers(number1, number2){
//    let result = number1 + number2;
//    return result
    return number1 + number2
}
// addTwoNumbers(5, 8)

const result = addTwoNumbers(5, 8)

// console.log("result:", result);

function loginUserMessage(username = "Amit"){
    if(username === undefined){
       console.log( "Please enter a user name")
       return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("Amit Nain"))
// console.log(loginUserMessage("Rahul"))

function calculateCartPrice(val1, val2, ...num1){
  return num1
}
// console.log(calculateCartPrice(200, 300, 500, 800))

const user = {
  Name : "Amit",
  Price : 500
}

function handleObject(anyobject){
  console.log(`username is ${anyobject.Name} and price is ${anyobject.Price}`);
}

handleObject(user)