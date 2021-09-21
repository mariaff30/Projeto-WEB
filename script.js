const express = require("express");
const app = express();

app.get("/",function(req,res){
    res.sendFile(__dirname +"/Dezer.html");
});

app.listen(8081,function(){
    console.log("Servidor rodando");
});