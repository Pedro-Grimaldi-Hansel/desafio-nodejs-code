import cargos from "../models/cargo.js"

class CargoController{

    static listarCargos = (req, res) => {      //exibe todos os cargos
        cargos.find((err,cargos)=>{
            res.status(200).json(cargos)
        })
    }
    
    static listarCargoPorId = (req, res) => {      //exibe o cargo pelo id
        const id = req.params.id;

        cargos.findById(id,(err,cargos)=>{
            if(err){
                res.status(400).send({message: `${err.message} - Id do cargo não localizado!`})
            }
            else{
                res.status(200).json(cargos);
            }
        })
    }

    static cadastrarCargo = (req,res) => {
        let cargo = new cargos(req.body);

        cargo.save((err)=>{
            if(err){
                res.status(500).send({message:`${err.message} - falha ao cadastrar!`})
            }
            else{
                res.status(201).send(cargo.toJSON());
            }
        })
    }

    static atualizarCargo = (req,res) => {
        const id = req.params.id;

        cargos.findByIdAndUpdate(id,{$set: req.body}, (err) =>{
            if(!err){
                res.status(200).send({message:'Cargo atualizado!'})
            }
            else{
                res.status(500).send({message:`${err.message} - falha ao atualizar!`})
            }
        })
    }

    static excluirCargo = (req, res) =>{
        const id = req.params.id;

        cargos.findByIdAndDelete(id, (err)=>{
            if(!err){
                res.status(200).send({message: 'Cargo deletado!'})
            }
            else{
                res.status(500).send({message:`${err.message} - falha ao deletar!`})
            }
        })
    }

}

export default CargoController