const body = document.body

/**
 * !    With append() you can add elements and strings
 */
// body.append('Hello ', 'Hi')

/**
 * !    With appendChild() you can add only elements
 */

// body.appendChild('Hello') // Error


/**
 * !    innerText will get you only the text that dispayed n the screen,
 * !    eventhough if there is more actuall text, but it is hidden by CSS styles
 *
 * !    textContent will get all text that has element, also text will be displayed exactly as in html
 */

// const div = document.querySelector('.text')
// console.log(div.innerText); // OK
// console.log(div.textContent); // OK & NOT OK

/**
 * !    To pass string with html code we need to use innerHTML
 * !    But this leads to problems with security if we allow users to enter innerHTML - they can add malicious code
 */

// const div = document.createElement('div')
// div.textContent = '<strong>OK</strong>' // <strong>OK</strong>
// div.innerText = '<strong>OK</strong>'   // <strong>OK</strong>
// div.innerHTML = '<strong>OK</strong>'   // OK
// body.append(div)

/**
 * !    More scure way to do the same.
 */

// const div = document.createElement('div')
// const strong = document.createElement('strong')
// strong.textContent = 'bold text'
// div.append(strong)
// body.append(div)

// div.remove() // Removes element
// div.removeChild(strong) // Removes child element, better syntax is to access element and use remove() istead of removeChild(element)

/**
 * !    Attributes
 */

const spanOK = document.querySelector('#OK')
console.log(spanOK.getAttribute('id'));     // spanOK.id    
spanOK.setAttribute('class', 'myClass');    // spanOK.class = myClass
spanOK.removeAttribute('name');





