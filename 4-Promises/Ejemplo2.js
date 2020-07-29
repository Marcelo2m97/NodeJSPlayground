const fs = require("fs")

const appendInFile = texto => {
    return new Promise((resolve, reject) => {
        try{
            fs.writeFileSync("./4-Promise/result.txt", texto, {
                flag: "a"
            })
            resolve()
        }catch(error){
            reject(new Error("Falló a escribir en el archivo."))
        }
    })
}

appendInFile("Mucho texto\n").then(() => {
    console.log("Archivo escrito exitosamente. SIUUUUU!")
}).catch((error) => {
    console.log(error.mesagge)
})