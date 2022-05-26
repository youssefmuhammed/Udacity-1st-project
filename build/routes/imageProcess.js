'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const sharp_1 = __importDefault(require('sharp'));
//import express from 'express';
// const res = express.response;
const resize = (filename, height, width) => {
  (0, sharp_1.default)(`./img/${filename}.png`)
    .resize(parseInt(width), parseInt(height))
    .toFile(`./img/new_img/${filename}${height}&${width}.png`);
};
exports.default = resize;
