const express = require("express")
let app = express()
const rotas = require("./routes/rotasProduto")

const produto = {
    tipoProduto: null,
    preco: null,
    quantidade: null,
}

app.use("/produtos", rotas)

//app.post("/produto/criar",(req,res)=> {
    // produto.tipoProduto="living",produto.preco=1245,produto.quantidade=300
//     res.send(produto)
 //})
 //rota dinamica  ("/produtos/:id?" fica opcional informar o id
 //app.get("/produtos/:id",(req,res)=>{
 //    let {id} = req.params
 //    console.log("eu tenho um produto com o id: ", id)
  //   res.send("eu tenho um produto com o id: " + id)
// })
//app.get('/',(req,res)=> res.send("Ola mundo!!!"))
//app.get('/contatos',(req,res)=> res.send("Contatossssss"))
app.listen(3000,()=>{
    console.log("subiuu!")
})

