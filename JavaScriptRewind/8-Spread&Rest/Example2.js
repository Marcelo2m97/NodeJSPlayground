/**
 * Rest
 */
const sortNumbersAndList = (...numbers) => {
    numbers.sort()
    numbers.forEach((element, index) => {
        console.log(`${index}: ${element}`)
    })
}

sortNumbersAndList(1, 2, 4, 7, 5, 4, 3, 2)