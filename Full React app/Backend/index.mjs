import express from "express";
import db from './config/db.mjs'
import routes from './routes/index.mjs'


const app = express()

db.connection.once('open', () => console.log("connected to db")).on("error", (err) => console.log("error connecting db -->", err))

app.listen(3001 , function () {
    console.log('Server is running at port 3001');
})

app.use(express.json())

app.use('/' , routes)