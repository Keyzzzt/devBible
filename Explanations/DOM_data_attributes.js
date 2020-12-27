/**
 * !    One of the best ways to store data in HTML is with data attributes.
 * !    These data attributes can be used to do some pretty cool things in CSS without the need for JavaScript,
 * !    as seen in this article, but data attributes are most useful when combined with JavaScript.
 * !    In this article I will teach you exactly how to use data attributes in JavaScript and what makes them so powerful.
 */

const dataDiv = document.querySelector('#test')

/**
 * !    The dataset property on an element will return a DOMStringMap,
 * !    which is essentially just an object that contains all the custom data attributes of an element.
 */

console.log(dataDiv.dataset);


/**
 * !    First, all of our properties are converted from snake case,
 * !    first-name, to camel case, firstName.
 * !    This is because in JavaScript object properties are primarily written as camel case
 * !    so this just makes working with the JavaScript object much easier.
 * 
 * !    Second, the active property has a value of "". 
 * !    This is because any data attribute without a value is assumed to have an empty string as its value.
 */

console.log(dataDiv.dataset.firstName);
console.log(dataDiv.dataset.lastName);
console.log(dataDiv.dataset.active);

/**
 * !    In order to create a new data attribute in JavaScript
 * !    we just need to add a new property to the dataset object with a value.
 */

dataDiv.dataset.newAttr = 'new'
console.log(dataDiv.dataset.newAttr);

/**
 * !    Let’s say that we now want to update the value of a data attribute. 
 * !    This is incredibly easy since it works just like a normal object. 
 * !    We just need to set the value of our dataset property to the new value and it will update the HTML for us.
 */

dataDiv.dataset.lastName = 'Akeljev'
console.log(dataDiv.dataset.lastName);


/**
 * !    Deleting data attributes is a bit different since we need to actually remove the property
 * !    from our object. This is because if we try setting the value to undefined or null the dataset
 * !    object will still have a reference to that property with that value of undefined or null
 * !    and will set the value of our HTML data attribute to the string null or undefined.
 * 
 * !    To delete an element we need to use the delete keyword to remove it completely from the object.
 */

delete dataDiv.dataset.lastName
console.log(dataDiv.dataset.lastName);


/**
 * !    Real life example.
 * !    If now we will ad a third element in html we will not have to change our JS 
 */

const buttons = document.querySelectorAll("[data-modal-id]")

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const modalId = button.dataset.modalId
        const modal = document.getElementById(modalId)
        modal.style.color = 'red'
    })
})

/**
 * !    Data attributes in JavaScript are incredibly useful.
 * !    They allow you to write extremely flexible code which means you can spend
 * !    more time writing the HTML for your project and less time worrying about
 * !    writing a custom event listener for each new element you add.
 */