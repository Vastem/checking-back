import { Router } from "express";
import { registerAttendance } from "../controllers/attendanceController.js";
const router = Router();

router.post("/", registerAttendance);