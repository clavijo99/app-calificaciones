"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const admin_controller_1 = __importDefault(require("../../controllers/user/admin.controller"));
class AdminRouters {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', admin_controller_1.default.allAdmin);
        this.router.get('/:id', admin_controller_1.default.allAdminById);
        this.router.post('/', admin_controller_1.default.CreateAdmin);
        this.router.delete('/:id', admin_controller_1.default.DeleteAmind);
    }
}
const adminRouter = new AdminRouters();
exports.default = adminRouter.router;
