import AttendanceService from "../services/attendanceService.js";

export async function registerAttendance(req, res) {
    const attendanceService = new AttendanceService()
    try {
        const attendance = await attendanceService.registerAttendance(req.body)
        res.status(200).json(attendance)
    } catch (error) {
        console.log(error)
        res.status(error.statusCode).json({ message: error.message })
    }
}