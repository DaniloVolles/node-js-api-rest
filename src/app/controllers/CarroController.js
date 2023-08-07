import CarroRepository from "../repositories/CarroRepository.js"

class CarroController {

    async index(req,res) {
        const row = await CarroRepository.findAll()
        res.json(row)
    }

    async show(req, res) {
        const id = req.params.id
        const row = await CarroRepository.findById(id)
        res.json(row)
    }

    async store(req, res) {
        const carro = req.body
        const row = await CarroRepository.create(carro)
        res.json(row)
    }

    async update(req, res) {
        const id = req.params.id
        const carro = req.body
        const row = await CarroRepository.update(carro, id)
        res.json(row)
    }
    
    async delete(req, res) {
        const id = req.params.id
        const row = await CarroRepository.delete(id)
        res.json(row)
    }

}

// Padrão Singleton
export default new CarroController()
