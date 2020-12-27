const arrNum = [1, 2, 3, 1, 2, 4, 5]
const temp = new Set(arrNum) // {1, 2, 3, 4, 5}
const newArr = Array.from(temp) // [1, 2, 3, 4, 5]
// OR the same but shorter
const newArr2 = Array.from(new Set(arrNum)) // [1, 2, 3, 4, 5]

