import app from './app';
import databa from './database';

class Server {

    private tempo = 5;

    constructor() { }

    async StrartDatabase(): Promise<void> {
        const status = await databa.start();
        if (status) {
            console.log('database running');
            this.start();
        } else if (this.tempo == 0) { console.log('tiempo agotado'); return }
        else {
            console.log('intentando conectar con la base de datos');
            this.tempo--;
            this.StrartDatabase();
        }
    }

    start(): void {
        app.listen(app.get('port'), () => {
            console.log(`server running on port ${app.get('port')}`);
        })
    }
}

const server = new Server();
server.StrartDatabase();