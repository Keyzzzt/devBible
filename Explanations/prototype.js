
const numbers = [1, 2, 3] // Under the hood it be created as - new Array(), and this constructs new object, which has access to different methods build in JS
const double = numbers.map(number => number * 2) // Same here

console.log(double)