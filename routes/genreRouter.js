const express = require('express')
const genreRoute = express.Router()

const {genreService} = require('../services/genre')

genreRoute.get('/',(req,res)=>{
    genreService.readAllgenres()
    .then(response=>res.json(response))
    .catch(err=>res.json(err))
})

genreRoute.get('/:id/',(req,res)=>{
    const {id} = req.params
    genreService.readGenres(id)
    .then(response=>res.json(response))
    .catch(err=>res.json(err))
})



module.exports = {genreRoute}
