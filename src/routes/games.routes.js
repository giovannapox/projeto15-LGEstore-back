import { Router } from "express";
import { addGame, games } from "../controllers/games.controllers.js";

const gamesRouter = Router()

gamesRouter.get("/games", games)
gamesRouter.post("/addgame", addGame)

export default gamesRouter