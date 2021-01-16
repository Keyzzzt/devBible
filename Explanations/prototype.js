
const numbers = [1, 2, 3] // Under the hood it be created as - new Array(), 
//and this constructs new object, which has access to different methods build in JS
const double = numbers.map(number => number * 2) // Same here

console.log(double)

function Animal(name, age, weight){
    this.name = name
    this.age = age
    this.weight = weight
    this.getVoice = function(){
        console.log(this.name, this.age, this.weight)
    }
    this.eat = function(){
        this.weight++
    }
}

let Petty = new Animal('Petty', 12, 30)
Petty.getVoice()
Petty.eat()
Petty.getVoice()

function Human(name, age, weight){
    this.name = name
    this.age = age
    this.weight = weight

}
Human.prototype.getVoice = function(){
    console.log(this.name, this.age, this.weight)
}
Human.prototype.eat = function(){
    this.weight++
}

let Igor = new Human('Igor', 33, 90)
Igor.getVoice()
Igor.eat()
Igor.getVoice()