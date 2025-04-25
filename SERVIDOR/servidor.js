var http = require('http');
var express = require('express');

//variavel app
var app = express();

// metodo use
app.use(express.static('./public'));

//cria servidor
var server = http.createServer(app);

//numero da porta do servidor
server.listen(3000);

//msg exibida no console
console.log("servidor rodando...");