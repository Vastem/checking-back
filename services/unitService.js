import UnitDAO from "../DAO/unitDAO.js"
import ValidationError from "../errors/ValidationError.js"
import NoDataFoundError from "../errors/NoDataFoundError.js"

export default class CourseService {
    constructor() {
        this.unitDAO = new UnitDAO()
    }

    async createUnit(unitData) {
        const unit = await this.unitDAO.create(unitData);
        return unit
    }

    async getCourse(id) {
        const unit = await this.unitDAO.getById(id)
        if (!unit) throw new NoDataFoundError("La unidad no existe")
        return unit
    }
}