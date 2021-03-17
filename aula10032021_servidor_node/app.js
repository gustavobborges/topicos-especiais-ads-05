const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public/'));

app.get("/", function(req, res) {
    res.send("Página Inicial");
})

app.get("/sobre", function(req, res) {
    res.send("Página sobre")
})

app.get("/hello/:nome", function(req, res) {
    res.send("Bom dia" + req.params.nome)
})

app.get("/formulario", function(req, res) {
    res.sendFile(__dirname + '/html/index.html')
})



app.listen(5000, function() {
    console.log("Servidor rodando na porta 5000!")
})
