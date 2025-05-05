import express from 'express'
import cors from 'cors'
import { PORT } from './config.js'
import { addNew, getAllContacts, getContact, removeContact, updateContact } from './myUtilities.js'

const app = express()

app.use(express.json())
app.use(cors())

app.listen(PORT, () => {
    console.log(`Server has started on port ${PORT} and is ready to go`)
})

app.get('/', (req, res) => {
    res.status(200).send('Please read the manual for instructions on how to use this API.')
})

app.post('/new/contact', (req, res) => {
    const data = req.body
    addNew(res, data)
})

app.get('/list', (req, res) => {
    getAllContacts(res)
})

app.get("/contact/:id", (req, res) => {
    const cid = req.params.id
    getContact(res, cid)
})

app.delete("/remove/_id/:id", (req, res) => {
    let data = {}
    data._id = req.params.id
    removeContact(res, data)
})

app.put('/update/:id', (req, res) => {
    const data = req.body
    updateContact(res, data, req.params.id)
})
app.put('/rate/:id/:thumbs', (req, res) => {
    const id = req.params.id
    const thumbs = req.params.thumbs
    updateRating(res, id, thumbs)
})  