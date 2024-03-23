// versao antiga - geradora de logs com o morgan

import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import fs from 'fs';
import path from 'path';

import validateEnv from '../src/utils/validateEnv'; //cuidado com esse path

dotenv.config();
validateEnv();

const PORT = process.env.PORT ?? 3344;
const app = express();

//app.use(morgan('short')); // funcao retorna um middleware

const accessLogStream = fs.createWriteStream(
  path.join(__dirname, 'acessos.log'),
  { flags: 'a' },
);

morgan.token('simples', function (req) {
  return (new Date().toISOString(), req.url, req.method)?.toString();
});
app.use(morgan('simples', { stream: accessLogStream }));

app.get('/', (req, res) => {
  res.send('framengo');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
