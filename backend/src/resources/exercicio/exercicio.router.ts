import { Router, Request, Response } from 'express';
import { LoremIpsum } from 'lorem-ipsum';

const router = Router();

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

router.get('/', (req: Request, res: Response) => {
  res.send('framengo');
});

// esse ':' meio que transforma em uma variavel acessavel
router.get('/bemvindo/:nome', (req: Request, res: Response) => {
  const nome = req.params.nome;
  res.send(`Bem-vinde ${nome}`);
});

router.get('/lorem/:qtd', (req: Request, res: Response) => {
  res.send(
    lorem
      .generateParagraphs(parseInt(req.params.qtd))
      .replace(/\n/g, '<br><br>\n'),
  );
});

export default router;
