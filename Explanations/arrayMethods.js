
console.log(`This file covers following array build-in methods: 

forEach, flat, indexOf, push, findIndex, Array.isArray, Array.from find, pop, unshift, shift, join, includes, filter, fill, sort, map, reduce, some, every, reverse, concat, slice, splice`)


// push - добавляет в конец и возвращет длину нового массива. Параметры передаются через запятую.
// pop - удаляет последний элемент и возвращет измененный массив.
// unshift - добавляет в начало и возвращет длину нового массива. Параметры передаются через запятую.
// shift - удаляет первый элемент и возвращет измененный массив.


const persons = [
    { id: 1, name: 'Moro', age: 39, category: 'middle' },
    { id: 2, name: 'Max', age: 53, category: 'middle' },
    { id: 3, name: 'Moly', age: 13, category: 'junior' },
    { id: 4, name: 'Manu', age: 36, category: 'junior' },
    { id: 5, name: 'Michael', age: 30, category: 'junior' },
    { id: 6, name: 'Made', age: 55, category: 'senior' },
]

const ages = [23, 12, 54, 75, 34, 23, 55, 77, 44, 42]
const names = ['max', 'mox', 'mux']

//forEach
// this method do not return anything by itself, but loops through the array and change it if needed
// it takes syncronous callback function
// this function can take 3 arguments, item, index and array itself:
// persons.forEach((elem, i, arr) => console.log(elem, i, arr))
// persons.forEach(elem => console.log(elem)) // logs out every single object
// persons.forEach(elem => document.write('<br>' + elem.name + '<br>')) // logs out names of every object
// const over50 = []
// ages.forEach(elem => {
//     if (elem > 50) console.log('More than 50: ' + elem)
//     else console.log('less than 50: ' + elem)
// })

// ******************************************************************************

// includes
// takes in argument of any value to search for it
//returns true / false
// console.log(
//     ages.includes(12)
// )

// ******************************************************************************

// filter
//Метод filter() возвращает новый массив. Принимает колбэк, в котором если проверка дает true то возвращает элемент на котором была проверка
// console.log(
//     ages.filter(age => age > 55)  // if condition returns true, then it return the value
// )
// console.log(
//     persons.filter(person => person.category === 'middle')
// )

// ******************************************************************************

// map
// Метод map() в отличии от forEach() возвращает новый массив. Принимает колбэк.
// that function can take 3 arguments, item, index and array itself
// persons.map((person, i, arr) => console.log(person, i, arr))

// ******************************************************************************

// sort
//принимает 2 аргументаб это элементы для сраванения
// возвращаем 1 или -1 для сортировки массива
// const newAges = persons.sort((a, b) => {
//     return a.age > b.age ? 1 : -1
// })
// console.log(newAges)

// ******************************************************************************

// reduce
// принимает колбэк и начальное состояния, колбэк принимает 1-аккамулятор(по сути переменная для работы)
// 2-значение в массиве
// const totalAge = persons.reduce((total, person) => {
//     return total + person.age
// }, 0)
// console.log(totalAge)

// ******************************************************************************

// some
// Checks if at least one of elements pass the condition
// returns true / false

// console.log(
//     ages.some(elem => elem === 53)
// )

// ******************************************************************************

// every
// Checks if at all elements pass the condition
// returns true / false

// console.log(
//     ages.some(elem => elem > 5)
// )

// ******************************************************************************

// reverse
// simply reverses an array

// console.log(
//     ages.reverse()
// )



// concat
// Do not change existing arrays, but returns a new one

// console.log(
//     ages.concat(names)
// )




// slice
// Если нам нужен кусок из массива
// принимает два аргумента, начальный и конечный элемент
// PS последний элемент не влючается т.е. (slice(1, 3), выведет 1 и 2 элементы ) 

// console.log(
//     ages.slice(1, ages.length - 1) // убираем первый и последний элемент массива
// )



// splice
// Убирает или заменяет элемент массива
// Возвращает новый массив с удаленными элементами
// принимает три аргумента, 1-начальный индекс, 2-колличество элементов после него, 3- опционально, элементы которым заменяем
// PS последний элемент не влючается т.е. (slice(1, 3), выведет 1 и 2 элементы ) 

// const num = [1, 2, 3]
// console.log(
//     num.splice(0, 1, 'ok'), num
// )




// fill
// Заменяет все элементы переданным параметром
// Изменяет исходный массив и возвращает его

// const num = [1, 2, 3]
// console.log(
//     num.fill('ok')
// )



// join
// создает строку из массива
// по дефолту разделяет запятой, либо переданным симоволом в виде строки.
// если в массиве один элемент, разделитель не будет включен в строку
// const num = [1, 2, 3]
// console.log(
//     num.join('/')
// )



// indexOf
// возвращает индекс первого найденного элемента
// const num = [1, 2, 3]
// console.log(
//     num.indexOf(2)
// )


// find
// возвращает найденный элемент или undefined
// const num = [1, 2, 3]
// console.log(
//     num.find(item => item === 2)
// )

// findIndex
// возвращает индекс найденного элемента или undefined
// const num = [1, 2, 3]
// console.log(
//     num.findIndex(item => item === 2)
// )



// Array.from
// создает массив из строки
// Принимает два параметра, 1-саму строку, 2-тип
// const str = '1234567890'
// console.log(
//     Array.from(str, Number)
// )



// Array.isArray
// проверяет, является ли переданное значение массивом
// const num = [1, 2, 3]
// console.log(
//     Array.isArray(1)
// )

// flat
// превращает многоуровневый массив в одноуровневый
// принимает один параметр - уровень вложенности число либо Infinity - если на выходе лоден быть только один урвень 
// const num = [1, 2, 3, [1, 2, ['a']]]
// console.log(
//     num.flat(Infinity)
// )

