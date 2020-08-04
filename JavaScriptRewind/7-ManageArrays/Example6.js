/**
 * Reduce
 */

const names = [
    "Daniel",
    "Erick",
    "Carlos",
    "Rodrigo",
    "Carla",
    "Elsy"
]

const fun = () => {
    const classroom = names.reduce((acumulador, element) => {
        return acumulador + element + " "
    }, "")

    console.log(classroom)
}

fun()