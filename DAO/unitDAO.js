import DataAccesError from '../errors/DataAccesError.js';
import Unit from '../schemas/Unit.js';
import mongoose from "mongoose";

export default class UnitDAO {
    constructor() { }

    async create(unitData) {
        try {
            const unit = new Unit(unitData);
            return await unit.save();
        } catch (error) {
            console.log(error);
            throw new DataAccesError("Error al crear.")
        }
    }

    async getById(id) {
        try {
            const unit = await Unit.findById(new mongoose.Types.ObjectId(id));
            return unit;
        } catch (error) {
            console.log(error);
            throw new DataAccesError("Error al obtener por ID.")
        }
    }

}