import express from "express";
import DepartamentoController from "../controllers/departamentosController.js";

const router = express.Router();

router
    .get("/departamentos",DepartamentoController.listarDepartamentos)
    .get("/departamentos/:id", DepartamentoController.listarDepartamentoPorId)

    .post("/departamentos", DepartamentoController.cadastrarDepartamento)

    .put("/departamentos/:id", DepartamentoController.atualizarDepartamento)

    .delete("/departamentos/:id", DepartamentoController.excluirDepartamento)
export default router;