import {Schema, model } from 'mongoose';


class TeacherModel {

    public teacherSchema: Schema | any;

    constructor() {
        this.config();
    }

    config(): void {
        this.teacherSchema = new Schema({
            name: String,
            clase: [{
                name: String,
                materias: []
            }]
        })
    }

}

const teacherModel = new TeacherModel();
export default model('UsersTeacher', teacherModel.teacherSchema);