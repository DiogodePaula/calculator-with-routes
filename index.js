const express = require("express");

const server = express();

server.use(express.json());

//variaveis
let number1;
let number2;

server.get("/", (req,res) =>{
    return res.json({
        result: "Bem vindo a calculadora"
    });
});

server.post("/numbers", (req,res) => {
    number1 = req.body.number1;
    number2 = req.body.number2;

    return res.json({
        require: "dados recebidos com sucesso",
        number1,
        number2
    });
});

server.get("/soma", (req,res) =>{
    const resultado = number1 + number2;

    return res.json({resultado});
});

server.get("/subtrair", (req,res) =>{
    const resultado = number1 - number2;

    return res.json({resultado});
});

server.get("/multiplicar", (req,res) =>{
    const resultado = number1 * number2;

    return res.json({resultado});
});

server.get("/dividir", (req,res) =>{
    const resultado = number1 / number2;

    return res.json({resultado});
});

server.put("/numbers", (req,res) =>{
    number1 = req.body.number1;
    number2 = req.body.number2;

    return res.json({
        result: "Numeros atualizados com sucesso"
    });
});

server.listen(3000);