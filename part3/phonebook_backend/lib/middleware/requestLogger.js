"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestLogger = void 0;
const morgan_1 = __importDefault(require("morgan"));
morgan_1.default.token("body", (req) => {
    return JSON.stringify(req.body);
});
exports.requestLogger = (0, morgan_1.default)(":method :url :status :res[content-lenght] - :response-time ms :body");
