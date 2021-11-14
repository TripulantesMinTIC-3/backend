const ProductoCtrl={}
const Producto=require('../models/Productos.model')
const EmpleadoCtrl = require('./Empleado.controllers')

ProductoCtrl.crear=async(req,res)=>{
    const {titulo,descripcion,precio,disponible}=req.body
    const NuevoProducto=new Producto({
        titulo,descripcion,precio,disponible

    })

   const respuesta = await NuevoProducto.save()
   res.json({
       mensaje:'Producto creado',
       respuesta
   })

}

ProductoCtrl.listar=async(req,res)=>{
    const respuesta=await Producto.find()
    res.json(respuesta)
}

ProductoCtrl.listarid=async(req,res)=>{
    const id=req.params.id
    const respuesta=await Producto.findById({_id:id})
    res.json(respuesta)
    
}

ProductoCtrl.eliminar=async(req,res)=>{
    const id=req.params.id
    await Producto.findByIdAndRemove({_id:id})
    res.json({
        mensaje:'Producto Eliminado'
    })

}
ProductoCtrl.actualizar=async(req,res)=>{
    const id=req.params.id
    await  Producto.findByIdAndUpdate({_id:id}, req.body)
    res.json({
        mensaje:'Producto Actualizado'
    })
}

ProductoCtrl.buscarproducto=async(req,res)=>{
    const descripcion=req.params.descripcion
    const respuesta=await Producto.findOne({descripcion:{$regex:".*"+descripcion+".*"}})
    res.json(respuesta)
}
module.exports=ProductoCtrl