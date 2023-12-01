import mongoose from "mongoose";

export function validateCreateCourseData(req, res, next) {
    const { name, color, teacher, students } = req.body

    if (!name || !color || !teacher || !students) {
        return res.status(400).json({ message: "Faltan campos obligatorios" });
    }

    if (typeof name !== "string" || typeof color !== "string" || typeof students !== "string" || typeof color !== "string") {
        return res.status(400).json({ message: "Los campos tienen un formato inválido" });
    }

    next();
}


export function validateUpdateCourseData(req, res, next) {
    const { name, color, teacher, students } = req.body

    if (!name || !color || !teacher || !students) {
        return res.status(400).json({ message: "Faltan campos obligatorios" });
    }

    if (typeof name !== "string" || typeof color !== "string" || typeof students !== "string" || typeof color !== "string") {
        return res.status(400).json({ message: "Los campos tienen un formato inválido" });
    }

    next();
}