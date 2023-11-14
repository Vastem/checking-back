import CourseService from "../services/courseService.js"

export async function createCourse(req, res) {
    const courseService = new CourseService()
    try {
        const course = await courseService.createCourse(req.body)
        res.status(200).json(course)
    } catch (error) {
        console.log(error)
        res.status(error.statusCode).json({ message: error.message })
    }
}

export async function updateCourse(req, res) {
    const courseService = new CourseService()
    try {
        const courseUpdated = await courseService.updateCourse(req.params.id, req.body)
        res.status(200).json(courseUpdated)
    } catch (error) {
        res.status(error.statusCode).json(error.message)
    }

}

export async function deleteCourse(req, res) {
    const courseService = new CourseService()
    try {
        const courseDeleted = await courseService.deleteCourse(req.params.id)
        res.status(200).json(courseDeleted)
    } catch (error) {
        res.status(error.statusCode).json(error.message)
    }
}

export async function getCourses(req, res) {
    const courseService = new CourseService()
    try {
        const courses = await courseService.getCourses()
        res.status(200).json(courses)
    } catch (error) {
        res.status(error.statusCode).json(error.message)
    }
}

export async function getCourse(req, res) {
    const courseService = new CourseService()
    try {
        const course = await courseService.getCourse(req.params.id)
        res.status(200).json(course)
    } catch (error) {
        res.status(error.statusCode).json(error.message)
    }
}