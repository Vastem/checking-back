import { Router } from 'express'
import { createCourse, updateCourse, deleteCourse, getCourses, getCourse } from '../controllers/courseController.js'
const router = Router()

router.post("/", createCourse)
router.get("/", getCourses)
router.delete("/:id", deleteCourse)
router.put("/:id", updateCourse)
router.get("/:id", getCourse)

export default router