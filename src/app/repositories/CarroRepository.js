import conexao from "../database/conexao.js"

class CarroRepository{
    // CRUD
    create(carro){
        const sql = 'INSERT INTO carros SET ?;'
        return new Promise((resolve, reject) => {
            conexao.query(sql, carro, (erro, resultado) => {
                if (erro) {
                    return reject('Impossível cadastrar')
                } else {
                    const row = JSON.parse(JSON.stringify(resultado))
                    return resolve(row)
                }
            })
        })
    }


    findAll(res){
        const sql = 'SELECT * FROM carros;'
        return new Promise((resolve, reject) => {
            conexao.query(sql, (erro, resultado) => {
                if (erro) {
                    return reject('Impossível localizar')
                } else {
                    const row = JSON.parse(JSON.stringify(resultado))
                    return resolve(row)
                }
            })
        })
    }


    findById(id){
        const sql = 'SELECT * FROM carros WHERE id=?;'
        return new Promise((resolve, reject) => {
            conexao.query(sql, id, (erro, resultado) => {
                if (erro) {
                    return reject('Impossível localizar')
                } else {
                    const [ rows ] = JSON.parse(JSON.stringify(resultado))
                    console.log(rows)
                    return resolve(rows)
                }
            })
        })
    }


    update(carro, id) {
        const sql = 'UPDATE carros SET ? WHERE id=?;'
        return new Promise((resolve, reject) => {
            conexao.query(sql, [carro, id], (erro, resultado) => {
                if (erro) {
                    return reject('Impossível localizar')
                } else {
                    const rows = JSON.parse(JSON.stringify(resultado))
                console.log(rows)
                return resolve(rows)
                }
            })
        })
    }


    delete(id){
        const sql = 'DELETE FROM carros WHERE id=?;'
        return new Promise((resolve, reject) => {
            conexao.query(sql, id, (erro, resultado) => {
                if (erro) return reject('Impossível apagar')
                const rows = JSON.parse(JSON.stringify(resultado))
                console.log(rows)
                return resolve(rows)
            })
        })
    }


}

export default new CarroRepository