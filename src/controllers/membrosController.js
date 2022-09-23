import membros from "../models/membro";

class MembroController{

    static listarMembros = (req, res) => {      //exibe todos os membros
        membros.find((err,membros)=>{
            res.status(200).json(membros)
        })
    }

}

export default Membrocontroller