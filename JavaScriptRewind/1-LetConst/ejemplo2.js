function showConstUsage() {
    const a = 4
    let b = 3

    console.log("a = " + a)
    console.log("b = " + b)

    //If next line is uncommented we will have an error of "Assignment to constant variable."
    //a += 5
    b += 5

    console.log("b = " + b)
}

showConstUsage()