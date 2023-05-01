import { ObjectId } from "mongodb";
import { db } from "../database/database.connection.js";

export async function carts(req, res) {

    const { title } = req.body
    const { authorization } = req.headers
    const token = authorization?.replace("Bearer ", "")

    try {
        const user = await db.collection("sessions").findOne({ token })
        const game = await db.collection("games").findOne({ title })
        await db.collection("carts").insertOne({ idUser: user.idUser, game: game })

        res.sendStatus(201)

    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function searchCart(req, res) {

    const { authorization } = req.headers
    const token = authorization?.replace("Bearer ", "")

    try {
        const user = await db.collection("sessions").findOne({ token })
        const cart = await db.collection("carts").find({ idUser: new ObjectId(user.idUser) }).toArray()
        const games = cart.map((element) => { return element.game })

        res.send(games)

    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function checkout(req, res) {

    const { cart, totalPrice } = req.body
    const { authorization } = req.headers
    const token = authorization?.replace("Bearer ", "")


    try {
        const user = await db.collection("sessions").findOne({ token })
        await db.collection("checkouts").insertOne({ idUser: user.idUser, totalPrice: totalPrice, games: cart })
        await db.collection("carts").deleteMany({ idUser: new ObjectId(user.idUser) })

        res.sendStatus(200)

    } catch (err) {
        res.status(500).send(err.message)
    }
}