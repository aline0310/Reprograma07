const { EALREADY } = require("constants")
const express = require("express")

const app = express()

const statesAll = require("./data/estados-cidades.json")

app.get("/", (request, response) => {
   response.status(200).send({"mensagem": "É ela: a Phizer!" })
})

app.get("/estados/todos", (request, response) => {
    response.status(200).send(statesAll)
})

app.get("/estados/:sigla", (request, response) => {
   const siglaRequisitada = request.params.sigla
   console.log(siglaRequisitada)

response.status(200).send(statesAll.find(estado => estado.sigla == siglaRequisitada))
   
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})



