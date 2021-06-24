//criar porta
//criar rota
//http request
//enviar response

const { response } = require("express")
const express = require("express")
const app = express()

app.get("/", (request, response) => {
    response.status(200).json("Salve! <3")
    console.log('oi')
})

app.get("/jurema", (request, response) => {
    console.log('Url jurema foi requerida')
    response.status(200).json([
       {
           "nome": "Jurema",
           "idade": "adulta"
       },
       {
           "dona": "Vitoria",
           "idade": "4 meses"
       }
    ])
})

app.listen(3000,() => {
    console.log('Meu primeiro servidor rodando na porta 3000')
} )