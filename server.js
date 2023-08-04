import app from "./src/app.js"
import conexao from "./infra/conexao.js"

const PORT = 3000

// fazer a conexão
conexao.connect((erro) => {
    if (erro) {
        console.log(erro)
    } else {
        console.log('Conexão realizada com sucesso!')
        // Escutar a porta 
        app.listen(PORT, () => {
            console.log(`Server: http://localhost:${PORT}`)
        })
    }
})

