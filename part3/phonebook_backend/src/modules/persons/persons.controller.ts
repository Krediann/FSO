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

export interface Person {
  name: string
  number: string
}

const createPerson = async (req: Request, res: Response) => {
  const body: Person = req.body

  if (!body.name || !body.number) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ error: "Name or phonenumber is missing!" })
  }

  const wasCreated = await personsService.createPerson(body)
  if (!wasCreated) {
    return res
      .status(StatusCodes.CONFLICT)
      .json({ error: "Name must be unique!" })
  }
  res.sendStatus(StatusCodes.CREATED)
}

const deleteById = async (req: Request, res: Response) => {
  const id = req.params.id
  const wasDeleted = await personsService.deleteById(id)
  if (!wasDeleted) {
    res.status(StatusCodes.NOT_FOUND).json({ error: "Person not found!" })
  }

  res.sendStatus(StatusCodes.NO_CONTENT)
}

export const personsController = {
  getAllPersons,
  getById,
  createPerson,
  deleteById,
}
