import express, { Application } from 'express'

class Server {

    app: Application;
    constructor() {
        this.app = express();
        this.config();
        this.router();
    }

    config(): void {
        this.app.set('port' , process.env.PORT || 3000);
    }

    router(): void {

    }

    start(): void {
        this.app.listen(this.app.get('port') , () => {
            console.log(`server running on port ${this.app.get('port')}`);
        })
    }
}

const server = new Server();
server.start();