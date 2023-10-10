import dotenv from "dotenv"
import express from "express"

import configViewEngine from "./configs/viewEngine.js"

import initWebRoute from './route/webRoute.js' 

const postsRouter = require('./route/webApiRoute.js')

import path from 'path'
import bodyParser from "body-parser"
import session from 'express-session'
import { request } from "http"
const app = express()

dotenv.config()

const port = process.env.PORT

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


//api
app.use("/api/v1/posts",postsRouter)
app.use(express.json())


app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
  }))

configViewEngine(app)

app.use(express.static(path.join('./src/public')))

//xu ly yeu cau user
//khoi tao router duong dan 
// initWebApiRoute(app)
initWebRoute(app)



//tra ve thong bao loi khi url k ton tai
app.get('*', (req, res) => {
    res.status(404).send('Lỗi 404, không tìm thấy trang');
  });

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})