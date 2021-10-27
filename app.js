const express = require("express");
const app = express();


// settings
app.use("/static", express.static(__dirname+"/public"));
app.use("/images", express.static(__dirname+"/uploads"));
app.use(express.urlencoded({ extended:false }));
app.use(express.json());

// routes 
const indexRouter = require("./routes/index");
const productsRouter = require("./routes/productos");


app.use("/productos", productsRouter);
app.use("/", indexRouter);

app.listen(8080,()=>{
    console.log("Servidor web iniciado");
})