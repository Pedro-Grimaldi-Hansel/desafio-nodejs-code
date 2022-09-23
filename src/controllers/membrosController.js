import membros from "../models/membro.js";

class MembroController{

    static listarMembros = (req, res) => {      //exibe todos os membros
        membros.find((err,membros)=>{
            res.status(200).json(membros)
        })
    }
    
    static listarMembroPorId = (req, res) => {      //exibe todos os membros
        const id = req.params.id;

        membros.findById(id,(err,membros)=>{
            if(err){
                res.status(400).send({message: `${err.message} - Id do livro não localizado!`})
            }
            else{
                res.status(200).json(membros);
            }
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

    static atualizarMembro = (req,res) => {
        const id = req.params.id;

        membros.findByIdAndUpdate(id,{$set: req.body}, (err) =>{
            if(!err){
                res.status(200).send({message:'Membro atualizado!'})
            }
            else{
                res.status(500).send({message: err.message})
            }
        })
    }
}

export default MembroController