import express from 'express';
import cors from 'cors';
import router from './app/route/route';

const app = express();

app.use(express.json());
app.use(cors());

//application routes
app.use("/api",router)


export default app;
