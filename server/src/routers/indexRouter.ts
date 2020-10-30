import { Router, Request, Response } from 'express'


class IndexRouter {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/' , (req: Request, res: Response) => res.json('Welcome app').status(200))
    }
}

const indexRouter = new IndexRouter();

export default indexRouter.router;