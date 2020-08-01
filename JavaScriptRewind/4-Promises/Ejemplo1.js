const isMommyHappy = (daddyReturn = false) => {
    return new Promise((resolve, reject) => {
        if(daddyReturn){
            resolve({
                isHappy: true,
                reason: "Papá regresó",
            });
        } else {
            reject(new Error("Nunca volvió"));
        }
    })
}

isMommyHappy(true).then((state) => {
    console.log(state)
}).catch((error) => {
    console.log(error.message)
});

console.log("---------")

isMommyHappy(false).then((state) => {
    console.log(state)
}).catch((error) => {
    console.log(error.message)
});

console.log("---------")

isMommyHappy().then((state) => {
    console.log(state)
}).catch((error) => {
    console.log(error.message)
});