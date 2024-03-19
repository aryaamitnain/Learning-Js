const tinderuser = new Object()
tinderuser.id = "123asdf"
tinderuser.name = "amit"
tinderuser.islogedin = false

// console.log(tinderuser);

const regularuser = {
    email: "new@gmail.com",
    fullname:{
        username:{
            firstname: "Amit",
            lastname: "Nain"
        }
    }
}

// console.log(regularuser.fullname.username.firstname);

const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({},obj1, obj2)
// console.log(obj3);

const obj3 = {
    ...obj1, ...obj2
}

// console.log(obj3);

const user = [
    {
        id: 1,
        email: "name@gmail.com"
    }
]

// console.log(tinderuser);
// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));

const course = {
    coursename: "JS in hindi",
    price: 1000,
    courseinstructor: "Hitesh choudhary"
}

// console.log(course.courseinstructor);

const {courseinstructor: instructor} = course
console.log(instructor);


// how we get API, in json ( we usually get in this format but not in every case )
// {
//     "name":"Amit Nain",
//     "coursename": "JS in Hindi",
//     "fees": "1000"
// }

