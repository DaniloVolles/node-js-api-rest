import express from 'express'
import CarroController from './app/controllers/CarroController.js'

const app = express()

// Indica para o express ler body com o json   
app.use(express.json())

// ROTAS
app.get('/carros', CarroController.index)
app.get('/carros/:id', CarroController.show)

app.post('/carros', CarroController.store)

app.put('/carros/:id', CarroController.update)

app.delete('/carros/:id', CarroController.delete)

export default app
