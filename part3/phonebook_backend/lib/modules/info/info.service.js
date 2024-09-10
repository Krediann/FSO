"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.infoService = void 0;
const persons_service_1 = require("../persons/persons.service");
const getInfo = async () => {
    const personAmount = persons_service_1.persons.length;
    const timeStamp = new Date();
    return { personAmount, timeStamp };
};
exports.infoService = {
    getInfo,
};
