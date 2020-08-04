/**
 * Push pop unshift shift
 */

let array = [9, 5, 6 ,3]
let array2 = [1, 2, 3, 4, 5]

const manejoFinal = () => {
    console.log("Manejo al final");

    array.push(4)
    console.log(array)

    array.push(4, 1, 2, 7)
    console.log(array)

    array.pop()
    console.log(array)
}

const manejoInicio = () => {
    console.log("Manejo al inicio");

    array2.unshift(20)
    console.log(array2)

    array2.unshift(20, 21, 22)
    console.log(array2)

    array2.shift()
    console.log(array2)
}

manejoFinal()
manejoInicio()