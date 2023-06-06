import express, { NextFunction, Request, Response } from 'express';
import dotenv from 'dotenv';
import validateEnv from './utils/validateEnv';
import logger from './middleware/logger';
import router from './router/router';
import { engine } from 'express-handlebars';
//import sass from 'node-sass-middleware';

dotenv.config();
validateEnv();

const PORT = process.env.PORT ?? 3333;
const app = express();
const publicPath = `${process.cwd()}/public`;

app.engine(
  'handlebars',
  engine({ helpers: require(`${__dirname}/views/helpers/helpers.ts`) }),
);
app.set('view engine', 'handlebars');
app.set('views', `${__dirname}/views`);

/*
app.use(
  sass({
    src: `${__dirname}/../public/scss`,
    dest: `${__dirname}/../public/css`,
    outputStyle: 'compressed',
    prefix: '/css',
  }),
);
*/
app.use('/css', express.static(`${__dirname}/../public/css`));

app.use(router);

app.use(logger('simples'));
app.use(logger('completo'));

app.use('/css', express.static(`${publicPath}/css`));
app.use('/js', express.static(`${publicPath}/js`));
app.use('/img', express.static(`${publicPath}/img`));

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`Requisição ${req.method} ${req.url}`);
  next();
});

app.listen(PORT, () => [console.log(`Servidor rodando na porta ${PORT}`)]);
