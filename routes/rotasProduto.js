const express = require("express")
const ProdutoController = require("../controllers/ProdutoController")
const router = express.Router()
const app = express()

router.get("/criar",ProdutoController.criarProduto)
router.get("/deletar/:id",ProdutoController.deletarProduto)

//app.listen(3000,()=>console.log("servidor online"))

module.exports = router