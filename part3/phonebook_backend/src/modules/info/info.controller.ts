import { Request, Response } from "express"
import { infoService } from "./info.service"

const getInfo = async (req: Request, res: Response) => {
  const info = await infoService.getInfo()

  res.send(
    `<html>
      <head>
        <title>Info page</title>
      </head>
      <body>
        <p>Phonebook has info for ${info.personAmount} people</p>
        <p>${info.timeStamp}</p>
      </body>
    </html>`
  )
}

export const infoController = {
  getInfo,
}
