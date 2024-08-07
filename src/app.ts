import express from 'express';
import cors from 'cors';
import router from './app/route/route';
import handleError from './app/middleware/globalErrorHandling';

const app = express();

app.use(express.json());
app.use(cors());

//application routes
app.use("/api",router)


app.use(handleError)


export default app;
