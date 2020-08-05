const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    description: String,
    image: String,
    likes: {
        type: Number,
        default: 0,
    },
    user: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Post", PostSchema)