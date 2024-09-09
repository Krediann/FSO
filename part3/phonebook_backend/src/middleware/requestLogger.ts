import { Request } from "express"
import morgan from "morgan"

morgan.token("body", (req: Request) => {
  return JSON.stringify(req.body)
})

export const requestLogger = morgan(
  ":method :url :status :res[content-lenght] - :response-time ms :body"
)
