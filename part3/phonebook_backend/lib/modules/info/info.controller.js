"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.infoController = void 0;
const info_service_1 = require("./info.service");
const getInfo = async (req, res) => {
    const info = await info_service_1.infoService.getInfo();
    res.send(`<html>
      <head>
        <title>Info page</title>
      </head>
      <body>
        <p>Phonebook has info for ${info.personAmount} people</p>
        <p>${info.timeStamp}</p>
      </body>
    </html>`);
};
exports.infoController = {
    getInfo,
};
