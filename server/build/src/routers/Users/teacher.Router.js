"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const teacher_controllers_1 = __importDefault(require("../../controllers/user/teacher.controllers"));
class TeacherRouter {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', teacher_controllers_1.default.all);
        this.router.post('/', teacher_controllers_1.default.CreateTeacher);
    }
}
const teacherRouter = new TeacherRouter();
exports.default = teacherRouter.router;
