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
const fs_1 = __importDefault(require("fs"));
const express_1 = __importDefault(require("express"));
const imageProcess_1 = __importDefault(require("./imageProcess"));
const route = express_1.default.Router();
route.get('/img', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const filename = req.query.filename;
    const height = req.query.height;
    const width = req.query.width;
    const path = `./img/new_img/${filename}${height}&${width}.png`;
    if (fs_1.default.existsSync(path)) {
        console.log('file exists');
        fs_1.default.readFile(`./img/new_img/${filename}${height}&${width}.png`, function (_err, data) {
            //res.writeHead(200, { 'Content-Type': 'image/png' });
            res.end(data);
        });
    }
    else {
        console.log("file doesn't exists");
        if (parseInt(height) > 0 && parseInt(width) > 0) {
            (0, imageProcess_1.default)(filename, height, width);
            fs_1.default.readFile(`./img/new_img/${req.query.filename}${req.query.height}&${req.query.width}.png`, function (_err, data) {
                //res.writeHead(200, { 'Content-Type': 'image/png' });
                res.end(data);
            });
        }
        else {
            res.send('please enter a valid parameters');
        }
    }
}));
exports.default = route;
