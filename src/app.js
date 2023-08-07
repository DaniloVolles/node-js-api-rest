import express from 'express'
import routes from './routes.js'

const app = express()

// usar o routes
app.use(routes)

// Indica para o express ler body com o json   
app.use(express.json())

export default app
