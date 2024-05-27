const express = require("express")

const server = express()

server.use(express.json())

const pessoas = ["Ryan", "Igor", "José", "Carlos"]

// Retorna todos os cursos
server.get("/pessoas/", (req, res)=>{
    return res.json(pessoas)
})

// Retorna um curso
server.get("/pessoas/:index", (req, res)=>{
    const { index } = req.params

    return res.json(pessoas[index])
})

server.listen(3000)