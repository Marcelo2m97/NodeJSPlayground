/**
 * For each
 */

const array = [1, 2, 3, 4, 5]

const oddEven = () => {
    array.forEach((element, index) => {
        console.log(`Indice: ${index}`)
        element % 2 === 0 ? console.log("Even") : console.log("Odd")
    })
}

oddEven()