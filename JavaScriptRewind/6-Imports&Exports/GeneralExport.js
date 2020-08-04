const cpu = {
    cores: 6,
    baseSpeed: 2.33,
}

const date = new Date()

const add = (a, b) => {
    return a + b
}

const sub = (a, b) => {
    return a - b
}

export {
    cpu as default,
    date,
    add,
    sub
}