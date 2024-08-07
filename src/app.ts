import express from 'express';
import cors from 'cors';
import router from './app/route/route';
import handleError from './app/middleware/globalErrorHandling';
import notFound from './app/middleware/notFound';

const app = express();

app.use(express.json());
app.use(cors());

//application routes
app.use("/api",router)


app.use(handleError)
app.use(notFound)


export default app;
