"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.personsRouter = void 0;
const express_1 = __importDefault(require("express"));
const persons_controller_1 = require("./persons.controller");
exports.personsRouter = express_1.default.Router();
exports.personsRouter.get("/", persons_controller_1.personsController.getAllPersons);
exports.personsRouter.get("/:id", persons_controller_1.personsController.getById);
exports.personsRouter.post("/", persons_controller_1.personsController.createPerson);
exports.personsRouter.delete("/:id", persons_controller_1.personsController.deleteById);
