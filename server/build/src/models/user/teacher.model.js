"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
class TeacherModel {
    constructor() {
        this.config();
    }
    config() {
        this.teacherSchema = new mongoose_1.Schema({
            name: String,
            clase: [{
                    name: String,
                    materias: []
                }]
        });
    }
}
const teacherModel = new TeacherModel();
exports.default = mongoose_1.model('UsersTeacher', teacherModel.teacherSchema);
