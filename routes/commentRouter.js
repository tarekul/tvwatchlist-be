const express = require('express')
const commentRoute = express.Router()

const {commentService} = require('../services/comment')

commentRoute.get('/:show_id',(req,res)=>{
    const {show_id} = req.params
    commentService.readAllcomments(show_id)
    .then(response=>res.json(response))
    .catch(err=>res.json(err))
})


commentRoute.post('/',(req,res)=>{
    const {comment_body,user_id,show_id} = req.body
    commentService.createComment(comment_body,user_id,show_id)
    .then((response)=>res.json(response))
    .catch(err=>res.json(err))
})

module.exports = {commentRoute}
