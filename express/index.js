const express = require("express");
require("dotenv").config()

const PORT = process.env.PORT ?? 3333;
const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to Web Academy")
})

app.listen(PORT, () => [
    console.log(`Servidor rodando na porta ${PORT}`)
])