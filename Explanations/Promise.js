const log = (...a) => {
    console.log(...a)
}

// This syntax gives us call back hell as well
fetch('https://api.placeholderjson.dev/shipments/7EBWXB5') // returns a promise
    .then(response => {
        response.json()
            .then(result => {
                log('Hello from fetch #1', result)
            })
    })

// To avoid callback hell we can return a new promise and not give a callback
fetch('https://api.placeholderjson.dev/shipments/7EBWXB5') // returns a promise
    .then(function (response) {
        return response.json()
    },
        function (err) {    // Second function will be uxucuted if there will be an error
            log(err)
        }
    )  // returns a promise
    .then(result => log('Hello from fetch #2', result)
    )

// Build own Promise
// PS Promise can't be resolved more than once
// Promise has 3 states (Pending(not produced result yet), fullfilled(resolve), Rejected(reject))

const createPromise = (duration) => {
    return new Promise(function (resolve, reject) { //Browser will call this function, and browser will set these 2 arguments, which are both functions
        setTimeout(() => {
            resolve(`Hello from promise after ${duration / 1000} seconds`) // We set state - Resolved
        }, duration)
    })
}

createPromise(2000)
    .then((response) => { // Response here is what we pass as argument in resolve function
        log('First then')
        log('First timer completed')
        return 123
    })
    .then(data => {
        log('Second then')
        log(data)
        return createPromise(2000)
    })
    .then(data => {
        log('Second timer completed')
    })


// async await

async function sendRequest() {
    try {
        const a = await fetch('https://api.placeholderjson.dev/shipments/7EBWXB5') // returns a promise
        log('asyn-await: ', a)
    } catch (e) {
        log('async-await: ', e)
    }
}
sendRequest()