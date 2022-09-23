import express from 'express'
import db from './config/dbConnect.js';
import membros from './models/membro.js';
import departamentos from './models/departamento.js';
import cargos from './models/cargo.js';
import routes from './routes/index.js';

db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once("open", () => {
  console.log('conexão com o banco feita com sucesso')
})

const app = express();

app.use(express.json())

routes(app);
  
  app.get('/membros/:id', (req, res) => {
    let index = buscaLivro(req.params.id);
    res.json(membros[index]);
  })
  
  app.post('/membros', (req, res) => {
    membros.push(req.body);
    res.status(201).send('Livro foi cadastrado com sucesso')
  })
  
  app.put('/membros/:id', (req, res) => {
    let index = buscaLivro(req.params.id);
    membros[index].titulo = req.body.titulo;
    res.json(membros);
  })
  
  app.delete('/membros/:id', (req, res) => {
    let {id} = req.params;
    let index = buscaLivro(id);
    membros.splice(index, 1);
    res.send(`Livro ${id} removido com sucesso`);
  })
  
  
  function buscaLivro(id) {
    return membros.findIndex(livro => livro.id == id)
  }
  
  export default app