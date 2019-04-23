const express = require('express')
const showRoute = express.Router()

const {showService} = require('../services/show')

showRoute.get('/',(req,res)=>{
    showService.readAllShows()
    .then(response=>res.json(response))
    .catch(err=>res.json(err))
})

showRoute.get('/:user_id/user',(req,res)=>{
    const {user_id} = req.params
    showService.readShowWuser_id(user_id)
    .then(response=>res.json(response))
    .catch(err=>res.json(err))
})

showRoute.get('/:genre_id/genre',(req,res)=>{
    const {genre_id} = req.params
    showService.readShowWgenre_id(genre_id)
    .then(response=>res.json(response))
    .catch(err=>res.json(err))
})

showRoute.get('/:id',(req,res)=>{
    const {id} = req.params
    showService.readShow(id)
    .then(response=>res.json(response))
    .catch(err=>res.json(err))
})

showRoute.post('/',(req,res)=>{
    const {title,img_url,user_id,genre_id} = req.body
    showService.createShow(title,img_url,user_id,genre_id)
    .then((response)=>res.json(response))
    .catch(err=>res.json(err))
})

module.exports = {showRoute}
