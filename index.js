const express = require("express")

const server = express()

server.use(express.json())

const pessoas = ["Ryan", "Igor", "José", "Carlos"]

// Retorna todos as pessoas
server.get("/pessoas/", (req, res)=>{
    return res.json(pessoas)
})

// Retorna uma pessoa
server.get("/pessoas/:index", (req, res)=>{
    const { index } = req.params

    return res.json(pessoas[index])
})

// Criar uma nova pessoa
server.post("/pessoas/", (req, res)=>{
    const { name } = req.body
    pessoas.push(name)

    return res.json(pessoas)
})

// Atualizar pessoas
server.put("/pessoas/:index", (req, res)=>{
    const { index } = req.params
    const { name } = req.body

    pessoas[index] = `${name}`
    return res.json(pessoas)
})

server.delete("/pessoas/:index", (req,res)=>{
    const { index } = req.params

    pessoas.splice(index, 1)
    return res.json({ message: "A pessoa foi deletada" })
})

server.listen(3000)