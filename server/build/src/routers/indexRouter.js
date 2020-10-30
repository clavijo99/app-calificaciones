"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class IndexRouter {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => res.json('Welcome app').status(200));
    }
}
const indexRouter = new IndexRouter();
exports.default = indexRouter.router;
