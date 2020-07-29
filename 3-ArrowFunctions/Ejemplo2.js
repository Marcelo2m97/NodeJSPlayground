/**
 * Variaciones de sintaxis
 */

const arrowFunctionNoParams = () => {
    console.log("Sin parámetros")
}

const arrowFunctionOneParam1 = name => {
    console.log(`Name = ${name}`)
}

const arrowFunctionOneParam2 = (name) => {
    console.log(`Name = ${name}`)
}

const arrowFunctionMoreParams = (name, age) => {
    console.log(`Name = ${name}`)
    console.log(`Age = ${age}`)
}

const arrowFunctionBasicReturn = (a, b) => {
    return a + b
}

const arrowFunctionShortReturn = (a, b) => a + b

arrowFunctionNoParams()
console.log("-----")
arrowFunctionOneParam1("Marcelo")
console.log("-----")
arrowFunctionOneParam2("Marcelo")
console.log("-----")
arrowFunctionMoreParams("Marcelo", 22)
console.log("-----")
const valor = arrowFunctionBasicReturn(1, 1)
console.log(`Retornó: ${valor}`)
console.log("-----")
const valor2 = arrowFunctionShortReturn(1, 1)
console.log(`Retornó: ${valor2}`)