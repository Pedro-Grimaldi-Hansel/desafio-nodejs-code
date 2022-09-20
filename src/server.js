import express from 'express'
import cors from "cors";

const app = express();

app.use(express.json())

const membros =[
  {"id": 1, "nome":"Pedro Grimaldi Hansel", "email":"pedroghansel@gmail.com"},
  {"id": 2, "nome":"Pedri Grimaldi Hansel", "email":"pedroghansel2@gmail.com"},
]

app.use(express.json());
app.use(cors({
  origin: "*"
}));


app.get('/', (req, res) => {
  console.log("GET /");
  res.status(200).send("Hello World");
});

app.get('/membros', (req, res) => {
  console.log("GET /");
  res.status(200).json(membros)
});

app.get('/membros/:id',(req, res)=>{        //exibe os membros
  let index = buscamembro(req.params.id);
  res.json(membros[index]);
})

app.post('/membros', (req,res)=>{           //adiciona membros
  membros.push(req.body);
  res.status(201).send('Membro cadastrado!')
})

app.put('/membros/:id',(req, res)=>{        //edita membros
  let index = buscamembro(req.params.id);
  membros[index].nome = req.body.nome;
  res.json(membros);
})

app.delete('/membros/:id',(req, res)=>{        //edita membros
  let {id}=req.params;
  let index = buscamembro(id);
  membros.splice(index,1);
  res.send(`Membro ${id} apagado com sucesso`);
})

function buscamembro(id){                    //busca o membro por id
  return membros.findIndex(membro=>membro.id==id)
}

app.listen('3333', () => {
  console.log("O servidor foi inicializado em http://localhost:3333");
});