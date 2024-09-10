import mongoose, { Document, Schema } from "mongoose"

interface IPerson extends Document {
  name: string
  number: string
}

if (process.argv.length < 3) {
  console.log("Give password as argument")
  process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://Krediann:${password}@cluster0.0bhgm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

mongoose.set("strictQuery", false)

mongoose.connect(url)

const personSchema: Schema<IPerson> = new Schema({
  name: String,
  number: String,
})

const Person = mongoose.model<IPerson>("Person", personSchema)

if (process.argv.length === 3) {
  console.log("Phonebook:")
  Person.find({}).then((persons: IPerson[]) => {
    persons.forEach((person) => {
      console.log(`${person.name} ${person.number}`)
    })
    mongoose.connection.close()
  })
}

if (process.argv[3] && process.argv[4]) {
  const person = new Person({
    name: process.argv[3],
    number: process.argv[4],
  })

  person.save().then((savedPerson: IPerson) => {
    console.log(
      `Added ${savedPerson.name} number: ${savedPerson.number} to phonebook`
    )
    mongoose.connection.close()
  })
}
