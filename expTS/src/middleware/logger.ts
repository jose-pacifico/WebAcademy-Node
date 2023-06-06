import { Request, Response, NextFunction } from 'express';
import { Tipo } from './loggerTypes';
import fs from 'fs';

function logger(tipo: Tipo) {
  return (req: Request, res: Response, next: NextFunction) => {
    if (tipo === 'simples') {
      writeLog(
        `LOG SIMPLES: ${new Date().toISOString()}, ${req.url}, ${req.method}\n`,
      );
      next();
    } else {
      writeLog(
        `LOG COMPLETO: ${new Date().toISOString()}, ${req.url}, ${
          req.method
        }, ${req.httpVersion}, ${req.get('User-Agent')}\n`,
      );
      next();
    }
  };
}

function writeLog(message: string) {
  const logFilePath = './log/logs.log';

  fs.appendFile(logFilePath, message, (error) => {
    if (error) {
      console.error('Erro ao escrever o log:', error);
    }
  });
}

export default logger;
