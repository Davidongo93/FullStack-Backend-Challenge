import express, { Express, Request, Response, NextFunction } from "express";
import morganMiddleware from "./middleware/morganMiddleware";
import errorHandlerMiddleware from "./middleware/errorHandlingMiddleware";
import cors from "cors";

const app: Express = express();

//Logging Middleware
app.use(morganMiddleware());

app.use(cors());

app.get('/', (req:Request, res:Response) => {
    res.send('Hello World!')
  });

// Error Catching Endware
app.use(errorHandlerMiddleware);



export default app;
