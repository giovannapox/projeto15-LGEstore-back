import { Router } from "express"
import usersRouter from "./users.routes.js"
import gamesRouter from "./games.routes.js"
import cartsRouter from "./carts.routes.js"

const router = Router()
router.use(usersRouter)
router.use(gamesRouter)
router.use(cartsRouter)

export default router