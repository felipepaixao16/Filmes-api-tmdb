require('dotenv').config()

const express = require("express");
const app = express();

const dbHost = process.env.DB_HOST;
const dbPort = process.env.DB_PORT;
const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

const databaseUrl = `mysql://${dbUser}:${dbPassword}/${dbHost}:${dbPort}/${dbName}`;

const port = process.env.PORT || 5500;

app.get("/", function (req, res) {
    res.send ("Bem vindo ao D1-Filmes!", databaseUrl)
});

const variavelDoHost = process.env.DB_HOST;
