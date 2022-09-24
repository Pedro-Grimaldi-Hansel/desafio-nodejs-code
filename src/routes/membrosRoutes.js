import express from "express";
import Membrocontroller from "../controllers/membrosController.js";

const router = express.Router();

router
    .get("/membros",Membrocontroller.listarMembros)
    .get("/membros/:id", Membrocontroller.listarMembroPorId)

    .post("/membros", Membrocontroller.cadastrarMembro)

    .put("/membros/:id", Membrocontroller.atualizarMembro)

    .delete("/membros/:id", Membrocontroller.excluirMembro)
export default router;