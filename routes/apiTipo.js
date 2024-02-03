import express from "express";
const Tipo= express();

import {getTipo, postTipo, putTipo, deleteTipo} from "../controller/tipoController.js";

Tipo.get('', getTipo);
Tipo.post('', postTipo);
Tipo.put('/:id', putTipo);
Tipo.delete('/:id', deleteTipo);

export {Tipo}