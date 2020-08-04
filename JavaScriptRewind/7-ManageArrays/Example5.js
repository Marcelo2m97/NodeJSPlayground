/**
 * Map
 */

const numbers = [1, 2, 3, 4, 5]
const people = [
    { firstName: "Marcelo", lastName: "Martínez" },
    { firstName: "Andrea", lastName: "Álvarez" }
]

const fun = () => {
    const arrayTimes2 = numbers.map(element => {
        return element * 2;
    })

    console.log(arrayTimes2)

    const fullNames = people.map(element => {
        return `${element.firstName} ${element.lastName}`
    })

    console.log(fullNames)
}

fun()