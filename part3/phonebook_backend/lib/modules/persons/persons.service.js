"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.personsService = exports.persons = void 0;
exports.persons = [
    {
        id: "1",
        name: "Arto Hellas",
        number: "040-123456",
    },
    {
        id: "2",
        name: "Ada Lovelace",
        number: "39-44-5323523",
    },
    {
        id: "3",
        name: "Dan Abramov",
        number: "12-43-234345",
    },
    {
        id: "4",
        name: "Mary Poppendieck",
        number: "39-23-6423122",
    },
];
const getAll = async () => {
    return exports.persons;
};
const getById = async (id) => {
    const person = exports.persons.find((person) => person.id === id);
    return person;
};
const createPerson = async (body) => {
    const existingPerson = exports.persons.find((person) => person.name === body.name);
    if (existingPerson) {
        return !existingPerson;
    }
    const id = (parseInt(exports.persons[exports.persons.length - 1].id) + 1).toString();
    const newPerson = { ...body, id: id };
    exports.persons.push(newPerson);
    return newPerson;
};
const deleteById = async (id) => {
    const initialLength = exports.persons.length;
    exports.persons = exports.persons.filter((person) => person.id !== id);
    return exports.persons.length < initialLength;
};
exports.personsService = {
    getAll,
    getById,
    createPerson,
    deleteById,
};
