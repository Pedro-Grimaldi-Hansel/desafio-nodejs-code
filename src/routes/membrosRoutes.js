import express from "express";
import Membrocontroller from "../controllers/membrosController";

const router = express.Router();

router
    .get("/membros",Membrocontroller.listarMembros)

export default router;