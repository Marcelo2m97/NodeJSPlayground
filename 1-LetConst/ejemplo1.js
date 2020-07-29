/*
    Scope
*/

function showVarScope(){
    var varNumber = 1997
    if(true){
        var varNumber = 2020
        console.log("Inside if: " + varNumber)
    }

    console.log("Outside if: " + varNumber)
}

function showLetScope(){
    let letNumber = 1997
    if(true){
        let letNumber = 2020
        console.log("Inside if: " + letNumber)
    }

    console.log("Outside if: " + letNumber)
}

console.log("Var function:")
showVarScope()


console.log("Let function:")
showLetScope()