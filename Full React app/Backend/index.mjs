import express from "express";
import db from './config/db.mjs'
import routes from './routes/index.mjs'
import cors from 'cors'


const app = express()

db.connection.once('open', () => console.log("connected to db")).on("error", (err) => console.log("error connecting db -->", err))

app.use(cors({ origin: 'http://localhost:5173' }));


  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:5173");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.listen(3001 , function () {
    console.log('Server is running at port 3001');
})

app.use(express.json())

app.use('/' , routes)