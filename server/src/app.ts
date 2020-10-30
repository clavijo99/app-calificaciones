import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import config from './config';
import indexRouter from './routers/indexRouter';
import adminRouter from './routers/Users/adminRouter';
import teacherRouter from './routers/Users/teacher.Router';

class App {
    app: Application;
    constructor() {
        this.app = express();
        this.config();
        this.router();
    }

    config(): void {
        this.app.set('port', config.PORT);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
    }

    router(): void {
        this.app.get('/' , (req, res) => res.json('welcome'))
        this.app.use('/admin' , adminRouter)
        this.app.use('/teacher' , teacherRouter);
        this.app.use('/info', indexRouter);
    }
}

const app = new App();

export = app.app;