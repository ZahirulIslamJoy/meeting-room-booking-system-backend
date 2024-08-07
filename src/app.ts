import express from 'express';
import cors from 'cors';
import { UserRoutes } from './app/modules/user/user.route';

const app = express();

app.use(express.json());
app.use(cors());

//application routes
app.use("/api/auth",UserRoutes)


export default app;
