import express  from 'express'
import bodyParser from 'body-parser'
import { port } from './config.js'
import userRouter from './routes/users.routes.js'
import morgan from  'morgan'

// >
const app = express();

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true
    })
)

app.use(userRouter)


app.listen(port, () => {
    console.log("server listening on port 5000");
})