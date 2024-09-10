import cors from "cors"
import express from "express"
import { requestLogger } from "./middleware/requestLogger"
import { infoRouter } from "./modules/info/info.router"
import { personsRouter } from "./modules/persons/persons.routes"

const app = express()

app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:5173"],
  })
)

app.use(express.json())
app.use(requestLogger)

app.use("/info", infoRouter)

// Routes
const apiRouter = express.Router()

apiRouter.use("/persons", personsRouter)

app.use("/api", apiRouter)

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`)
})
