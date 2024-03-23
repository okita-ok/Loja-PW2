import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import { v4 as uuidv4 } from 'uuid';
import session from 'express-session';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerFile from './swagger-output.json';

import validateEnv from './utils/validateEnv';
import router from './router/index';
import setCookieLang from './middleware/setCookieLanguage';
import setCarrinho from './middleware/setCarrinho';
//colocar aqui os imports do swager

declare module 'express-session' {
  interface SessionData {
    uid: string;
    tipoUsuarioId: string;
  }
}

dotenv.config();
validateEnv();

const PORT = process.env.PORT ?? 3344;
const app = express();

app.use(cors({ credentials: true, origin: 'http://localhost:4466' }));
app.use(morgan(':date[iso] :url :method'));
app.use(express.json());
app.use(cookieParser());
app.use(setCookieLang);
app.use(setCarrinho);

app.use(
  session({
    genid: (req) => uuidv4(),
    secret: 'Dm#h@emSo@Sm@A434Ma',
    resave: true,
    saveUninitialized: true,
  }),
);
app.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(router);

app.use('/img', express.static(`${__dirname}/../public`));

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

//docker exec -it loja_backend npx prisma migrate dev --name "criacao-tabela-produto"
//dbeaver, (colocar 'loja' no database e senha 123456 e port 3336)

//-------------------------------

// const accessLogStream = fs.createWriteStream(
//   path.join(__dirname, 'acessos.log'),
//   { flags: 'a' },
// );

// app.use(morgan(':date[iso] :url :method', { stream: accessLogStream }));
