import { Router } from "express"
import CarroController from "./app/controllers/CarroController.js";

const router = Router()

router.get('/carros', CarroController.index)
router.get('/carros/:id', CarroController.show)
router.post('/carros', CarroController.store)
router.put('/carros/:id', CarroController.update)
router.delete('/carros/:id', CarroController.delete)

export default router