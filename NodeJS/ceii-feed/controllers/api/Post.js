const PostService = require("../../services/Post");
const { verifyID } = require("../../utils/MongoUtils");
const post = require("../../models/Post");

const controller = {};

controller.create = async (req, res) => {
    const { body } = req;
    const fieldsValidation = PostService.verifyCreateFields(body)
    if(!fieldsValidation.success) {
        return res.status(400).json(fieldsValidation.content)
    }

    try{
        const createPost = await PostService.create(body);
        if(!createPost.success){
            return res.status(409).json(createPost.content);
        }
    
        return res.status(201).json(createPost.content)
    }catch(error){
        return res.status(500).json({
            error: error.message
        })
    }
}

controller.findOneById = async (req, res) => {
    const { _id } = req.params;
    if(!verifyID(_id)){
        return res.status(400).json({
            error: "Error in ID"
        })
    }
    
    try {
        const postExists = await PostService.findOneById(_id)
        if(!postExists) {
            return res.status(404).json(postExists.content)
        }
        return res.status(200).json(postExists.content)
    } catch(error) {
        return res.status(500).json(
            {error: error.message}
        )
    }
}

module.exports = controller;