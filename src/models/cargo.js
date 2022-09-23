import mongoose from "mongoose";

const cargoSchema = new mongoose.Schema(
    {
        id: {type: String, required:true},
        nome:{type: String, required:true},
    }
);

const cargos=mongoose.model('cargos',cargoSchema);

export default cargos;