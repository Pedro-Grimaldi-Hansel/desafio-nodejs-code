import express from 'express'
import db from './config/dbConnect.js';
import routes from './routes/index.js';
import membros from './models/membro.js';

db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once("open", () => {
  console.log('conexão com o banco feita com sucesso')
})

const app = express();

app.use(express.json())

routes(app);

app.post('/auth/register', async(req,res)=>{
  const { name, email, password, confirmpassword } =req.body

  if(!name){
    return res.status(422),json({msg: 'O nome é obrigatorio!'})
  }

  if(!email){
    return res.status(422),json({msg: 'O email é obrigatorio!'})
  }
  
  if(!password){
    return res.status(422),json({msg: 'A senha é obrigatorio!'})
  }

  if(password !== confirmpassword){
    return res.status(422),json({msg: 'As senhas não conferem!'})
  }

  

})

  export default app