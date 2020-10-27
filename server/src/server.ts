import app from './app';
import config from './config';
import db from './database';

db(config.db);


app.listen(config.port , () => {
    console.log(`server running on port ${config.port}`)
})
