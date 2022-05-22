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
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const sharp_1 = __importDefault(require("sharp"));
const app = (0, express_1.default)();
const port = 3000;
//http://localhost:3000/api/img/?filename=portfolio1&width=200&height=400 "URL full name"
const resize = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, sharp_1.default)(`./img/${req.query.filename}.png`)
        .resize(parseInt(req.query.width), parseInt(req.query.height))
        .toFile('./img/new_img/resized.png');
    next();
});
const uploadimg = (_req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    fs_1.default.readFile('./img/new_img/resized.png', function (_err, data) {
        res.writeHead(200, { 'Content-Type': 'image/png' });
        res.end(data);
    });
    next();
});
app.listen(port, () => {
    console.log(`click => http://localhost:${port}/ `);
});
app.get('/', (req, res) => {
    res.send('Image Processing API');
});
app.get('/api/img', resize, uploadimg, (_req) => { });
exports.default = app;
