
import  { Schema, model} from 'mongoose';


class AdminModel {
    public adminSchema: Schema | any;
    constructor() {
        this.config();
    }

    config(): void {
        this.adminSchema = new Schema({
            name: String,
            id: String
        })
    }

}

const admin= new AdminModel();

export default model('usersAdmin', admin.adminSchema);


/*
import mongoose from 'mongoose'

const Schema = mongoose.Schema;


const AdminSchema = new Schema({
    name: String,
    id: String
})

export default mongoose.model('user' , AdminSchema)
*/