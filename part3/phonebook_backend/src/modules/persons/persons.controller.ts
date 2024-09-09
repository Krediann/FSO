import { Request, Response } from "express"
import { StatusCodes } from "http-status-codes"
import { personsService } from "./persons.service"

const getAllPersons = async (req: Request, res: Response) => {
  const persons = await personsService.getAll()
  res.status(StatusCodes.OK).json(persons)
}

const getById = async (req: Request, res: Response) => {
  const id = req.params.id
  const person = await personsService.getById(id)

  if (!person) {
    res.status(StatusCodes.NOT_FOUND).json("Person not found!")
  }

  res.status(StatusCodes.OK).json(person)
}

const deleteById = async (req: Request, res: Response) => {
  const id = req.params.id
  const wasDeleted = await personsService.deleteById(id)
  if (!wasDeleted) {
    res.status(StatusCodes.NOT_FOUND).json({ error: "Person not found!" })
  }

  res.status(StatusCodes.NO_CONTENT).end()
}

export const personsController = {
  getAllPersons,
  getById,
  deleteById,
}
