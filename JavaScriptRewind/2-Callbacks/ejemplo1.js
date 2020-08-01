function runCallback(a, b, cb){
    console.log(`a = ${a}`)
    console.log(`b = ${b}`)
    
    if(a > b) {
        console.log('a es mayor que b')
    }else{
        console.log('b es mayor o igual que a')
    }

    cb(a+b)
}

console.log("----Show time----")
//Anonym function
runCallback(3, 6, function(c){
    console.log(`A + B = ${c}`)
    console.log(`Raíz cuadradad de A + B = ${Math.sqrt(c)}`)
})