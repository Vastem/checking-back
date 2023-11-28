import { Router } from 'express'
import { createUser, deleteUser, updateUser, getUser, getUsers, userLogin } from '../controllers/userController.js'
import { validateCreateUserData, validateLoginData, validateUpdateUserData } from '../middlewares/validarUsuario.js'
const router = Router()

router.post("/", validateCreateUserData, createUser)
router.get("/", getUsers)
router.delete("/:id", deleteUser)
router.put("/:id", validateUpdateUserData, updateUser)
router.get("/:id", getUser)
router.post("/login", validateLoginData, userLogin)

export default router