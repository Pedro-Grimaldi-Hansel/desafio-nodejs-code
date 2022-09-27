import departamentos from "../models/departamento.js"

class DepartamentoController{

    static listarDepartamentos = (req, res) => {      //exibe todos os departamentos
        departamentos.find((err,departamentos)=>{
            res.status(200).json(departamentos)
        })
    }
    
    static listarDepartamentoPorId = (req, res) => {      //exibe o departamento pelo id
        const id = req.params.id;

        departamentos.findById(id, (err,departamentos)=> {
            if(err){
                res.status(400).send({message: `${err.message} - Id do departamento não localizado!`})
            }
            else{
                res.status(200).json(departamentos);
            }
        })
    }

    static cadastrarDepartamento = (req,res) => {
        let departamento = new departamentos(req.body);

        departamento.save((err)=>{
            if(err){
                res.status(500).send({message:`${err.message} - falha ao cadastrar!`})
            }
            else{
                res.status(201).send(departamento.toJSON());
            }
        })
    }

    static atualizarDepartamento = (req,res) => {
        const id = req.params.id;

        departamentos.findByIdAndUpdate(id,{$set: req.body}, (err) =>{
            if(!err){
                res.status(200).send({message:'Departamento atualizado!'})
            }
            else{
                res.status(500).send({message:`${err.message} - falha ao atualizar!`})
            }
        })
    }

    static excluirDepartamento = (req, res) =>{
        const id = req.params.id;

        departamentos.findByIdAndDelete(id, (err)=>{
            if(!err){
                res.status(200).send({message: 'Departamento deletado!'})
            }
            else{
                res.status(500).send({message:`${err.message} - falha ao deletar!`})
            }
        })
    }

}

export default DepartamentoController