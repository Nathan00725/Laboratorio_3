//const express = require('express');
import  express  from "express";
import { pokemon } from './routes/apiPokemon.js'
import { Tipo } from './routes/apiTipo.js';
import { Entrenador} from "./routes/apiEntrenador.js";

const app = express();

//middlewares

app.use(express.json());

const port = 5000;

app.use('/api/pokemon', pokemon)
app.use('/api/tipo', Tipo);
app.use('/api/entrenador', Entrenador)

app.listen(port, ()=>{

    console.log(`Escuchando en el puerto ${port} `);
});