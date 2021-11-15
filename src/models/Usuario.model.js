const mongoose=require('mongoose')
const {Schema}=mongoose

const UsuarioSchema=new Schema({
   documento:Number,
   nombres:String,
   apellidos:String,
   contrasena:String,
   correo:String,  
   rol:String,
   activo:Boolean


})

module.exports=mongoose.model('usuario',UsuarioSchema)