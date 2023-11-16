import mongoose from "mongoose";

const attendanceSchema = new mongoose.Schema({
    date: {
        type: String,
        required: true
    },
    unit: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    students: [{
        student: {
            type: String,
            required: true
        },
        present: {
            type: Boolean,
            required: true
        }
    }]
}, { versionKey: false });

const Attendance = mongoose.model('Attendance', attendanceSchema);
export default Attendance;