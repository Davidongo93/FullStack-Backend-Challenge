import { Request, Response } from 'express';
import getUserRepositories from '../controllers/getUserRepositoriesController';

const getUserRepositoriesHandler = async (req:Request, res:Response): Promise<void> => {
    try {
      const {user}: {user:string} = req.query as { user: string };
      if (!user) {
        throw new Error('User parameter is missing');
      }
      const response = await getUserRepositories(user);
      res.status(200).json(response);
    } catch (error:any) {
      console.trace(error);
      res.status(404).json({ error: error.message });
    }
  };
  
  export default getUserRepositoriesHandler;
