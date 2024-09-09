import { Request, Response } from "express"
import { StatusCodes } from "http-status-codes"
import { personsService } from "./persons.service"

const getAllPersons = async (req: Request, res: Response) => {
  const persons = await personsService.getAll()
  res.status(StatusCodes.OK).json(persons)
}

export const personsController = {
  getAllPersons,
}
