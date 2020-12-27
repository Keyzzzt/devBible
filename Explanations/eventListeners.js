const grandParent = document.querySelector('.grandparent')
const parent = document.querySelector('.parent')
const child = document.querySelector('.child')



/**
*! addEventListener takes from 2 to 3 parameters
*! 1 - event, 2 - callback(wich ordinary takes 1 parameter which is event object),
*! 3 - object with capture & bubble & once, false/true,
*! default is bubble: true, capture: false, once: false
*/
// grandParent.addEventListener('click', function (e) {
//     console.log('Event object that browser passes to our callback: ', e);
//     console.log('Object that has been clicked: ', e.target);
// })



/**
*! We can add as much eventListeners as we want to.
*! Firts happens Capturing which goes from document an all way down to the child,
*! Second happens bubbling which goes from child and up to the document
*/

// document.addEventListener('click', function (e) {
//     console.log('document capture');
// }, { capture: true })
// document.addEventListener('click', function (e) {
//     console.log('document bubble');
// })

// grandParent.addEventListener('click', function (e) {
//     console.log('grandparent capture');
// }, { capture: true })
// grandParent.addEventListener('click', function (e) {
//     console.log('grandparent bubble');
// })

// parent.addEventListener('click', function (e) {
//     console.log('parent capture');
// }, { capture: true })
// parent.addEventListener('click', function (e) {
//     console.log('parent bubble');
// })

// child.addEventListener('click', function (e) {
//     console.log('child capture');
// }, { capture: true })
// child.addEventListener('click', function (e) {
//     console.log('child bubble');
// })




/**
 * !    { once: true }
 */

// document.addEventListener('click', function (e) {
//     console.log('document bubble');
// }, { once: true }) // Triggers only once and then eventListener removes automatically

// grandParent.addEventListener('click', function (e) {
//     console.log('grandparent bubble');
// })

// parent.addEventListener('click', function (e) {
//     console.log('parent bubble');
// })

// child.addEventListener('click', function (e) {
//     console.log('child bubble');
// }, { once: true }) // Triggers only once and then eventListener removes automatically



/**
 * !    e.stopPropogation() method
 */


// document.addEventListener('click', function (e) {
//     console.log('document bubble');
// })

// grandParent.addEventListener('click', function (e) {
//     console.log('grandparent bubble');
// })

// parent.addEventListener('click', function (e) {
//     e.stopPropagation() // Will stop all other events (bubble or capture phase)
//     console.log('parent bubble');
// }, { once: true }) // Triggers once, which means that e.stopPropogation() removes and bubble or capture events will go on.


// child.addEventListener('click', function (e) {
//     console.log('child bubble');
// })


/**
 * !    removeEventListener()
 * !    First example will not work, we have to remove exactly same function that was passed to the addEventListener
 * !    We have to create a separate function and pass it to the add and remove eventListener.
 */

// child.addEventListener('click', function (e) {
//     console.log('child bubble'); // This function is not the same as below
// })

// setTimeout(() => {
//     child.removeEventListener('click', function (e) {
//         console.log('child bubble'); // This is not the same function as above
//     }), 1000
// })



/**
 * !    This will remove eventListener
 */

// child.addEventListener('click', myFunction) // myFunction same as below

// setTimeout(() => {
//     child.removeEventListener('click', myFunction) // myFunction same as above
// }, 2000)


// function myFunction() {
//     console.log('child bubble')
// }


/**
 * ?    PS. Below example work with this one
 * ?    Adding multiple eventListeners
 */

// const divs = document.querySelectorAll('div')
// divs.forEach(div => {
//     div.addEventListener('click', () => {
//         console.log('Hi');
//     })
// })

/**
 * ?    PS. Above example work with this one
 * ?    If we will manually add a new div to the document,
 * ?    it will not be added event listenr like in example above
 * ?    Only if we add it manually while we creating it
 */

// const newDiv = document.createElement('div')
// newDiv.style.height = '200px'
// newDiv.style.width = '200px'
// newDiv.style.backgroundColor = 'Yellow'
// newDiv.addEventListener('click', () => {
//     console.log('Manually added event.');
// })
// document.body.append(newDiv)

/**
 * ?    To resolve this issue we can write folowing code
 */

// document.addEventListener('click', (e) => { // This will work anywhere on our page
//     if (e.target.matches('div')) {
//         console.log('Hi div!');
//     } else {
//         console.log('You are not div!');
//     }
// })

/**
 * !    Handy function for global events
 */

// function addGlobalEventListener(type, selector, cb) {
//     document.addEventListener(type, e => {
//         if (e.target.matches(selector)) cb(e)
//     })
// }