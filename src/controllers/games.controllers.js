import { db } from "../database/database.connection.js";

export async function games(req, res) {

    try{

        const listOfGames = await db.collection("games").find().toArray()

        res.send(listOfGames)

    }catch(err){
        res.status(500).send(err.message)
    }

}

export async function addGame(req, res) {
    const { title, img, description, type, price } = req.body

    const game = { title, img, description, type, price }

    try {
        await db.collection("games").insertOne(game)
        res.send(game)

    } catch (err) {
        res.status(500).send(err.message)
    }
}