import express from 'express'
import routes from './routes.js'

const app = express()

// Indica para o express ler body com o json   
app.use(express.json())

// usar o routes
app.use(routes)

export default app
