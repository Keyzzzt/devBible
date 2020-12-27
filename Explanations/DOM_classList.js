const cl = document.querySelector('#cl')

cl.classList.add('some', 'some2', 'some3')
console.log(cl.classList.value);

cl.classList.remove('some')
console.log(cl.classList.value);


/**
 * !    Sometimes you need to check to see if an element has a specific class in
 * !    JavaScript in order to perform a certain operation. This is luckily very easy
 * !    to do with classList. You can just call the contains method and pass the
 * !    name of the class you want to check.
 * !    This method will return true if the element has that class and false if it doesn’t.
 */

console.log(cl.classList.contains('some3'));

/**
 * !    toggle
 */

cl.classList.toggle('some4')

// same as

if (cl.classList.contains('some4')) {
    cl.classList.remove('some4')
} else {
    cl.classList.add('some4')
}

/**
 * !    Sometimes you need to toggle a class based on a boolean value.
 * !    For example if the boolean data is true then you want to add the some4 class to an
 * !    element otherwise if data is false you want to remove the some4 class.
 * !    Doing so is as simple as the below.
 */

// cl.classList.toggle('some4', data)


/**
 * !    Sometimes you just want to loop through all the classes of an element to do some advanced checks. 
 * !    This is easy to do with the forEach method. The forEach method also works just like the array 
 * !    forEach method.
 */

cl.classList.add('one', 'two')
console.log(typeof cl.classList);
cl.classList.forEach(className => {
    console.log(className);
})

/**
 * !    replace()
 * !    The replace method takes two class names and will replace the first class name with the second 
 * !    class name only if the first class name is already on the element. 
 * !    This method will also return true if the replace was successful or false 
 * !    if the element does not contain the class to be replaced. 
 */
console.log(cl.classList.value);
cl.classList.replace('one', 'notOne')
console.log(cl.classList.value);

// this equals to 
if (cl.classList.contains('one')) {
    cl.classList.remove('one')
    cl.classList.add('notOne')
}
