import app from "./app.js"

const PORT = process.env.PORT || 3000

// Escutar a porta 
app.listen(PORT, () => {
    console.log(`Server: http://localhost:${PORT}`)
})