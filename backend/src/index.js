//nao usar isso aqui, usar o index.ts

const express = require("express")
require("dotenv").config()

const PORT = process.env.PORT ?? 4456
const app = express()

app.get("/", (req,res) =>{
    res.send("salve");
})

app.listen(PORT, ()=>{
    console.log(`api rodando na porta ${PORT}`)
})

//app.listen(3456)


//docker build -t myapp_nomedaimagem .
//docker run -p3457:3456 myapp


//npx create-next-app@latest frontend