const {getDbConnect} = require('../services/dbConnect')
const {dbAddr} = require('../services/config')
const showService = {}

showService.readAllShows = () => {
    const sql = 'SELECT shows.*,users.username FROM shows JOIN users on shows.user_id=users.id'
    return getDbConnect(dbAddr).any(sql)
}

showService.readShowWuser_id = (user_id) => {
    const sql = 'SELECT shows.*,genres.genre_name FROM shows JOIN genres ON shows.genre_id=genres.id WHERE user_id=$[user_id]'
    return getDbConnect(dbAddr).any(sql,{user_id})
}

showService.readShowWgenre_id = (genre_id) => {
    const sql = 'SELECT * FROM shows WHERE genre_id=$[genre_id]'
    return getDbConnect(dbAddr).any(sql,{genre_id})
}

showService.readShow = (id) =>{
    const sql = 'SELECT shows.*,genres.genre_name FROM shows JOIN genres ON shows.genre_id=genres.id WHERE shows.id=$[id]'
    return getDbConnect(dbAddr).one(sql,{id})
}

showService.createShow = (title,img_url,user_id,genre_id) =>{
    const sql = 'INSERT INTO shows (title,img_url,user_id,genre_id) VALUES ($[title],$[img_url],$[user_id],$[genre_id]) RETURNING id'
    return getDbConnect(dbAddr).one(sql,{title,img_url,user_id,genre_id})
}

module.exports = {showService}