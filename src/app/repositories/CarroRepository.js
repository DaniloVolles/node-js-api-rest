import { consulta } from "../database/conexao.js"

class CarroRepository{
    // CRUD
    create(carro){
        const sql = 'INSERT INTO carros SET ?;'
        return consulta(sql, carro, 'Não foi possível cadastrar.')
    }

    findAll(res){
        const sql = 'SELECT * FROM carros;'
        return consulta(sql, 'Não foi possível localizar.')
    }

    findById(id){
        const sql = 'SELECT * FROM carros WHERE id=?;'
        return consulta(sql, id, 'Não foi possível localizar.')
    }

    update(carro, id) {
        const sql = 'UPDATE carros SET ? WHERE id=?;'
        return consulta(sql, [carro, id], 'Não foi possível atualizar.')
    }

    delete(id){
        const sql = 'DELETE FROM carros WHERE id=?;'
        return consulta(sql, id, 'Não foi possível apagar.')
    }

}

export default new CarroRepository