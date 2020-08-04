const array = [1, 2, 3, 4]
const [a, b] = array


const powNumber = num => {
    const resultArray = []

    resultArray[0] = num * num
    resultArray[1] = exp => Math.pow(num, exp)

    return resultArray
}

const [numSquare, powFunction] = powNumber(2)
console.log(numSquare)
console.log(powFunction(3))