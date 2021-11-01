const express = require("express")
const { appendFile } = require("fs")
require("dotenv").config()

const autRouter = require("./routers/auth.router")
const PORT = process.env.PORT

const path = require("path")

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.set("view engine", "ejs") //library views
app.set("views", path.join(__dirname, "views"))// lokasi penyimpanan form views

app.use(autRouter)

app.listen(PORT, () => {
    console.log(`Server Run in port ${PORT}`)
})