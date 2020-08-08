const { verifyToken } = require("./../utils/JWTUtils")
const { verifyId } = require("../utils/MongoUtils")

const middleware = {}

middleware.verifyAuth = async (req, res, next) => {
    const { authorization } = req.headers

    if(!authorization) {
        return res.status(403).json({
            message: "Authorization is require!"
        });
    }

    const [prefix, token] = authorization.split(" ")
    if(prefix !== "Bearer") {
        return res.status(400).json({
            message: "Wrong prefix"
        });
    }

    const tokenObject = verifyToken(token);
    if(!tokenObject){
        return res.status(401).json({
            message: "Invalid token"
        });
    }

    const userId = tokenObject._id;
    if(!userId) {
        return res.status(400).json({
            message: "Error in Id"
        })
    }

    next();
}

module.exports = middleware;