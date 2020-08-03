const sqrAfterMillis = (num, millis) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if (num < 3) {
                reject(new Error("Error, número muy pequeño"))
            } else {
                const result = num * num
                resolve(result)
            }
        }, millis)
    })
}

const delayedPow = async () => {
    try{
        const answer = await sqrAfterMillis(2, 1000)
        const answer2 = await sqrAfterMillis(50, 5000)
        console.log(answer, answer2)
    } catch (error){
        console.log(error.message)
    }
}

sqrAfterMillis(30, 3000)
    .then(num => {
        console.log(num)
        sqrAfterMillis(10, 4000)
            .then(num2 => {
                console.log(num2)
            })
})

delayedPow()