function getAllRowsCallbacks(millis, onDone){
    const resultSet = [1, 3, 5, 6, 7]
    setTimeout(function (){
        console.log(`La consulta tardó: ${millis} milliseconds`)
        onDone(resultSet)
    }, millis)
}

console.log("----Corriendo----")
getAllRowsCallbacks(1000, function (resultSet){
    console.log(`El array resultante es: ${resultSet}`)
})
console.log("Haciendo otra cosa mientras se ejecuta getAllRowsCallBacks()")
