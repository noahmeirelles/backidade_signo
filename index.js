const express = require('express');
const {Pool} = require('pg');
const app = express();
const port = 4000

app.use(express.json())
const pool = new Pool({
    user:"postgres",
    host: "localhost",
    database: "postgres",
    password: "ds564",
    port: 7007
});

//GET
app.get ('/usuarios', async (req, res) => {
    try {
const resultado = await pool.query('SELECT * FROM usuarios');
res.json({
    total: resultado.rowCount,
    usuarios: resultado.rows}
);

    }catch (error) {
        console.log("Erro ao obter todos os usuarios");
        res.status(500).send({
            mensagem: "Erro ao obter todos os usuarios"
        })
}});

function calcularIdade(datadenascimento) {
    const hoje = new Date();
    let idade = hoje.getFullYear() - datadenascimento.getFullYear();
    const mesAtual = hoje.getMonth();
    const mesNascimento = datadenascimento.getMonth();
    if (mesNascimento > mesAtual || (mesNascimento === mesAtual && hoje.getDate() < datadenascimento.getDate())) {
      idade--;
    }
    return idade;
  }


  function calcularSigno(mes, dia) {
    if ((mes === 1 && dia >= 20) || (mes === 2 && dia <= 18)) {
      return 'Aquário';
    } else if ((mes === 2 && dia >= 19) || (mes === 3 && dia <= 20)) {
      return 'Peixes';
    } else if ((mes === 3 && dia >= 21) || (mes === 4 && dia <= 19)) {
      return 'Áries';
    } else if ((mes === 4 && dia >= 20) || (mes === 5 && dia <= 20)) {
      return 'Touro';
    } else if ((mes === 5 && dia >= 21) || (mes === 6 && dia <= 20)) {
      return 'Gêmeos';
    } else if ((mes === 6 && dia >= 21) || (mes === 7 && dia <= 22)) {
      return 'Câncer';
    } else if ((mes === 7 && dia >= 23) || (mes === 8 && dia <= 22)) {
      return 'Leão';
    } else if ((mes === 8 && dia >= 23) || (mes === 9 && dia <= 22)) {
      return 'Virgem';
    } else if ((mes === 9 && dia >= 23) || (mes === 10 && dia <= 22)) {
      return 'Libra';
    } else if ((mes === 10 && dia >= 23) || (mes === 11 && dia <= 21)) {
      return 'Escorpião';
    } else if ((mes === 11 && dia >= 22) || (mes === 12 && dia <= 21)) {
      return 'Sagitário';
    } else {
      return 'Capricórnio'; // Caso padrão para os demais dias de dezembro e janeiro
    }
  }

//POST
app.post('/usuarios', async (req, res) =>{
    try{
        const {nome, sobrenome, datadenascimento, email} = req.body;
        let datadenascimento2 = new Date(datadenascimento);
        let idade = calcularIdade(datadenascimento2);
      
        let signo = calcularSigno(datadenascimento2.getMonth() + 1, datadenascimento2.getDate());
      

        await pool.query('INSERT INTO usuarios (nome, sobrenome, datadenascimento, email, idade, signo) VALUES ($1, $2, $3, $4, $5, $6)', [nome,sobrenome, datadenascimento2, email, idade, signo]);
        res.status(201).send({
            mensagem: "Usuario cadastrado com sucesso"
        })
    }
    catch (error) {
        console.log("Erro ao adicionar o usuario", error);
        res.status(500).send({
            mensagem: "Erro ao adicionar o usuario!!!!!!"
        })
}})

//DELETE
app.delete('/usuarios/:id', async (req, res) =>{
    try{
const {id} = req.params;

await pool.query('DELETE FROM usuarios WHERE id = $1', [id])
        res.status(200).send({mensagem: "Usuario deletado com sucesso" })

    }catch(error){
        console.log("Erro ao deletar usuario/os");
        res.status(500).send({
            mensagem: "Erro ao deletar usuario"
        })
    }
})

//UPDATE
app.put('/usuarios/:id', async (req, res) =>{
    try{
const {id} = req.params;
const {nome, sobrenome, datadenascimento, email} = req.body;
let datadenascimento2 = new Date(datadenascimento);
let idade = calcularIdade(datadenascimento2);
let signo = calcularSigno(datadenascimento2.getMonth() + 1, datadenascimento2.getDate());
await pool.query('UPDATE usuarios SET nome = $1, sobrenome =$2, datadenascimento = $3, email = $4, idade = $5, signo = $6 WHERE id = $7',  [nome,sobrenome, datadenascimento2, email, idade, signo, id]);
        res.status(200).send({mensagem: "Usuario updatado" })

    }catch(error){
        console.log("Erro ao editar usuario/os", error);
        res.status(500).send({
            mensagem: "Erro ao editar usuario"
        })
    }
})






//rota teste
app.get('/', (req,res)=> {
    res.send('Servidor funcionando')
})






 //ulrtima coisa
app.listen(port, () =>{
    console.log('servidor rodando na porta ${port}')
})