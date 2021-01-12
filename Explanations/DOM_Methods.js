
/**
 * Creating button with JS
 */

function changeButtontext(){
    if(document.querySelector('.myButton').innerHTML == 'OK'){
        document.querySelector('.myButton').innerHTML = 'NOT OK'
    } else document.querySelector('.myButton').innerHTML = 'OK'
}

const newButton = document.createElement('button')
newButton.textContent = 'OK'
newButton.setAttribute('onclick', 'changeButtontext()')
newButton.setAttribute('class', 'myButton')
el.append(newButton)



