// Get the form that we will work with
const myForm = document.querySelector('.myForm')
const mySelect = document.querySelector('#cars')
const result = document.querySelector('.result')
const anchor = document.querySelector('#anchor')

function numberOfImages(){
    result.textContent = document.images.length
}
function domainName(){
    result.textContent = document.domain
}
function lastModifiedd(){
    result.textContent = document.lastModified
}
function docTitle(){
    result.textContent = document.title   
}
function showURL(){
    result.textContent = document.URL   
}
function aTags(){
    result.textContent = document.links.length // old version anchors.length
}
function aTagsType(){
    result.textContent = typeof document.links
}
function firstATag(){
    result.textContent = document.links[0]
}
function getCookies(){
    result.textContent = document.cookie
}
function hrefFirstLink(){
    result.textContent = document.links[0].href
}
function textContentFirstLink(){
    result.textContent = document.links[0].textContent // or .innerHTML
}
function totalLinksNumber(){
    result.textContent = document.links.length
}
function totalFormsNumber(){
    result.textContent = document.forms.length
}
function firstFormNameTagValue(){
    result.textContent = document.forms[0].name
}
function formElements(){
    result.textContent = console.log(document.forms.elements)
}
function enctype(){
    result.textContent = `The enctype attribute specifies how the form-data should be encoded when submitting it to a server, ${myForm.enctype}`
}
function formElementsNumber(){
    result.textContent = myForm.elements.length // or myForm.length
}
function changeLastFormStyle(){
    let allForms = document.querySelectorAll('form')
    allForms[allForms.length - 1].style.backgroundColor = 'Yellow'
}

function disableMe(){
    this.disabled = true
}


// Reset a form 
function resetMyForm(){
    myForm.reset()
}

// Get all form elements values
function getAllValues(){
    const formElArr = []
    for(let i = 0; i < myForm.length; i ++){
        formElArr.push(myForm.elements[i].value)
    }
    console.log(formElArr)
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
function getAllOptionValues(){
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
















