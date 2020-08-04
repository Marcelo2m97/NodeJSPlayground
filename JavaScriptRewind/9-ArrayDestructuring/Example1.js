const person = {
    name: "Andrea",
    lastName: "Álvarez",
    age: 22
}

const getPerson = () => {
    return {
        name: "Marcelo",
        lastName: "Martínez",
        age: 22
    }

}
const getFullNameFromObject = () => {
    const { name: firstName, lastName } = person
    console.log(`${ firstName } ${ lastName }`);
}

const getFullNameFromFunction = () => {
    const { name: firstName, lastName } = getPerson()
    console.log(`${ firstName } ${ lastName }`);
}

getFullNameFromFunction()
getFullNameFromObject()