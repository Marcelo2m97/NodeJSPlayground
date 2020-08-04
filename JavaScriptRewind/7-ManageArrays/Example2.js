/**
 * Concat, slice, splice
 */

let array = [9, 5, 6 ,3]
let array2 = [1, 2, 3, 4, 5]

const concatExample = () => {
    const array3 = array.concat(array2)
    console.log(array)
    console.log(array2)
    console.log(array3)
}

const sliceExample = () => {
    const sameArray = array.slice(0, 4)
    console.log(sameArray)

    const otherArray = array.slice(1, 3)
    console.log(otherArray)
}

const spliceExample = () => {
    const arraySplice = array.splice(1, 2)
    console.log(arraySplice)
    console.log(array)

    const arraySplice2 = array2.splice(0, 2)
    console.log(arraySplice2)
    console.log(array2)
}

concatExample()
sliceExample()
spliceExample()