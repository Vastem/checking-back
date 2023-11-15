import CourseDAO from "../DAO/courseDAO.js"
import ValidationError from "../errors/ValidationError.js"
import NoDataFoundError from "../errors/NoDataFoundError.js"

export default class CourseService {
    constructor() {
        this.courseDAO = new CourseDAO()
    }

    async createCourse(courseData) {
        const courseExist = await this.courseDAO.getByName(courseData.name)
        if (courseExist) throw new ValidationError("Ya existe un curso con ese nombre.")
        const course = await this.courseDAO.create(courseData);
        return course
    }

    async updateCourse(id, courseData) {
        const courseToUpdate = await this.courseDAO.getById(id)
        if (!courseToUpdate) throw new NoDataFoundError("El curso no existe")
        const courseUpdated = await this.courseDAO.update(id, courseData)
        return courseUpdated
    }

    async deleteCourse(id) {
        const courseDeleted = await this.courseDAO.delete(id)
        if (!courseDeleted) throw new NoDataFoundError("El curso no existe")
        return courseDeleted
    }

    async getCourses(limit) {
        const courses = await this.courseDAO.get(limit)
        return courses
    }

    async getCourse(id) {
        const course = await this.courseDAO.getById(id)
        if (!course) throw new NoDataFoundError("El curso no existe")
        return course
    }
}