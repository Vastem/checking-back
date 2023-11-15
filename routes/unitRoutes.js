import { Router } from 'express'
import { createUnit, getUnit } from '../controllers/unitController.js'
const router = Router()

router.post("/", createUnit)
router.get("/:id", getUnit)

export default router