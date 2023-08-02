import express from 'express'

const app = express()

// Mock
const CARROS = [
    {id: 1, carro: 'Corolla', marca: 'Toyota'},
    {id: 2, carro: 'Civic', marca: 'Honda'},
    {id: 3, carro: 'HB20', marca: 'Hyundai'},
    {id: 4, carro: 'Argo', marca: 'Fiat'}
]

// Criar rota padrão ou raiz
app.get('/', (req, res) => {
    res.send('Hello, World!')
})

app.get('/carros', (req,res) => {
    res.status(200).send(CARROS)
})

export default app

