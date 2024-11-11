const e = require('express');
const express = require('express');
const handlebars = require('express-handlebars');
const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

const usuarios = [
];

app.get('/', (req, res) => {
    res.json(usuarios);
});

app.get('/usuarios', (req, res) => {
    res.render('usuarios');
    console.log(req.body);
});

app.post('/usuarios', (req, res)=>{
    res.send("Nome : "+ req.body.nome + " Email : "+ req.body.email + " Senha : "+ req.body.senha);
    usuarios.push(req.body);
    //usuarios.push(req.body);
    //res.json({status: 'Usuário cadastrado com sucesso!'});
});

app.delete('/usuarios', (req, res)=>{
    usuarios.pop(req.body);
    res.json({status: 'Usuário removido com sucesso!'});
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});