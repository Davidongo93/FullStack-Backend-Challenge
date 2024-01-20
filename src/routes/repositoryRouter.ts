import { Router, Request, Response } from 'express';

const router = Router();
router.get('/user-repositories')
router.get('/', (req: Request, res: Response) => {
  res.send('Repository Route');
});

export default router;
