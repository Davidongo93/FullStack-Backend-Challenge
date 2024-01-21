import { Express } from 'express';
import * as cookieParser from 'cookie-parser';

const configureCookieParser = (server: Express) => {
  server.use(cookieParser());
};

export default configureCookieParser;
