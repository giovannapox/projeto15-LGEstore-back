import { db } from "../database/database.connection.js";

export async function games(req, res) {

    try{

        const listOfGames = await db.collection("games").find().toArray()

        res.send(listOfGames)

    }catch(err){
        res.status(500).send(err.message)
    }

}
