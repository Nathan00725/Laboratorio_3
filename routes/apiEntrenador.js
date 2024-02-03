import express from "express";
const Entrenador= express();

import {getEntrenador, postEntrenador, putEntrenador, deleteEntrenador} from "../controller/entrenadorController.js";

Entrenador.get('', getEntrenador);
Entrenador.post('', postEntrenador);
Entrenador.put('/:id', putEntrenador);
Entrenador.delete('/:id', deleteEntrenador);

export {Entrenador}