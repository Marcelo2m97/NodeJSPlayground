const UserModel = require("./../models/User");
const User = require("./../models/User");

const passwordRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,32})");
const emailRegex = new RegExp("^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$")

const service = {}

service.verifyRegisterFields = ({ username, email, password, name, photo}) => {
    let serviceResponse = {
        success: true,
        content: {}
    }
    
    if(!username || !email || !password || !name || !photo) {
        serviceResponse = {
            success: false,
            content: {
                message: "Require field empty!"
            }
        }
        return serviceResponse;
    }
    
    if(!emailRegex.test(email)) {
        serviceResponse = {
            success: false,
            cotent: {
                message: "Field format incorrect!"
            }
        }
        
        return serviceResponse;
    }

    if(!passwordRegex.test(password)) {
        serviceResponse = {
            success: false,
            content: {
                message: "Password must be 8-32 and strong!"
            }
        }
        
        return serviceResponse
    }
    
    return serviceResponse;
    
}

service.verifyLoginFields = ({identifier, password}) =>{
    let serviceResponse = {
        success: true,
        content: {}
    }

    if(!identifier || !password) {
        serviceResponse = {
            success: false,
            content: {
                message: "Required fields empty!"
            }
        }

        return serviceResponse;
    }

    return serviceResponse;
}

service.findOneUsernameEmail = async (username, email) => {
    let serviceResponse = {
        success: true,
        content: {}
    }

    try {
        const user = await UserModel.findOne({
            $or: [{ username: username }, { email: email }]
        }).exec();

        if(!user) {
            serviceResponse = {
                success: false,
                content: {
                    message: "User not found!"
                }
            }
        } else {
            serviceResponse.content = user;
        }
        
        return serviceResponse;

    } catch(error) {
        throw error;
    }
}

service.register = async ({username, email, password, name, photo}) => {
    let serviceResponse = {
        success: true,
        content: {
            message: "User registered!"
        }
    }

    try {

        const user = new UserModel({
            username,
            email,
            password,
            name,
            photo
        });
        const userSaved = await user.save();

        if(!userSaved){
            serviceResponse = {
                success: false,
                content: {
                    message: "User not registered!"
                }
            }
        }

        return serviceResponse;
        

    } catch(error) {
        throw error;
    }
}


module.exports = service;