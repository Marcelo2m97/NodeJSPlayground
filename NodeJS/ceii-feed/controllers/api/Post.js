const PostService = require("../../services/Post");
const { verifyId } = require("../../utils/MongoUtils");
const { verifyTypeNumber } = require("../../utils/MiscUtils")
const post = require("../../models/Post");
const express = require("express");

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
    if(!verifyId(_id)){
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

controller.findAll = async (req, res) => {
    const { page = 0, limit = 10 } = req.query;
    
    if(!verifyTypeNumber(page, limit)){
        return res.status(400).json({
            message: "Mistype in query"
        })
    }

    try{

        const postsResponse = await PostService.findAll(parseInt(page), parseInt(limit));
        return res.status(200).json(postsResponse.content);

    } catch(error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

controller.addLike = async (req, res) => {
    const { _id } = req.body;
    
    if(!verifyId(_id)) {
        return res.status(400).json({
            message: "Error in Id"
        });
    }

    try {
        const postExists = await PostService.findOneById(_id);
        if(!postExists.success) {
            return res.status(404).json(postExists.content);
        }

        const likeAdded = await PostService.addLike(postExists.content);
        if(!likeAdded.success) {
            return res.status(409).json(likeAdded.content);
        }
        
        return res.status(200).json(likeAdded.content)
        
    } catch(error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

module.exports = controller;