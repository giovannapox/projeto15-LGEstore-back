import { Router } from "express";
import { games } from "../controllers/games.controllers.js";

const gamesRouter = Router()

gamesRouter.get("/games", games)

export default gamesRouter