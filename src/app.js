import express from 'express'

const app = express()

// Indica para o express ler body com o json   
app.use(express.json())

// Mock
const carros = [
    {id: 1, carro: 'Corolla', marca: 'Toyota'},
    {id: 2, carro: 'Civic', marca: 'Honda'},
    {id: 3, carro: 'HB20', marca: 'Hyundai'},
    {id: 4, carro: 'Argo', marca: 'Fiat'}
]

// Esse retorno é um objeto
// Retorna o objeto por id
function buscarCarroPorId(id) {
    return carros.filter( carro => carro.id == id)
}

// Pegar a posição, o index, do elemento no array
function buscarIndexCarro(id) {
    return carros.findIndex ( carro => carro.id == id)
}

// Criar rota padrão ou raiz
app.get('/', (req, res) => {
    res.send('Hello, World!')
})

app.get('/carros', (req,res) => {
    res.status(200).send(carros)
})

app.get('/carros/:id', (req, res) => {
    // let index = req.params.id // Criar uma variável index, que recebe como parametro um ID
    res.json(buscarCarroPorId(req.params.id))
})

app.post('/carros', (req, res) => {
    carros.push(req.body)
    res.status(201).send('Carro adicionado com sucesso!')
})

app.delete('/carros/:id', (req, res) => {
    let index = buscarIndexCarro(req.params.id)
    carros.splice(index, 1)
    res.send(`Objeto ${req.params.id} excluído com sucesso`)
})

app.put('/carros/:id', (req, res) => {
    let index = buscarIndexCarro(req.params.id)
    carros[index].carro = req.body.carro
    carros[index].marca = req.body.marca
    res.json(carros)
})

export default app
