import express from "express";
import DepartamentoController from "../controllers/departamentosController";

const router = express.Router();

router
    .get("/membros",DepartamentoController.listarDepartamentos)
    .get("/membros/:id", DepartamentoController.listarDepartamentoPorId)

    .post("/departamentoss", DepartamentoController.cadastrarDepartamento)

    .put("/departamentoss/:id", DepartamentoController.atualizarDepartamento)

    .delete("/departamentoss/:id", DepartamentoController.excluirDepartamento)
export default router;