import { Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import { readProduto } from '../produto/produto.service';

const listaCarrinho = (req: Request, res: Response) => {
  const cart = req.cookies['cart'];
  res.status(StatusCodes.OK).json(cart);
};

const adicionaItem = async (req: Request, res: Response) => {
  const cart = req.cookies['cart'];
  const { id } = req.params;
  try {
    const produto = await readProduto(id);
    let resultado = '';
    if (!produto)
      return res.status(StatusCodes.NOT_FOUND).json(ReasonPhrases.NOT_FOUND);
    if (cart.toString() === 'Carrinho_Vazio') {
      resultado = produto['nome'] + ' -> R$' + produto['preco'] + ' / ';
    } else
      resultado = cart.concat(
        produto['nome'] + ' -> R$' + produto['preco'] + ' / ',
      ); //nenhuma quebra de linha funcionou
    res.cookie('cart', resultado);
    res.status(StatusCodes.OK).json(resultado);
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
};

const removeItem = (req: Request, res: Response) => {};

export default { listaCarrinho, adicionaItem, removeItem };
