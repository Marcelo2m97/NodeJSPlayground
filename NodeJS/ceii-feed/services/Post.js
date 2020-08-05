const PostModel = require('../models/Post')

const service = {}

service.verifyCreateFields = ({ title, description, image, user }) => {
    let serviceResponse = {
        success: true,
        content: {
            message: "Fields correct!"
        }
    }
    if(!title || !user){
        serviceResponse = {
            success: false,
            content: {
                message: "Empty fields!"
            }
        }
        return serviceResponse;
    }

    return serviceResponse;
}

service.create = async ({ title, description, image, user }) => {
    /**
     * Service Response by default - as expected in the ideal case.
     */
    let serviceResponse = {
        success: true,
        content: {
            message: "Post created!"
        }
    }

    /**
     * On try: save on the model the data sent from the frontend
     * On catch: lets me know something went wrong
     */
    try{
        const post = new PostModel({
            title,
            description,
            image,
            user
        });
        /**
         *  This notation is the same as writting:
         *  const post = new PostModel({
         *      title: title,
         *      description: description,
         *      image: image,
         *      user: user
         *  })
         */

        //  If this method fails it will return to postSave the value of undefined
        const postSave = await post.save();

        //  Checking if method went wrong by checking if postSave is falsy
        if(!postSave){
            serviceResponse = {
                success: false,
                content: {
                    message: "Post not created"
                }
            };
        }
        return serviceResponse
    }catch(error){
        throw new Error("Internal Server Error");
    }


}

service.findOneById = async (_id) => {
    let servicesResponse = {
        success: true,
        content: {
            message: "Post found!"
        }
    }
    try{
        const post = await PostModel.findById(_id).exec();
        
        if(!post){
            servicesResponse = {
                success: false,
                content: {
                    message: "Post not found!"
                }
            }
        }else{
            servicesResponse.content = post;
        }

        return servicesResponse
    }catch(error){
        throw new Error("Internal Server Error")
    }
}

module.exports = service;