import { Router } from 'express';
import produtoController from './produto.controller';
import produtoSchema from './produto.schema';
import validate from '../../middleware/validate';
import isAdmin from '../../middleware/isAdmin';

const router = Router();

router.get('/', produtoController.index);
router.post('/', isAdmin, validate(produtoSchema), produtoController.create);
router.get('/:id', produtoController.read);
router.put('/:id', isAdmin, produtoController.update);
router.delete('/:id', isAdmin, produtoController.remove);

export default router;
