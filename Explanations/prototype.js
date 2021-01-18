// ps. Код ниже описывает как работает наследование от класса в JS

window.onload = function (e) {
    let cat = new Cat('kote', 15)   // смотри троку 33
    let dog = new Dog('bobik', 20)  // смотри троку 38

    cat.getVoice()
    dog.eat()
    dog.getVoice()
}

// Описываем юазовый класс Animal
function Animal(name, weight) {
    this.name = name
    this.weight = weight
}

// В прототип этого базового класса записываем методы
Animal.prototype.getVoice = function () {
    console.log(this.name + ' ' + this.weight)
}
Animal.prototype.eat = function () {
    this.weight++
}
// Тоже самое только в вимде объекта
// Animal.prototype = {
//     eat: function () {
//     this.weight++
// },
//     getVoice: function () {
//         console.log(this.name + ' ' + this.weight)
//     }
// }

Cat.prototype = new Animal() // Прототипом Cat является объект класс/объект Animal
function Cat(name, weight) {
    Animal.call(this, name, weight) // при вызове new Cat наследуемся от класса Animal, по сути копипастим код из Animal
    this.lifes = 9  // Дополнительное свойство Cat
    this.getVoice = function () {  // Полиморфизм в ES5
        console.log(this.name + ' ' + this.weight + ' ' + this.lifes)
    }
}

Dog.prototype = new Animal()
function Dog(name, weight) {
    Animal.call(this, name, weight) // при вызове new Dog наследуемся от класса Animal, по сути копипастим код из Animal
}

// ps. Код ниже описывает как работает наследование от класса в новом стандарте ES6

class Human {
    constructor(name, age, weight) {
        this.name = name
        this.age = age
        this.weight = weight
    }

    // Методы, описанные в синтаксисе класса ES6 автоматически записываются в прототип класса
    eat() {
        this.weight++
    }

    getVoice() {
        return this.name + ' ' + this.age + ' ' + this.weight
    }
}

class White extends Human{
    constructor(name, age, weight) {
        super(name, age, weight) //  Метод super необходим если мы хотим добавить к унаследованным свойствам другое свойство, по сути тоже самое что и в строке 37 или 44
        this.skinColor = 'white' // Добавляем дополнительное свойство
    }
    getVoice() {
        return super.getVoice() + ' ' + this.skinColor // Полиморфизм в ES6
    }
}

class Black extends Human {

}

let john = new White('John', 20, '100kg')
let mark = new Black('Mark', 33, '70kg')
console.log(john.getVoice())
console.log(mark.getVoice())



