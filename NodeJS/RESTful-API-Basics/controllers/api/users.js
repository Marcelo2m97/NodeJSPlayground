const controller = {}

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

module.exports = controller