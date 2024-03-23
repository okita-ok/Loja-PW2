import { NextFunction, Request, Response } from 'express';

const setCarrinho = (req: Request, res: Response, next: NextFunction) => {
  if (!('cart' in req.cookies)) res.cookie('cart', 'Carrinho_Vazio');
  next();
};

export default setCarrinho;
