/**
 * Sintaxis básica
 */

function noArrow() {
    console.log("No arrow function!")
}

const arrowFunction = (cb) => {
    console.log("Arrow function!")
    cb()
}

noArrow()
arrowFunction(() => {
    console.log("Arrow Callback!")
})