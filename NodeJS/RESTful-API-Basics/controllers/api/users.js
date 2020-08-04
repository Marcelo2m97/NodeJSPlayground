const { request } = require("../../app");

const controller = {}
const data = [
	"Marcelo",
    "Andrea",
    "Predo",
	"Alejandra",
	"Tupic",
	"Roberto",
	"Nelson",
	"Banchon",
	"Victor",
	"Lucho",
	"Elsy",
	"Cesar",
	"Alcoleas",
	"Karla",
	"David",
	"Francisco",
	"Moemeister",
	"Manuel",
	"Marlene",
	"Maxisun",
	"Salvador",
	"Sarita",
	"Richie",
	"Stanley",
	"Adolfo",
	"Ernesto",
	"Freddy",
	"Karen",
	"Oscar",
	"Rocio",
	"Rene",
];

controller.signup = (req, res) => {
    console.log(req.body);

    const { username, email, password } = req.body
    console.log(`
    ------------------------
    Username: ${username}
    Email: ${email}
    Password: ${password}
    ------------------------
    `)

    if(!username || !email || !password) {
        return res.status(400).json({
            message: "Bad request."
        })
    }

    res.status(200).json({
        message: "Signed up!"
    })
}

controller.getUserById = (req, res) => {
    const { id } = req.params
    const idParsed = parseInt(id)

    if(isNaN(idParsed)) {
        return res.status(400).json({
            message: "Bad Request."
        })
    }else{
        if(idParsed < 1 || idParsed > data.length - 1){
            return res.status(404).json({
                message: "User not found."
            })
        }else{
            return res.status(200).json({
                person: data[idParsed - 1]
            })
        }
    }
}

controller.getAllUsers = (req, res) => {
    console.log(req.headers.message)
    const { page = 1, limit = 10 } = req.query
    const pageParsed = parseInt(page)
    const limitParsed = parseInt(limit)

    if(isNaN(pageParsed) || isNaN(limitParsed)) {
        return res.status(400).json({
            message: "Bad request"
        })
    }

    const start = (pageParsed - 1) * limitParsed
    const end = start + limitParsed
    const sliceArray = data.slice(start, end)

    return res.status(200).json(sliceArray)
}

module.exports = controller