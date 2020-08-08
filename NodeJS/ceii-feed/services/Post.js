const PostModel = require('../models/Post')
const debug = require("debug")("log");

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

service.verifyUpdateFields = ({ title, description, image }) => {
    serviceResponse = {
        success: true,
        content: {}
    }

    if(!title && !description && !image){
        serviceResponse = {
            success: false,
            content: {
                message: "No changes to make."
            }
        }
        return serviceResponse
    }

    if(title)
        serviceResponse.content.title = title;
    if(description)
        serviceResponse.content.description = description;
    if(image)
        serviceResponse.content.image = image;

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
        throw error;
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
        throw error;
    }
}

service.findAll = async (page, limit) => {
    let serviceResponse = {
        success: true,
        content: {
            message: "Found!"
        }
    }
    
    try {
        const posts = await PostModel.find({}, undefined, {
            skip: page * limit,
            limit: limit,
            sort: [{
                updatedAt: -1
            }]
        }).exec();

        serviceResponse.content = {
            posts,
            count: posts.length,
            page,
            limit
        };

        return serviceResponse;

    } catch (error) {
        throw error;
    }
}

service.addLike = async (post) => {
    let serviceResponse = {
        success: true,
        content: {
            message: "Post liked!"
        }
    }

    try{
        post.likes += 1;
        postUpdated = await post.save();

        if(!postUpdated) {
            serviceResponse = {
                success: false,
                content: {
                    message: "Post not liked!"
                }
            }
        }

        return serviceResponse;
    } catch(error) {
        throw error;
    }
}

service.updateOneById = async (post, contentToUpdate) => {
    let serviceResponse = {
        success: true,
        content: {
            message: "Post updated!"
        }
    }

    try {
        const updatedPost = await PostModel.findByIdAndUpdate(post._id, {
            ...contentToUpdate,
            $push: {
                history: {
                    title: post.title,
                    description: post.description,
                    image: post.image,
                    modifiedAt: new Date()
                }
            }
        });

        if(!updatedPost) {
            serviceResponse = {
                success: false,
                content: {
                    message: "Post not updated!"
                }
            };
        }

        return serviceResponse;

    } catch (error) {
        throw error;
    }
}

service.deleteOneById = async ( _id )  => {
    const serviceResponse = {
        success: true,
        content: {
            message: "Post deleted!"
        }
    }

    try {
        const postDeleted = await PostModel.findByIdAndDelete(_id).exec()

        if(!postDeleted) {
            serviceResponse = {
                success: false,
                content: {
                    message: "Post not deleted!"
                }
            }
        }

        return serviceResponse;
    } catch(error) {
        throw error;
    }
}

module.exports = service;