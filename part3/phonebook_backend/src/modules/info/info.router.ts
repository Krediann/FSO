import express from "express"
import { infoController } from "./info.controller"

export const infoRouter = express.Router()

infoRouter.get("/", infoController.getInfo)
