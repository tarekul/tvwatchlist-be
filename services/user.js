const {getDbConnect} = require('../services/dbConnect')
const {dbAddr} = require('../services/config')
const userService = {}

userService.readAllUsers = () => {
    const sql = 'SELECT * FROM users'
    return getDbConnect(dbAddr).any(sql)
}

userService.readUser = (id) => {
    const sql = 'SELECT * FROM users WHERE id=$[id]'
    return getDbConnect(dbAddr).one(sql,{id})
}

userService.createUser = (username) =>{
    const sql = 'INSERT INTO users (username) VALUES ($[username]) RETURNING id'
    return getDbConnect(dbAddr).one(sql,{username})
}

module.exports = {userService}