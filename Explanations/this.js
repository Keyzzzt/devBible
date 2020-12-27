// 'use strict' // Strict mode affects this

// console.log(this) // Global context, this = window object // use strict - window

// function greet() {
//     console.log(this)
// }

// greet() // Global context, this = window object // use strict - undefined


//****************************************************************************** */
// this.age = 30 // this = window, this.age = window.age

// function myAge() {
//     console.log(this.age)
// }
// myAge() // Global context - 30

// const person = {
//     personAge: myAge,
//     age: 33

// }
// person.personAge() // person context - 33


//******************************************************************************* */

// const button = document.querySelector('button')
// const span = document.querySelector('span')
// button.addEventListener('click', function () { console.log(this) }) // button
// span.addEventListener('click', function () {
//     console.log(this) // span
//     this.classList.add('ok')
//     this.textContent = 'Clicked!'
// }) // button
// // button.addEventListener('click', () => console.log(this)) // window, arrow function don't set own context!


//******************************************************************************* */

// class Person {
//     constructor(age) {
//         this.age = age
//     }
//     greet() {
//         console.log('My age is ' + this.age)
//     }
//     greetWithDelay() {
//         console.log(this) // max
//         setTimeout(function () {
//             console.log(this) // window
//             console.log('My age is ' + this.age) // My age is undefined
//         }, 2000)
//     }
// }
// const max = new Person(55)
// max.greet()             // 55, context = max
// max.greetWithDelay()    // undefined, context = window


//******************************************************************************* */


// class Person {
//     constructor(age) {
//         this.age = age
//     }
//     greet() {
//         console.log('My age is ' + this.age)
//     }
//     greetWithDelay() {
//         console.log(this) // max
//         const that = this // save a pointer to this = max
//         setTimeout(function () {
//             console.log(this) // window
//             console.log(that) // max
//             console.log('My age is ' + this.age) // My age is undefined
//             console.log('My age is ' + that.age) // My age is 55
//         }, 2000)
//     }
// }

// const max = new Person(55)
// max.greet()             // 55, context = max
// max.greetWithDelay() 


//******************************************************************************* */


// class Person {
//     constructor(age) {
//         this.age = age
//     }
//     greet() {
//         console.log('My age is ' + this.age)
//     }
//     greetWithDelay() {
//         setTimeout(function () {
//             console.log('My age is ' + this.age) // 55, context = max
//         }.bind(this), 2000) // As function is also an object, we can call bind() method on that, also call(this), apply(this)
//     }
// }

// const max = new Person(55)
// max.greet()             // 55, context = max
// max.greetWithDelay()    // 55, context = max, thanks to the bind() method

//******************************************************************************* */


class Person {
    constructor(age) {
        this.age = age
    }
    greet() {
        console.log('My age is ' + this.age)
    }
    greetWithDelay() {
        setTimeout(() => { // Arrow function dont't add their own context
            console.log('My age is ' + this.age)
        }, 2000)
    }
}

const max = new Person(55)
max.greet()             // 55, context = max
max.greetWithDelay()    // 55, context = max, thanks to the arrow function