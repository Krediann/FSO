"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.personsController = void 0;
const http_status_codes_1 = require("http-status-codes");
const persons_service_1 = require("./persons.service");
const getAllPersons = async (req, res) => {
    const persons = await persons_service_1.personsService.getAll();
    res.status(http_status_codes_1.StatusCodes.OK).json(persons);
};
const getById = async (req, res) => {
    const id = req.params.id;
    const person = await persons_service_1.personsService.getById(id);
    if (!person) {
        res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json("Person not found!");
    }
    res.status(http_status_codes_1.StatusCodes.OK).json(person);
};
const createPerson = async (req, res) => {
    const body = req.body;
    if (!body.name || !body.number) {
        return res
            .status(http_status_codes_1.StatusCodes.BAD_REQUEST)
            .json({ error: "Name or phonenumber is missing!" });
    }
    const newPerson = await persons_service_1.personsService.createPerson(body);
    if (!newPerson) {
        return res
            .status(http_status_codes_1.StatusCodes.CONFLICT)
            .json({ error: "Name must be unique!" });
    }
    console.log(newPerson.id, "ID IS HERE");
    res.status(http_status_codes_1.StatusCodes.CREATED).json(newPerson);
};
const deleteById = async (req, res) => {
    const id = req.params.id;
    const wasDeleted = await persons_service_1.personsService.deleteById(id);
    if (!wasDeleted) {
        res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({ error: "Person not found!" });
    }
    res.sendStatus(http_status_codes_1.StatusCodes.NO_CONTENT);
};
exports.personsController = {
    getAllPersons,
    getById,
    createPerson,
    deleteById,
};
