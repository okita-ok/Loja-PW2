import { Router } from 'express';
import produtoRouter from '../resources/produto/produto.router';
import exercicioRouter from '../resources/exercicio/exercicio.router';
import languageRouter from '../resources/language/language.router';
import usuarioRouter from '../resources/usuario/usuario.router';
import authRouter from '../resources/auth/auth.router';
import carrinhoRouter from '../resources/carrinho/carrinho.router';

const router = Router();

router.use(
  '/produto',
  // #swagger.tags = ['Produto']
  produtoRouter
);
router.use(
  '/carrinho',
  // #swagger.tags = ['Carrinho']
  carrinhoRouter
);
router.use(
  '/',
  // #swagger.tags = ['Auth']
  authRouter
);
router.use(
  '/language',
  // #swagger.tags = ['Language']
  languageRouter
);
router.use(
  '/usuario',
  // #swagger.tags = ['Usuario']
  usuarioRouter
);
router.use(
  '/exercise',
  // #swagger.tags = ['Exercise']
  exercicioRouter
);

export default router;
