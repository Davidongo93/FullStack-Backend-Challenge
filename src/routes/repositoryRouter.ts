import { Router, Request, Response } from 'express';
import getUserRepositoriesHandler from '../handlers/getUserRepositoriesHandler';

const router = Router();

router.get('/user-repositories', getUserRepositoriesHandler);

router.get('/', (req: Request, res: Response) => {
  res.send('Repository Route');
});

export default router;
