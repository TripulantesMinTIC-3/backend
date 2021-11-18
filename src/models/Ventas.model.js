const mongoose = require('mongoose')
const {Schema} = mongoose

const VentasSchemma = mongoose.Schema({
    Fecha_Venta: Date, 
    Producto:  String,
    Referencia:  String, 
    Total:Number,
    Descripcion:  String,
    Vendedor:  String,
    Estado_venta: String,
    Cantidad:Number,
    Precio_unitario:Number
})
  
module.exports=mongoose.model("ventas", VentasSchemma);