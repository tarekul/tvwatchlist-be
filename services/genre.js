const {getDbConnect} = require('./dbConnect')
const {dbAddr} = require('./config')
const genreService = {}

genreService.readAllgenres = () => {
    const sql = 'SELECT * FROM genres'
    return getDbConnect(dbAddr).any(sql)
}

genreService.readGenres = (id) => {
    const sql = 'SELECT * FROM genres WHERE id=$[id]'
    return getDbConnect(dbAddr).one(sql,{id})
}

module.exports = {genreService}