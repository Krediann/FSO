import express from "express"
import morgan from "morgan"
import { infoRouter } from "./modules/info/info.router"
import { personsRouter } from "./modules/persons/persons.routes"

const logger = morgan("tiny")
const app = express()

app.use(express.json())
app.use(logger)

app.use("/info", infoRouter)

// Routes
const apiRouter = express.Router()

apiRouter.use("/persons", personsRouter)

app.use("/api", apiRouter)

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`)
})
