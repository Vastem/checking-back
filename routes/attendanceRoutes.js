import { Router } from "express";
import { registerAttendance, getAttendancesByCourse } from "../controllers/attendanceController.js";
const router = Router();

router.post("/", registerAttendance);
router.get("/:id", getAttendancesByCourse)

export default router;