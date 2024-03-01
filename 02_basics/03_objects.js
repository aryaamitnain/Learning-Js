// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Amit",
    "full name": "Amit Nain",
    [mySym]: "mykey1",
    age: 18,
    location: "Delhi",
    email: "aryaamitnain08@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Wednesday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "aryaamitnain08@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "aryaamitnain08@gmail.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());