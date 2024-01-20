import express, { Express, Request, Response, NextFunction } from "express";
import cors from "cors";
import morganMiddleware from "./middleware/morganMiddleware";
import errorHandlerMiddleware from "./middleware/errorHandlingMiddleware";
import configureBodyParsers from "./middleware/bodyParsersMiddleware";
import configureCookieParser from "./middleware/cookieParserMiddleware";

const app: Express = express();

// Logging Middleware
app.use(morganMiddleware());
// This is CORS-enabled for all origins!
app.use(cors());
// Configure body parsers and cookie parsers.
configureBodyParsers(app);
configureCookieParser(app);

app.get('/', (req:Request, res:Response) => {
    res.send('Hello World!')
  });

// Error Catching Endware
app.use(errorHandlerMiddleware);



export default app;
