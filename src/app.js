import logger from 'morgan';
import express from 'express';
import cookieParser from 'cookie-parser';

//Routes

import real_time_attributes from './routes/real_time_attributes';

const app = express();

//Middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//Routes
app.use(real_time_attributes);

export default app;