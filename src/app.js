import express from 'express'

const app = express()

// Indica para o express ler body com o json   
app.use(express.json())

// Mock
const CARROS = [
    {id: 1, carro: 'Corolla', marca: 'Toyota'},
    {id: 2, carro: 'Civic', marca: 'Honda'},
    {id: 3, carro: 'HB20', marca: 'Hyundai'},
    {id: 4, carro: 'Argo', marca: 'Fiat'}
]

// Esse retorno é um objeto
// Retorna o objeto por id
function buscarCarroPorId(id) {
    return CARROS.filter( carro => carro.id == id)
}

// Pegar a posição, o index, do elemento no array
function buscarIndexCarro(id) {
    return CARROS.findIndex ( carro => carro.id == id)
}

// Criar rota padrão ou raiz
app.get('/', (req, res) => {
    res.send('Hello, World!')
})

app.get('/carros', (req,res) => {
    res.status(200).send(CARROS)
})

app.get('/carros/:id', (req, res) => {
    // let index = req.params.id // Criar uma variável index, que recebe como parametro um ID
    res.json(buscarCarroPorId(req.params.id))
})

app.post('/carros', (req, res) => {
    CARROS.push(req.body)
    res.status(201).send('Carro adicionado com sucesso!')
})

app.delete('/carros/:id', (req, res) => {
    let index = buscarIndexCarro(req.params.id)
    CARROS.splice(index, 1)
    res.send(`Objeto ${req.params.id} excluído com sucesso`)
})

export default app

