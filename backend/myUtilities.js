import { myContactsColl } from "./myMongo.js"
import { ObjectId } from "mongodb"

let addNew = (res, data) => {
    if (!data.firstName)
        return res.status(200).send({ message: "No first name found." })

    if (!data.lastName)
        return res.status(200).send({ message: "No last name found." })

    if (!data.primaryPhoto)
        return res.status(200).send({ message: "No primary photo found." })

    if (!data.secondaryPhoto)
        return res.status(200).send({ message: "No secondary photo found."})

    if (!data.age)
        return res.status(200).send({ message: "No age found."})

    if (!data.sex)
        return res.status(200).send({ message: "No sex found."})

    if (!data.description)
        return res.status(200).send({ message: "No description found."})

    if (!data.email)
        return res.status(200).send({ message: "No email found."})

    if (!data.job)
        return res.status(200).send({ message: "No job found."})

    // if (!data.id) {
    //     myContactsColl.findOne({}, {
    //         sort: { id: -1 },
    //         projection: { id: 1, _id: 0 }
    //     })
    //         .then(resp => {
    //             data.id = Number(resp.id) + 1
    //             insertDoc(res, data)
    //         })
    //         .catch(err => {
    //             res.status(200).json({ "error": err.message })
    //         })
    // }
    // else
        insertDoc(res, data)
}

let insertDoc = (res, data) => {
    myContactsColl.insertOne(data)
        .then(resp => {
            res.status(200).json({ "message": "success" })
        })
        .catch(err => {
            res.status(200).json({ "error": err })
        })
}

let getAllContacts = (res) => {
    myContactsColl.find().toArray()
        .then(resp => {
            res.status(200).json(resp)
        })
}

const getContact = (res, cid) => {
    const query = {
        "_id": new ObjectId(cid)
    }
    myContactsColl.findOne(query)
        .then(data => {
            res.status(200).json(data)
            console.log(data)
        })
        .catch(err => {
            const message = {
                "error": err.message
            }
            res.status(200).json(message)
        })
}

let removeContact = (res, data) => {
    // console.log(data)
    if (data._id) {
        data._id = new ObjectId(data._id)
    }
    myContactsColl.deleteOne(data)
        .then(resp => {
            let result = {}
            if (resp.deletedCount)
                result.message = "Record Deleted"
            else
                result.error = "Error Occured"
            res.status(200).json(result)
        })
        .catch(err => {
            res.status(200).json({ "error": err.message })
        })
}

const updateContact = (res, data, id) => {
    id = new ObjectId(id)
    if (data._id)
        delete data._id
    myContactsColl.updateOne({"_id":id},{
        $set:data
    })
    .then(resp=>{
        console.log(resp)
        res.status(200).json({"message":resp})
    })
    .catch(err=>{
        res.status(200).json({"error":err.message})
    })
}
const updateRating = (res, id, thumbs) => {
    id = Number(id)
    let val = 0
    // Check if it is a thumbs up (add one) or thumbs down (subtract one), anything else should not change the value
    if (thumbs == "up")
        val = 1
    else if (thumbs == "down")
        val = -1
    // The $inc operator updates the specified field by the provided value
    myJokesColl.updateOne({ "id": id }, {
        $inc: { likes: val }
    })
        .then(resp => {
            res.status(200).json({ "message": resp })
        })
        .catch(err => {
            res.status(200).json({ "error": err.message })
        })
}
export { updateContact, removeContact, getAllContacts, getContact, addNew,updateRating };
