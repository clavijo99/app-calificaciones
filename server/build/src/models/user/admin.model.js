"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
class AdminModel {
    constructor() {
        this.config();
    }
    config() {
        this.adminSchema = new mongoose_1.Schema({
            name: String,
            id: String
        });
    }
}
const admin = new AdminModel();
exports.default = mongoose_1.model('usersAdmin', admin.adminSchema);
/*
import mongoose from 'mongoose'

const Schema = mongoose.Schema;


const AdminSchema = new Schema({
    name: String,
    id: String
})

export default mongoose.model('user' , AdminSchema)
*/ 
