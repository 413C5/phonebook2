//Servidor express
const express = require('express')
const app = express()
app.use(express.json())

let persons = [
    {
        "id": 1,
        "name": "Arto Hellas",
        "number": "040-123456"

    },
    {
        "id": 2,
        "name": "Ada Lovelace",
        "number": "39-44-5323523"

    },
    {
        "id": 3,
        "name": "Dan Abramov",
        "number": "12-43-234345"

    },
    {
        "id": 4,
        "name": "Mary Poppendieck",
        "number": "39-23-6423122"

    }
]


//Rutas
app.get('/', (request, response) => {
    response.send('Prueba')
})

app.get('/api/persons', (request, response) => {
    response.json(persons)
})

app.get('/info', (request, response) => {
    let size = (persons.length).toString()
    console.log(size)

    const date = new Date()
    const today = date.toDateString()
    const time = date.toTimeString()

    console.log('Date:', today)
    console.log('Time:', time)

    response.send(
        `Phonebook has info for ${size} people` +
        `</br> </br>${today} ${time}`)
})

//Definición de puerto y que escuhe dicho puerto
const PORT = 3001
app.listen(PORT, () => {
    console.log(`Sever running on port ${PORT}`)
})
