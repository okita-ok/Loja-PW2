import { Router } from 'express';
import languageController from './language.controller';
import languageSchema from './language.schema';
import validate from '../../middleware/validate';

const router = Router();

router.post('/', validate(languageSchema), languageController.changeLanguage);

export default router;
