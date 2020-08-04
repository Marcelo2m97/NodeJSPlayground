/**
 * Spread
 */
const spreadArray = () => {
    let oldArray = [9, 8, 7]
    let newArrayWithoutSpread = [oldArray, 6, 5, 4, 3, 2, 1]
    let newArrayWithSpread = [...oldArray, 6, 5, 4, 3, 2, 1]

    console.log("Without Spread:");
    console.log(newArrayWithoutSpread);
    console.log("---------------");
    console.log("With Spread:");
    console.log(newArrayWithSpread);
}

const spreadObject = () => {
    person = {
        name: "Marcelo",
        age: 22
    }

    personWithoutSpread = {
        person,
        phrase: "SIIIUUUUU"
    }

    personWithSpread = {
        ...person,
        phrase: "SIIIUUUUU"
    }

    console.log("Without Spread:");
    console.log(personWithoutSpread);
    console.log("---------------");
    console.log("With Spread:");
    console.log(personWithSpread);
}

spreadArray()
spreadObject()