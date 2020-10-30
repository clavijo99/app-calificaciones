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
const admin_model_1 = __importDefault(require("../../models/user/admin.model"));
class AdminController {
    allAdmin(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const admin = yield admin_model_1.default.find({}, function (err, response) {
                if (err) {
                    res.json('erro');
                }
                else {
                    res.json(response);
                }
            });
        });
    }
    allAdminById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield admin_model_1.default.find({ id: id }, (err, response) => {
                if (err) {
                    res.json(err);
                }
                if (response[0] == null) {
                    res.json(null);
                }
                else {
                    res.json(response[0]);
                }
            });
        });
    }
    CreateAdmin(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = req.body;
            const usu = new admin_model_1.default(data);
            usu.save();
            res.json({ status: 'exelent' });
        });
    }
    DeleteAmind(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield admin_model_1.default.deleteMany({ id: id }, (err) => {
                if (err) {
                    res.json(err);
                }
                else {
                    res.json('user delect');
                }
            });
        });
    }
}
const adminController = new AdminController();
exports.default = adminController;
