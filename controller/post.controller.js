const Validator = require ('fastest-validator');
const models = require('../models');

function create (req,res){
    const post = {
            title:req.body.title,
            content:req.body.content,
            image_url:req.body.image_url,
            categoryId:req.body.categoryId,
            userId:req.body.userId,
           
    }

    models.Post.create(post).then(result=>{
        res.status(201).json({
            message:"Post created with success",
            responseCode:200,
            data:result
        })
    })
    .catch(error=>
        {
            res.status(500).json({
                message:"Failed to create",
                data:error
            })           
        })
}

function selectedOne(req,res){
    const postId = req.params.id;

    models.Post.findByPk(postId).then(result=>{
        if(result){
         res.status(201).json({
            responseMessage:"Operation Successful",
            responseCode:200,
            data:result
        })}else{
               res.status(404).json({
            responseMessage:"No data found",
            responseCode:404,
            data:result})
        }
    }).catch(error=>{
         res.status(404).json({
            message:"Details Not Found ",
            responseCode:404,
            data:error
        })
    })
}

function index(req,res){
    models.Post.findAll().then(result=>{
         res.status(201).json({
            responseMessage:"Operation Successful",
            responseCode:200,
            data:result
        })
    }).catch(error=>{
         res.status(404).json({
            message:"No Post Found ",
            responseCode:404,
            data:error
        })
    })
}

function updatePost (req,res){
    const id  = req.params.id
    const updatePost = {
            title:req.body.title,
            content:req.body.content,
            image_url:req.body.image_url,
            categoryId:req.body.categoryId,           
    }
    const userId = 1
    models.Post.update(updatePost,{where:{id:id,userId:userId}}).then(result=>{
        res.status(200).json({
            message:"Post updated with success",
            responseCode:200,
            data:updatePost
        })
    })
    .catch(error=>
        {
            res.status(500).json({
                message:"Failed to update",
                data:error
            })           
        })
}

function destroy(){

}

module.exports = {
    create:create,
    singlePost:selectedOne,
    index:index,
    update:updatePost


}