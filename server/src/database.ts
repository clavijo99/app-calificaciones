import mongoose from 'mongoose';
import config from './config';

class Database {

    private MONGODB_URI = `mongodb://${config.MONGODB_HOST}/${config.MONGODB_DATABASE}`;
    constructor() { }

    async start(): Promise<boolean | any> {
        let status: boolean = false;
        await mongoose.connect(this.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
        }
        ).then((db) => status = true)
            .catch((err) => status = false);
        return status;
    }
}

const database = new Database();

export default database;