/**
 * Sintaxis y llamadas
 */

const asyncCall = async () => {
    let value = 5
    setTimeout(() => {
        value += value
        console.log(`value * 2 = ${value}`)
    }, 2000)
}

console.log("Calling")
asyncCall()
console.log("Message after calling")