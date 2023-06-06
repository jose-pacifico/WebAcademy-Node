import { Request, Response } from 'express';

const publicPath = `${process.cwd()}/public`;

const index = (req: Request, res: Response) => {
  res.send('Welcome to Web Academy');
};

const lorem = (req: Request, res: Response) => {
  res.sendFile(`${publicPath}/html/index.html`);
};

const hb1 = (req: Request, res: Response) => {
  res.render('main/hb1', {
    mensagem: 'Olá, você está aprendendo Express + HBS!',
    layout: false,
  });
};

const hb2 = (req: Request, res: Response) => {
  const profes = [
    { nome: 'David Fernandes', sala: 1238 },
    { nome: 'Horácio Fernandes', sala: 1233 },
    { nome: 'Edleno Moura', sala: 1236 },
    { nome: 'Elaine Harada', sala: 1231 },
  ];
  res.render('main/hb2', { profes });
};

const hb3 = (req: Request, res: Response) => {
  res.render('main/hb3', {
    poweredByNodejs: true,
    name: 'Express',
    type: 'Framework',
  });
};

const hb4 = (req: Request, res: Response) => {
  const profs = [
    { nome: 'David Fernandes', sala: 1238 },
    { nome: 'Horácio Fernandes', sala: 1233 },
    { nome: 'Edleno Moura', sala: 1236 },
    { nome: 'Elaine Harada', sala: 1231 },
  ];
  res.render('main/hb4', { profs });
};

export default { index, lorem, hb1, hb2, hb3, hb4 };
