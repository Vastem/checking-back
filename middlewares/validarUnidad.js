import mongoose from "mongoose";

export function validateCreateUnitData(req, res, next) {
    const { name, course } = req.body;
    
    if (!name || !course) {
        return res.status(400).json({ message: "Faltan campos obligatorios" });
    }

    if ( typeof name !== "string") { 
        return res.status(400).json({ message: "Los campos tienen un formato inválido" });
    }

    try {
        new mongoose.Types.ObjectId(course);
    } catch (error) {
        return res.status(400).json({ message: "Los campos tienen un formato inválido" });
    }

    next();
  }