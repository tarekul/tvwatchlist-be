const express = require('express')
const userRoute = express.Router()

const {userService} = require('../services/user')

userRoute.get('/',(req,res)=>{
    userService.readAllUsers()
    .then(response=>res.json(response))
    .catch(err=>res.json(err))
})

userRoute.get('/:id',(req,res)=>{
    const {id} = req.params
    userService.readUser(id)
    .then(response=>res.json(response))
    .catch(err=>res.json(err))
})

userRoute.post('/',(req,res)=>{
    const {username} = req.body
    userService.createUser(username)
    .then((response)=>res.json(response))
    .catch(err=>res.json(err))
})

module.exports = {userRoute}
