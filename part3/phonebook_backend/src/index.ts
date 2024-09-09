import express from "express"
import { personsRouter } from "./modules/persons/persons.routes"

const app = express()

// Routes
const apiRouter = express.Router()

apiRouter.use("/persons", personsRouter)

app.use("/api", apiRouter)

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`)
})
