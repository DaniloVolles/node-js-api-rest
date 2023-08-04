import conexao from "../database/conexao.js"

class CarroController {

    index(req,res) {
        const sql = 'SELECT * FROM carros;'
        conexao.query(sql, (erro, resultado) => {
            if (erro) {
                res.status(404).json({ 'erro': erro })
            } else {
                res.status(200).json(resultado)
            }
        })
    }

    show(req, res) {
        const id = req.params.id
        const sql = 'SELECT * FROM carros WHERE id=?;'
        conexao.query(sql, id, (erro, resultado) => {
            const linha = resultado[0]
            if (erro) {
                res.status(404).json({ 'erro': erro })
            } else {
                res.status(200).json(linha)
            }
        })
    }

    store(req, res) {
    const carro = req.body
    const sql = 'INSERT INTO carros SET ?;'
    conexao.query(sql, carro, (erro, resultado) => {
        if (erro) {
            res.status(404).json({ 'erro': erro })
        } else {
            res.status(201).json(resultado)
        }
    })
}
    update(req, res) {
        const id = req.params.id
        const carro = req.body
        const sql = 'UPDATE carros SET ? WHERE id=?;'
        conexao.query(sql, [carro, id], (erro, resultado) => {
            if (erro) {
                res.status(404).json({ 'erro': erro })
            } else {
                res.status(200).json(resultado)
            }
        })
    }

    delete(req, res) {
        const id = req.params.id
        const sql = 'DELETE FROM carros WHERE id=?;'
        conexao.query(sql, id, (erro, resultado) => {
            if (erro) {
                res.status(404).json({ 'erro': erro })
            } else {
                res.status(200).json(resultado)
            }
        })
    }

}

// Padrão Singleton
export default new CarroController()