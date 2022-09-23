import membros from "../models/membro.js";

class MembroController{

    static listarMembros = (req, res) => {      //exibe todos os membros
        membros.find((err,membros)=>{
            res.status(200).json(membros)
        })
    }

    static cadastrarMembro = (req,res) => {
        let livro = new membros(req.body);

        livro.save((err)=>{
            if(err){
                res.status(500).send({message:`${err.message} - falha ao cadastrar!`})
            }
            else{
                res.status(201).send(livro.toJSON());
            }
        })
    }

}

export default MembroController