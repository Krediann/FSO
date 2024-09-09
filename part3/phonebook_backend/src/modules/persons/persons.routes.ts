import express from "express"
import { personsController } from "./persons.controller"
export const personsRouter = express.Router()

personsRouter.get("/", personsController.getAllPersons)

personsRouter.get("/:id", personsController.getById)
