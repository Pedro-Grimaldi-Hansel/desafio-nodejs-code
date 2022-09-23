import express from "express";
import Membrocontroller from "../controllers/membrosController.js";

const router = express.Router();

router
    .get("/membros",Membrocontroller.listarMembros)

    .post("/membros", Membrocontroller.cadastrarMembro)

export default router;