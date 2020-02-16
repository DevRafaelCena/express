const ProdutoController ={
    criarProduto: (req,res)=>{
        res.send("Criando um novo Produto!!!!")

    },
    deletarProduto: (req,res)=>{
        const {id} = req.params
        res.send("APagando o produto de id: " + id)

    }
}

module.exports = ProdutoController