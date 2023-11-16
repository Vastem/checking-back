import AttendanceDAO from "../DAO/attendanceDAO";
import NoDataFoundError from "../errors/NoDataFoundError";
import ValidationError from "../errors/ValidationError";

export default class AttendanceService {
    constructor(){
        this.attendanceDAO = new AttendanceDAO();
    }

    async registerAttendance(attendanceData){
        const exist = await this.attendanceDAO.getByDate(attendanceData.date);
        if(exist) throw new ValidationError("Ya se registro la asistencia para esta fecha.");
        const attendance = await this.attendanceDAO.create(attendanceData);
        return attendance;
    }
}