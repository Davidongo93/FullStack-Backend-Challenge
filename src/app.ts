import express, { Express, Request, Response, NextFunction } from "express";
import morganMiddleware from "./middleware/morganMiddleware";

const app: Express = express();

app.use(morganMiddleware());

app.get('/', (req:Request, res:Response) => {
    res.send('Hello World!')
  })



export default app;
