// const tinderUser = new Object() // this is a singleton object (using Object constructor fxn)
const tinderUser = {} // this is not a singleton object 

// A singleton pattern in JavaScript requires additional logic to ensure that only one instance of an object exists.


tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

// objects inside objects
const regu.larUser = {
    email: "some@gmailcom",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname); // to access deep rooted values of objects

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 } // same problem as in array.. object inside object
// const obj3 = Object.assign({}, obj1, obj2, obj4)  // returns a modified target object and is stored inside a new var.. 
// {} is given to define the target and obj1,obj2,obj3 are inserted inside {}
// not compulsory to give {}; in its absence, all the values will go inside obj1

// spread method is best 
const obj3 = {...obj1, ...obj2}
// console.log(obj3);

// when data comes from database, it is in form of array 
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "f@gmail.com"
    },
    {
        id: 3,
        email: "g@gmail.com"
    },
]

users[1].email // to access the property of the object inside an array
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // Object.keys() gives the keys of the object and returns in array
// console.log(Object.values(tinderUser)); // returns values inside an array
// console.log(Object.entries(tinderUser)); // every key value pair is converted in an array with keys & values as elements of that array. the whole object is the main array 

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // to check if a certain property is inside the object 


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]