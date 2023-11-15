import UnitService from "../services/unitService.js"

export async function createUnit(req, res) {
    const unitService = new UnitService()
    try {
        const unit = await unitService.createUnit(req.body)
        res.status(200).json(unit)
    } catch (error) {
        console.log(error)
        res.status(error.statusCode).json({ message: error.message })
    }
}

export async function getUnit(req, res) {
    const unitService = new UnitService()
    try {
        const unit = await unitService.getUnit(req.params.id)
        res.status(200).json(unit)
    } catch (error) {
        res.status(error.statusCode).json(error.message)
    }
}