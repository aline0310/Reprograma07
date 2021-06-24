const { response } = require("express")
const express = require("express")

const app = express()

const filmes = require("./data/ghibli.json")

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})

app.get("/", (request, response) => {
    response.status(200).send("Salve! <3")
})

app.get("/filmes", (request, response) => {
    response.status(200).send(filmes)
})

app.get("/filmes/:identificacao", (request, response) => {
   const idRequisitado = request.params.identificacao
   console.log(idRequisitado)
   
      response.status(200).send(filmes.find(filme => filme.id == idRequisitado))
})