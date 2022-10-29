require('dotenv').config();
const express = require('express');
const routes = require("./routes/index");
const bodyParser = require('body-parser');
const connectToDb = require("./database/db");

connectToDb();
const app = express();
const port = process.env.PORT;

app.use(express.urlencoded()) // receber formulario atraves do body
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(routes);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
});