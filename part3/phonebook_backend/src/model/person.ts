import mongoose, { Document, Schema } from "mongoose"

const url = process.env.MONGODB_URI
console.log(url)

if (!url) {
  throw Error("You haven't got the URL in the .env file!")
}

mongoose.set("strictQuery", false)
mongoose
  .connect(url)
  .then((result) => {
    console.log("Connected to MongoDB")
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB: ", error.message)
  })

interface Person extends Document {
  name: string
  number: string
}

const personSchema: Schema<Person> = new Schema({
  name: String,
  number: String,
})

personSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  },
})

export const Person = mongoose.model<Person>("Person", personSchema)
