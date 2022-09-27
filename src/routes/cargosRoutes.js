import express from "express";
import CargoController from "../controllers/cargosController.js";

const router = express.Router();

router
    .get("/cargos",CargoController.listarCargos)
    .get("/cargos/:id", CargoController.listarCargoPorId)

    .post("/cargos", CargoController.cadastrarCargo)

    .put("/cargos/:id", CargoController.atualizarCargo)

    .delete("/cargos/:id", CargoController.excluirCargo)
export default router;