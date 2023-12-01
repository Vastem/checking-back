import mongoose from "mongoose";

export function validateCreateAttendance(req, res, next) {
    const { date, unit, course, students } = req.body

    if (!date || !unit || !course || !students) {
        return res.status(400).json({ message: "Faltan campos obligatorios" });
    }

    if (typeof date !== "string" || typeof unit !== "ObjectId" || typeof course !== "ObjectId" || typeof students !== "array") {
        return res.status(400).json({ message: "Los campos tienen un formato inválido" });
    }

    next();
}

export function validateUpdateAttendance(req, res, next) {
    const {  date, unit, course, students } = req.body

    if (!date && !unit && !course && !students) {
        return res.status(400).json({ message: "No hay campos para actualizar" });
    }

    if (date && typeof date !== "string" || unit && typeof unit !== "ObjectId" || course && typeof course !== "ObjectId" || students && typeof students !== "array") {
        return res.status(400).json({ message: "Los campos tienen un formato inválido" });
    }

    next();
}