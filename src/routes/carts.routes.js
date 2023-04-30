import { Router } from "express";
import { authorizationValidation } from "../middlewares/authorization.middleware.js";
import { carts, searchCart } from "../controllers/carts.controllers.js";

const cartsRouter = Router()

cartsRouter.use(authorizationValidation)

cartsRouter.post("/carts", carts)
cartsRouter.get("/carts", searchCart)

export default cartsRouter