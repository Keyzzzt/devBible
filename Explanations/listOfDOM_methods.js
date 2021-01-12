// Get the form that we will work with
const myForm = document.querySelector('#submitMe')
const mySelect = document.querySelector('#cars')
const result = document.querySelector('.result')
const anchor = document.querySelector('#anchor')



console.log('Cookies: ', document.cookie)    // All name/value pairs of cookies in a document
console.log('Domain name: ', document.domain)    // Domain name of the server that loaded the document
console.log('Last modified: ', document.lastModified);    // The date and time the document was last modified
console.log('Title: ', document.title);
console.log('Document full URL: ', document.URL);
console.log('Number of anchors: ', document.anchors.length);
console.log('Href attribute of the first anchor in the document: ', document.anchors[0].href);
console.log('Inner HTML of the first anchor in the document: ', document.anchors[0].innerHTML);
console.log('Number of links in the document: ', document.links.length);
console.log('Number of forms in the document: ', document.forms.length);
console.log('Name of the first form in the document: ', document.forms[0].name);
console.log('Number of images in the document: ', document.images.length);
console.log('When we get a form object, then it has elements array with all form elements: ', myForm.elements);
console.log('Get form action: ', myForm.action);
console.log('Select id: ', mySelect.id);
console.log('Number of images ', document.images.length);

//The enctype attribute specifies how the form-data should be encoded when submitting it to a server.
console.log('Get a form enctype: ',myForm.enctype);
console.log('Number of form elements, form.length: ', myForm.length);
console.log('Number of form elements, form.elements.length: ', myForm.elements.length);
console.log('Form mrthod: ', myForm.method);


// Change CSS style of the last form in the document
let changeVisibility = document.querySelectorAll('form')
changeVisibility[changeVisibility.length - 1].style.visibility = 'visible'

// DisableMe Button
function disableMe(){
    document.getElementById('disableMeId').disabled = true
}


/**
 * ! Form
 */
// Show form id
function showFormIdFunction(){
    result.textContent = myForm.id
}
// Reset a form 
function resetMyForm(){
    const form = document.querySelector('#submitMe')
    result.textContent = form.elements
    form.reset()
}

// Get all form elements values
function getAllValues(){
    const form2 = document.querySelector('#submitMe')
    const formElArr = []
    for(let i = 0; i < form2.elements.length; i ++){
        formElArr.push(form2.elements[i].value)
    }
    result.textContent = formElArr
}

/**
 * ! Option
 */
function disableSelect(){
    mySelect.disabled = true
}
function enableSelect(){
    mySelect.disabled = false
}
function getSelectId() {
    result.textContent = mySelect.id
}
function getTotalOptions(){
    result.textContent = mySelect.length
}
function selectMultiple(){
    mySelect.multiple = true
}
function getSelectedValue(){
    result.textContent = mySelect.options[mySelect.selectedIndex].text
}
function getAllValues(){
    let text = ''
    for(let i = 0; i < mySelect.length; i ++){
        text = text + ' ' + mySelect[i].text
    }
    result.textContent = text
}
function indexOfSelected(){
    result.textContent = mySelect.selectedIndex
}
function changeSelected(){
    mySelect.options[mySelect.selectedIndex].text = 'Changed'
}
function removeSelected(){
    mySelect.remove(mySelect.selectedIndex)
}

/**
 * ! DOM Objects
 */

 function getHref(){
     result.textContent = anchor.href
 }
 function getHrefLang(){
    result.textContent = anchor.hreflang
}
function getRel(){
    result.textContent = anchor.rel
}
function getTarget(){
    result.textContent = anchor.target
}
function getHostname(){
    result.textContent = anchor.hostname
}
function getPathname(){
    result.textContent = anchor.pathname
}
function getHTMLdom(){
    result.textContent = document.querySelector('#htmldom').href;
}

// replace document
// document.body.addEventListener('click', ()=> {
//     document.open('text/html', 'replace')
//     document.write('This is a new document')
//     document.close()
// })



// Open a new window with some content
// document.body.addEventListener('click', function(){
//     let newW = window.open()
//     newW.document.open()
//     newW.document.write('New window with new content.')
//     newW.document.close()
// })


// Display a number of elements with a specific name
let x = document.querySelectorAll([name = 'ok'])
console.log(x.length);

// Submit a form

// function submitMyForm(){
//    console.log( document.querySelector('#submitMe').submit());
// }
















