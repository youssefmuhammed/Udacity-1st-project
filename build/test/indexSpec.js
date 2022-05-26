'use strict';
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const supertest_1 = __importDefault(require('supertest'));
const index_1 = __importDefault(require('../index'));
const sharp_1 = __importDefault(require('sharp'));
const fs_1 = __importDefault(require('fs'));
const request = (0, supertest_1.default)(index_1.default);
describe('Test endpoint responses', () => {
  it('gets the api endpoint', () =>
    __awaiter(void 0, void 0, void 0, function* () {
      const response = yield request.get('/');
      expect(response.status).toBe(200);
    }));
});
describe('endpoint: /api/img', () => {
  it('gets /api/img/?filename=portfolio1&width=200&height=200', () =>
    __awaiter(void 0, void 0, void 0, function* () {
      const response = yield request.get(
        '/api/img?filename=portfolio1&width=200&height=200'
      );
      expect(response.status).toBe(200);
    }));
  it('gets /api/img/?filename=portfolio2&width=400&height=400', () =>
    __awaiter(void 0, void 0, void 0, function* () {
      const response = yield request.get(
        '/api/img?filename=portfolio1&width=200&height=200'
      );
      expect(response.status).toBe(200);
    }));
  it('gets /api/img/?filename=portfolio3&width=600&height=600', () =>
    __awaiter(void 0, void 0, void 0, function* () {
      const response = yield request.get(
        '/api/img?filename=portfolio1&width=200&height=200'
      );
      expect(response.status).toBe(200);
    }));
});
describe('sharp function', () => {
  it('should resize the image', () => {
    (0, sharp_1.default)('./portfolio1.png')
      .resize(400, 400)
      .toFile('./resportfolio1.png');
    const source = './resportfolio1.png';
    expect(fs_1.default.existsSync(source)).toBe(true);
  });
});
