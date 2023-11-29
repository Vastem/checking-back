import { Router } from 'express'
import { createUnit, getUnit } from '../controllers/unitController.js'
import { validateCreateUnitData } from '../middlewares/validarUnidad.js'
const router = Router()

router.post("/", validateCreateUnitData, createUnit)
router.get("/:id", getUnit)

export default router