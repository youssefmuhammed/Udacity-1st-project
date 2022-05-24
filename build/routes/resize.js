"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const express_1 = __importDefault(require("express"));
const route = express_1.default.Router();
route.get('/img', (req, res, next) => {
    fs_1.default.readFile('./img/new_img/resized.png', function (_err, data) {
        res.writeHead(200, { 'Content-Type': 'image/png' });
        res.end(data);
    });
    next();
});
exports.default = route;
