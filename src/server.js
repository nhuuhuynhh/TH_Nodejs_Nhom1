import express from "express"
import dotenv from "dotenv"

import configViewEngine from "./configs/viewEngine"
import initWebRoutes from "./routes/webRoute"

dotenv.config()

import path from 'path'

const app = express()

configViewEngine(app)

initWebRoutes(app)

app.use('/static', express.static(path.join(__dirname,'public')))


const port = process.env.PORT || 4444

//tra ve thong bao loi khi url k ton tai


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})