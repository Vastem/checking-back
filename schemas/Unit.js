import mongoose from "mongoose"

const unitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    }
}, { versionKey: false });

const Unit = mongoose.model('Unit', unitSchema)
export default Unit 