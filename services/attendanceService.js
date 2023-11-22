import AttendanceDAO from "../DAO/attendanceDAO.js";
import NoDataFoundError from "../errors/NoDataFoundError.js";
import ValidationError from "../errors/ValidationError.js";
import CourseDAO from "../DAO/courseDAO.js";

export default class AttendanceService {
  constructor() {
    this.attendanceDAO = new AttendanceDAO();
    this.courseDAO = new CourseDAO();
  }

  async registerAttendance(attendanceData) {
    const exist = await this.attendanceDAO.getByDate(attendanceData.date);
    if (exist)
      throw new ValidationError(
        "Ya se registro la asistencia para esta fecha."
      );
    const attendances = await this.attendanceDAO.getByCourse(
      attendanceData.course
    );

    // Si no existen asistencias de ese curso, se agregan los estudiantes al curso
    if (!attendances) {
      const course = await this.courseDAO.getById(attendanceData.course);
      course.students = attendanceData.students.map(
        (student) => student.student
      );
    }

    const attendance = await this.attendanceDAO.create(attendanceData);
    return attendance;
  }

  async getAttendancesByCourse(courseId) {
    const attendance = await this.attendanceDAO.getAttendancesByCourse(
      courseId
    );
    return attendance;
  }
}
