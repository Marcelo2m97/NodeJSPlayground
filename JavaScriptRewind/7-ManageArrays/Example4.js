/**
 * Filter
 */

const names = [
    "Daniel",
    "Erick",
    "Carlos",
    "Rodrigo",
    "Carla",
    "Elsy"
]

const filterNames = () => {
    const namesFiltered = names.filter((element) => {
        return element[0] === "C"
    })
    console.log(namesFiltered)
}

filterNames()