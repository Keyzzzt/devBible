// Remove dublicates from an array
const arrNum = [1, 2, 3, 1, 2, 4, 5]
const newArr2 = Array.from(new Set(arrNum)) // [1, 2, 3, 4, 5]

// Reverse string
const reverseString = string => [...string].reverse().join('')

//Reverse array
const reverseArray = arr => [...arr].sort((x, y) => y - x)

// Numbers Factorial
const fact = number => {
    if(number < 0){
        throw new TypeError('Negative number is not allowed')
    } else if (number <= 1) {
        return 1
    } else {
        return number * fact(number - 1)
    }
}

// Array from number
const arrayFromNumber = number => [...`${number}`].map(el => parseInt(el))

// Check if a number is a power of two
const isPowerOfTwo = num => !!num && (num & (num -1)) == 0

// Create an Array of Key-Value Pairs From an Object
const keyValuePairsToArray = obj => Object.keys(obj).map(el => [el, obj[el]])


// Return max number from an array
const maxNumberFromArray = arr => Number([...arr].sort((x, y) => y - x).slice(0,1))

// Return array with max number from other array
const arrayWithMaxNumberFromArray = arr => [...arr].sort((x, y) => y - x).slice(0,1)

// Check if all elements in array are equal
const ifAllEqualInArray = arr => arr.every(el => el === arr[0])

// Return average of numbers
const average = (...numbers) => numbers.reduce((acc, cur) => acc+cur, 0) / numbers.length
// console.log(average(...[1,2]))
// console.log(average(1,2))

// Return sum or all numbers
const sum = (...numbers) => numbers.reduce((acc, cur) => acc+cur, 0)
// console.log(sum(1,2,100))
// console.log(sum(...[1,2,100]))

// Powerset of an array
const arrayPowerset = arr => arr.reduce((acc, cur) => acc.concat(acc.map(el => [cur].concat(el))), [[]])

console.log(arrayPowerset([1,2]))
