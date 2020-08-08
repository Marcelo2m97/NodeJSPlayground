const UserService = require("./../../services/User");
const { createToken } = require("../../utils/JWTUtils")

const controller = {}

controller.register = async (req, res) => {
    const fieldValidation = UserService.verifyRegisterFields(req.body);
    
    if(!fieldValidation.success) {
        res.status(400).json(fieldValidation.content);
    }

    try{
        const { username, email } = req.body;
        const userExists = await UserService.findOneUsernameEmail(username, email);

        if(userExists.success) {
            return res.status(409).json({
                message: "User already exists!"
            })
        }

        const userRegistered = await UserService.register(req.body);
        if(!userRegistered) {
            return res.status(409).json(userRegistered.content);
        }
        return res.status(201).json(userRegistered.content);+1
    }catch(error) {
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
}

controller.login = async (req, res) => {
    const fieldValidation = UserService.verifyLoginFields(req.body);

    if(!fieldValidation.success) {
        return res.status(400).json(fieldValidation.content);
    }

    try {
        const { identifier, password } = req.body;

        const userExists = await UserService.findOneUsernameEmail(identifier, identifier);
        if(!userExists.success) {
            return res.status(404).json(userExists.content);
        }

        const user = userExists.content;

        if(!user.comparePassword(password)){
            return res.status(401).json({
                message: "Incorrect password!"
            })
        }

        return res.status(200).json({
            token: createToken(user._id)
        });
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
}

module.exports = controller;