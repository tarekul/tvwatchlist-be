const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

const {userRoute} = require('./routes/userRouter')
const {showRoute} = require('./routes/showRouter')
const {genreRoute} = require('./routes/genreRouter')
const {commentRoute} = require('./routes/commentRouter')


app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use('/user',userRoute)
app.use('/show',showRoute)
app.use('/genre',genreRoute)
app.use('/comment',commentRoute)

app.listen(8000,()=>{
    console.log(`listening on 8000`)
})