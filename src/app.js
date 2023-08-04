import express from 'express'
import conexao from '../infra/conexao.js'

const app = express()

// Indica para o express ler body com o json   
app.use(express.json())

// Esse retorno é um objeto
// Retorna o objeto por id
function buscarCarroPorId(id) {
    return carros.filter( carro => carro.id == id)
}

// Pegar a posição, o index, do elemento no array
function buscarIndexCarro(id) {
    return carros.findIndex ( carro => carro.id == id)
}

// ROTAS
app.get('/carros', (req,res) => {
    // res.status(200).send(carros)
    const sql = 'SELECT * FROM carros;'
    conexao.query(sql, (erro, resultado) => {
        if (erro) {
            res.status(400).json({ 'erro': erro })
        } else {
            res.status(200).json(resultado)
        }
    })
})

app.get('/carros/:id', (req, res) => {
    const id = req.params.id
    const sql = 'SELECT * FROM carros WHERE id=?;'
    conexao.query(sql, id, (erro, resultado) => {
        const linha = resultado[0]
        if (erro) {
            res.status(400).json({ 'erro': erro })
        } else {
            res.status(200).json(linha)
        }
    })
})

app.post('/carros', (req, res) => {
    // carros.push(req.body)
    // res.status(201).send('Carro adicionado com sucesso!')
    const carro = req.body
    const sql = 'INSERT INTO carros SET ?;'
    conexao.query(sql, carro, (erro, resultado) => {
        if (erro) {
            res.status(400).json({ 'erro': erro })
        } else {
            res.status(201).json(resultado)
        }
    })
})

app.delete('/carros/:id', (req, res) => {
    // let index = buscarIndexCarro(req.params.id)
    // carros.splice(index, 1)
    // res.send(`Objeto ${req.params.id} excluído com sucesso`)
    const id = req.params.id
    const sql = 'DELETE FROM carros WHERE id=?;'
    conexao.query(sql, id, (erro, resultado) => {
        if (erro) {
            res.status(400).json({ 'erro': erro })
        } else {
            res.status(200).json(resultado)
        }
    })
})

app.put('/carros/:id', (req, res) => {
    // let index = buscarIndexCarro(req.params.id)
    // carros[index].carro = req.body.carro
    // carros[index].marca = req.body.marca
    // res.json(carros)
    const id = req.params.id
    const carro = req.body
    const sql = 'UPDATE carros SET ? WHERE id=?;'
    conexao.query(sql, [carro, id], (erro, resultado) => {
        if (erro) {
            res.status(400).json({ 'erro': erro })
        } else {
            res.status(200).json(resultado)
        }
    })
})

export default app
