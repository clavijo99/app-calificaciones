"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const teacher_model_1 = __importDefault(require("../../models/user/teacher.model"));
class TeacherController {
    all(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const teacher = yield teacher_model_1.default.find({}, (err, response) => {
                if (err) {
                    res.json('erro');
                }
                else {
                    res.json(response);
                }
            });
        });
    }
    CreateTeacher(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = req.body;
            const teacher = new teacher_model_1.default(data);
            teacher.save();
            res.json(data);
        });
    }
}
const teacherController = new TeacherController();
exports.default = teacherController;
