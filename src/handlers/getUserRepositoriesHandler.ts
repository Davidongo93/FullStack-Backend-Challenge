import { Request, Response } from 'express';
const getUserRepositoriesHandler = async (req:Request, res:Response): Promise<void> => {
    try {
      const {user}: {user:string} = req.query as { user: string };
      if (!user) {
        throw new Error('User parameter is missing');
      }
      res.status(200).json(user);
    } catch (error:any) {
      console.trace(error);
      res.status(404).json({ error: error.message });
    }
  };
  
  export default getUserRepositoriesHandler;
