import express from 'express';
import { getOng } from '../model/functions.js';
export const server = express()
const adm = import ("../model/functions.js") 

//Rotas
server.get('/ongs', (request, response) => adm.getOng  (request, response));
server.get('/users', (request, response) => adm.getUser  (request, response));
server.get('/deficiency', (request, response) => adm.getDeficiency  (request, response));
 

