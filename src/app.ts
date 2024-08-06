import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

//application routes
//app.use("/api/v1/students",StudentRoutes)

export default app;
