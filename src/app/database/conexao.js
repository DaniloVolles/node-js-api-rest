import mysql from 'mysql'

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '654321',
    database: 'bd_carros'
})

conexao.connect()

/**
 * Executa código sql com ou sem valores
 * @param {string} sql instrução sql a ser executada
 * @param {string | [carro, id]} valores a serem passados para o sql
 * @param {string} mensagemReject mensagem a ser exibida
 * @returns objeto da promisse
 */
export const consulta = (sql, valores='', mensagemReject) => {
    return new Promise((resolve, reject) => {
        conexao.query(sql, valores, (erro, resultado) => {
            if (erro) {
                return reject(mensagemReject)
            } else {
                const row = JSON.parse(JSON.stringify(resultado))
                return resolve(row)
            }
        })
    })
}

export default conexao