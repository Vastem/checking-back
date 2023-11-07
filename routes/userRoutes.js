import { Router } from 'express'
import { createUser, deleteUser, updateUser, getUser, getUsers } from '../controllers/userController.js'
const router = Router()

// No necesitan token
router.post("/", createUser)
/* router.post("/login", userLogin) */

// Necesitan token
router.get("/", getUsers)
router.delete("/:id", deleteUser)
router.put("/:id", updateUser)
router.get("/:id", getUser)

export default router