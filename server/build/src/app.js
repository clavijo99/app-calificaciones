"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const config_1 = __importDefault(require("./config"));
const indexRouter_1 = __importDefault(require("./routers/indexRouter"));
const adminRouter_1 = __importDefault(require("./routers/Users/adminRouter"));
const teacher_Router_1 = __importDefault(require("./routers/Users/teacher.Router"));
class App {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.router();
    }
    config() {
        this.app.set('port', config_1.default.PORT);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    router() {
        this.app.get('/', (req, res) => res.json('welcome'));
        this.app.use('/admin', adminRouter_1.default);
        this.app.use('/teacher', teacher_Router_1.default);
        this.app.use('/info', indexRouter_1.default);
    }
}
const app = new App();
module.exports = app.app;
