import express from 'express';
import { Express } from 'express';
import loginRoutes from './Routes/login.routes';

const app:Express = express();

app.use(express.json());
app.use(loginRoutes);

export default app;