import mongoose from "mongoose";

const departamentoSchema = new mongoose.Schema(
    {
        id: {type: String},
        nome:{type: String},
    }, 
    {
        versionKey: false
    }
);

const departamentos=mongoose.model('departamentos',departamentoSchema);

export default departamentos;