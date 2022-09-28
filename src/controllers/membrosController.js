import departamentos from "../models/departamento.js";
import membros from "../models/membro.js";

class MembroController{

    static listarMembros = (req, res) => {      //exibe todos os membros
        membros.find().
        populate('departamento').
        populate('cargo').
        exec((err,membros)=>{
            res.status(200).json(membros)
        })
    }
    
    static listarMembroPorId = (req, res) => {      //exibe todos os membros
        const id = req.params.id;

        membros.findById(id).populate('departamento').
        populate('cargo').exec((err,membros)=>{
            if(err){
                res.status(400).send({message: `${err.message} - Id do membro não localizado!`})
            }
            else{
                res.status(200).json(membros);
            }
        })
    }

    static cadastrarMembro = (req,res) => {
        let membro = new membros(req.body);

        membro.save((err)=>{
            if(err){
                res.status(500).send({message:`${err.message} - falha ao cadastrar!`})
            }
            else{
                res.status(201).send(membro.toJSON());
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
                res.status(500).send({message:`${err.message} - falha ao atualizar!`})
            }
        })
    }

    static excluirMembro = (req, res) =>{
        const id = req.params.id;

        membros.findByIdAndDelete(id, (err)=>{
            if(!err){
                res.status(200).send({message: 'Membro deletado!'})
            }
            else{
                res.status(500).send({message:`${err.message} - falha ao deletar!`})
            }
        })
    }

    static listarPorDepartamento 

}

export default MembroController