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
const app_1 = __importDefault(require("./app"));
const database_1 = __importDefault(require("./database"));
class Server {
    constructor() {
        this.tempo = 5;
    }
    StrartDatabase() {
        return __awaiter(this, void 0, void 0, function* () {
            const status = yield database_1.default.start();
            if (status) {
                console.log('database running');
                this.start();
            }
            else if (this.tempo == 0) {
                console.log('tiempo agotado');
                return;
            }
            else {
                console.log('intentando conectar con la base de datos');
                this.tempo--;
                this.StrartDatabase();
            }
        });
    }
    start() {
        app_1.default.listen(app_1.default.get('port'), () => {
            console.log(`server running on port ${app_1.default.get('port')}`);
        });
    }
}
const server = new Server();
server.StrartDatabase();
