const express = require("express")
let app = express()

const produto = {
    tipoProduto: null,
    preco: null,
    quantidade: null,
}

app.post("/produto/criar",(req,res)=> {
     produto.tipoProduto="living",produto.preco=1245,produto.quantidade=300
     res.send(produto)
 })
 app.get("/produto/criar",(req,res)=> {
    // produto.tipoProduto="living",produto.preco=1245,produto.quantidade=300
     res.send(app.post("/produto/criar",(req,res)=> {
        produto.tipoProduto="living",produto.preco=1245,produto.quantidade=300
        res.send(produto)
    }))
 })
 
 
app.get('/',(req,res)=> res.send("Ola mundo!!!"))
app.get('/contatos',(req,res)=> res.send("Contatossssss"))
app.listen(3000,()=>{
    console.log("subiuu!")
})

