const express = require("express"); //importando express
const bodyParser = require("body-parser"); //importando body-parser

const app = express(); //criando (instanciando) o app
const port = 3000; //definindo a porta do servidor

app.use(bodyParser.json()); //usando o body-parser para parsear o corpo das requisições
//app.use(bodyParser.urlencoded({ extended: true })); //usando o body-parser para parsear o corpo das requisições

app.use((req, res, next) => { //middleware para logar as requisições
    console.log(`${new Date().toISOString()} : ${req.method} : ${req.originalUrl}`) // função para logar as requisições
    next(); //função para continuar a execução do middleware
})

let subscriptions = []; //array para armazenar as inscrições

app.listen(port, () => { //iniciando o servidor
    console.log(`Servidor rodando na porta ${port}`); //mensagem de sucesso
})

app.get("/subscription", (req, res) => { //rota para listar todas as inscrições
    res.json(subscriptions); //resposta em json
})

app.post("/subscription", (req, res) => { //rota para criar uma inscrição
    const { id, name, email, phone} = req.body; //pegando os dados do corpo da requisição
    const newSubscription = { id, name, email, phone }; //criando uma nova inscrição

    subscriptions.push(newSubscription); //adicionando a nova inscrição ao array

    res.status(201).json(subscriptions); //resposta em json com status 201 (created)
})

// Edita as informações de uma inscrição
app.put("/subscription/:id", (req, res) => { //rota para editar uma inscrição
    const id = req.params.id; //pegando o id da inscrição
    const { name, email, phone} = req.body; //pegando os dados do corpo da requisição

    const index = subscriptions.findIndex(subscriptions => subscriptions.id == id); //encontrando o índice da inscrição
    if(index !== -1) {
        subscriptions[index] = { id, name, email, phone }; //atualizando a inscrição
        res.json(subscriptions); //resposta em json
    } else {
        res.status(404).send("Inscrição não encontrada"); //resposta em json com status 404 (not found)
    }

})

// Deleta uma inscrição
app.delete("/subscription/:id", (req, res) => { //rota para editar uma inscrição
    const id = req.params.id; //pegando o id da inscrição

    const index = subscriptions.findIndex(subscriptions => subscriptions.id == id) //encontrando o índice da inscrição
    if(index !== -1) {
        subscriptions.splice(index, 1)
        res.sendStatus(204);
    } else {
        res.status(404).send("Inscrição não encontrada"); //resposta em json com status 404 (not found)
    }

})

//app.listen(port, () => { //iniciando o servidor
    //console.log(`Servidor rodando na porta ${port}`); //mensagem de sucesso
//});
