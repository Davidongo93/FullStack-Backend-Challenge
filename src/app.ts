import express, { Express, Request, Response, NextFunction } from "express";

const app: Express = express();

app.get('/', (req, res) => {
    res.send('Hello World!')
  })



export default app;
