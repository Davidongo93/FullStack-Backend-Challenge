import { Router, Express, Request, Response } from 'express';
import repositoryRouter from './repositoryRouter';

const router = Router();
router.get('/', (req:Request, res:Response) => {
    res.send('Hello World!')
  });
router.use('/repository', repositoryRouter);


export default router;
