"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
const express_1 = __importDefault(require("express"));
const imageProcess_1 = __importDefault(require("./routes/imageProcess"));
const resize_1 = __importDefault(require("./routes/resize"));
const app = (0, express_1.default)();
const port = 3000;
//http://localhost:3000/api/img/?filename=portfolio1&width=200&height=400 "URL full name"
app.listen(port, () => {
    console.log(`click => http://localhost:${port}/ `);
});
app.get('/', (req, res) => {
    res.send('Image Processing API');
});
//app.get('/api/img', resize, uploadimg, (_req) => {});
app.use('/api', resize_1.default, imageProcess_1.default);
exports.default = app;
