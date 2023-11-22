import mongoose from "mongoose"
import Unit from "./Unit.js"

const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    teacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    students: [String]
}, { versionKey: false })

const Course = mongoose.model('Course', courseSchema)
export default Course
