import express from 'express'
import morgan from 'morgan'
import cookieParser from 'cookie-parser';
import {router} from "./routes/auth.routes.js";
import routerTask from "./routes/task.routes.js";
import cors from 'cors';

const app = express()
app.use(morgan('dev'))
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin:'http://localhost:5173',
    credentials: true
}))

app.use("/api",router);
app.use("/api", routerTask);



export default app;