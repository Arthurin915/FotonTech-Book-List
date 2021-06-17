import express, { json } from 'express';
import cors from 'cors'
import router from './routes/auth';

const server = express()

server.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    preflightContinue: false
}))


server.use(json())

server.get('/', (req: express.Request, res: express.Response) => {
    res.status(200).json({
        status: "pass"
    })
})

server.use(router);

export default server