const controller = {}

controller.getData = (req, res) => {
    res.status(200).json([
        { name: "Andre", edad: 20 },
        { name: "Marcelo", edad: 22 }
    ])
}

controller.getMarcelo = (req, res) => {
    res.status(200).json({
        name: "Marcelo",
        age: 22
    })
}

controller.getAndre = (req, res) => {
    res.status(200).json({
        name: "Andre",
        age: 20
    })
}

controller.statusTest = (req, res) => {
    const num = 3
    if(num >= 5){
        res.status(200).json({
            message: "SIIIUUUUU!"
        })
    }else{
        res.status(418).json({
            message: "I'm a teapot"
        })
    }
}

controller.statusTest2 = (req, res) => {
    const name = undefined

    if(name !== undefined) {
        res.status(200).json({
            message: "SIIIUUUUU"
        })
    }else{
        res.status(400).json({
            message: "Chale, te faltó el nombre"
        })
    }
}

controller.getMethod = (req, res) => {
    res.status(200).json({
        message: "Método GET"
    })
}

controller.postMethod = (req, res) => {
    res.status(200).json({
        message: "Método POST"
    })
}

controller.putMethod = (req, res) => {
    res.status(200).json({
        message: "Método PUT"
    })
}

controller.patchMethod = (req, res) => {
    res.status(200).json({
        message: "Método PATCH"
    })
}

controller.deleteMethod = (req, res) => {
    res.status(200).json({
        message: "Método DELETE"
    })
}

module.exports = controller