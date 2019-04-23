const {getDbConnect} = require('./dbConnect')
const {dbAddr} = require('./config')
const commentService = {}

commentService.readAllcomments = (show_id) => {
    const sql = 'SELECT * FROM comments WHERE show_id=$[show_id]'
    return getDbConnect(dbAddr).any(sql,{show_id})
}

commentService.createComment = (comment_body,user_id,show_id) =>{
    const sql = 'INSERT INTO comments (comment_body,user_id,show_id) VALUES ($[comment_body],$[user_id],$[show_id]) RETURNING id'
    return getDbConnect(dbAddr).one(sql,{comment_body,user_id,show_id})
}

module.exports = {commentService}