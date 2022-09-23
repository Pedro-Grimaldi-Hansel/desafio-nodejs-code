import express from "express";
import membros from "./membrosRoutes.js";

const routes =(app) => {
    app.route("/").get((req,res)=>{
        res.status(200);
    })

    app.use(
        express.json(),
        membros
    )
}

export default routes;