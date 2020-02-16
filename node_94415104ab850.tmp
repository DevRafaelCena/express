const express = require('express');
const app = express();
const series= [{
    nome: 'avatar',
},
{
    nome: 'series2',
},
{
    nome: 'serie3',
}]

app.get("/serie/:id",(req,res)=>{
    let {id} = req.params
       res.send(series[id].nome)
 })

app.listen(3000,()=>{
   console.log("subiuu!")
})