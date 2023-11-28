import mongoose from "mongoose";

export function validateCreateUserData(req, res, next) {
    const { username, email, password, color } = req.body

    if (!username || !email || !password || !color) {
        return res.status(400).json({ message: "Faltan campos obligatorios" });
    }

    if (typeof username !== "string" || typeof email !== "string" || typeof password !== "string" || typeof color !== "string") {
        return res.status(400).json({ message: "Los campos tienen un formato inválido" });
    }

    next();
}

export function validateLoginData(req, res, next) {
    const { email, password } = req.body

    if (!email || !password) {
        return res.status(400).json({ message: "Faltan campos obligatorios" });
    }

    if (typeof email !== "string" || typeof password !== "string") {
        return res.status(400).json({ message: "Los campos tienen un formato inválido" });
    }

    next();
}

export function validateUpdateUserData(req, res, next) {
    const { username, email, password, color } = req.body

    if (!username && !email && !password && !color) {
        return res.status(400).json({ message: "No hay campos para actualizar" });
    }

    if (username && typeof username !== "string" || email && typeof email !== "string" || password && typeof password !== "string" || color && typeof color !== "string") {
        return res.status(400).json({ message: "Los campos tienen un formato inválido" });
    }

    next();
}