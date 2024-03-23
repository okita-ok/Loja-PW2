import { Router } from 'express';
import carrinhoController from './carrinho.controller';

const router = Router();

router.get('/', carrinhoController.listaCarrinho);
router.post('/:id', carrinhoController.adicionaItem);
router.delete('/:id',carrinhoController.removeItem);

export default router;
