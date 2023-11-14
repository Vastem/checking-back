import DataAccesError from '../errors/DataAccesError.js';
import Course from '../schemas/Course.js';
import mongoose from "mongoose";

export default class CourseDAO {
    constructor() { }

    async create(courseData) {
        try {
            const course = new Course(courseData);
            return await course.save();
        } catch (error) {
            console.log(error);
            throw new DataAccesError("Error al crear.")
        }
    }

    async update(id, courseData) {
        try {
            const course = await Course.findByIdAndUpdate(new mongoose.Types.ObjectId(id), courseData, { new: true });
            return course;
        } catch (error) {
            console.log(error);
            throw new DataAccesError("Error al actualizar.")
        }
    }

    async delete(id) {
        try {
            const course = await Course.findByIdAndRemove(new mongoose.Types.ObjectId(id));
            return course;
        } catch (error) {
            console.log(error);
            throw new DataAccesError("Error al borrar.")
        }
    }

    async get(limit = 10) {
        try {
            const courses = await Course.find().limit(limit);
            return courses;
        } catch (error) {
            console.log(error);
            throw new DataAccesError("Error al obtener.")
        }
    }

    async getById(id) {
        try {
            const course = await Course.findById(new mongoose.Types.ObjectId(id));
            return course;
        } catch (error) {
            console.log(error);
            throw new DataAccesError("Error al obtener por ID.")
        }
    }

    async getByName(name) {
        try {
            const course = await Course.findOne({ name });
            return course;
        } catch (error) {
            console.log(error);
            throw new DataAccesError("Error al obtener por User.");
        }
    }
}