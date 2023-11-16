import DataAccesError from '../errors/DataAccesError.js';
import Attendance from '../schemas/Attendance.js';
import mongoose from "mongoose";

export default class AttendanceDAO {
    constructor() { }

    async create(attendanceData) {
        try {
            const attendance = new Attendance(attendanceData);
            return await attendance.save();
        } catch (error) {
            console.log(error);
            throw new DataAccesError("Error al crear.")
        }
    }

    async getByDate(date) {
        try {
            return await Attendance.find({ date: date });
        } catch (error) {
            console.log(error);
            throw new DataAccesError("Error al obtener por fecha.")
        }
    }
}