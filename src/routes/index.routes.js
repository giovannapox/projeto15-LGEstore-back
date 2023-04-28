import { Router } from "express"
import usersRouter from "./users.routes.js"
import gamesRouter from "./games.routes.js"

const router = Router()
router.use(usersRouter)
router.use(gamesRouter)

export default router