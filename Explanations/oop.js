
// Ordinary way to create an object on the fly
// const person = { // const person = new Object() // Object() - constructor function
//     name: 'Max',
//     age: 30,
//     greet: function () {
//         console.log(`My name is ${this.name}, and I'm ${this.age} years old`)
//     }
// }

// person.greet()
// console.log(person)



// When we need many objects with same pattern we need a constructor function
// function employee(id, name, age) {
//     this.id = id
//     this.name = name
//     this.age = age
// }

// const employee1 = new employee(1, 'Max', 33)
// const employee2 = new employee(2, 'Mark', 25)

// console.log(employee1, employee2)



// Other syntax is class constructor, class is just a syntax sugar, under the hood it is the same old function cunstructor
class Employee {
    constructor(id, name, age) {
        this.id = id
        this.name = name
        this.age = age
    }
    _getEmployeeInfo() {
        console.log(`id: ${this.id}, name: ${this.name}, age: ${this.age}`)
    }
}

const employee1 = new Employee(1, 'Max', 33)
const employee2 = new Employee(2, 'Mark', 25)
console.log(employee1, employee2)
employee1._getEmployeeInfo()
