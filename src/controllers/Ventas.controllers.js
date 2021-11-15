const VentasCtrl = {}
const Ventas = require("../models/Ventas.model")

VentasCtrl.crear = async (req, res) => {
    const {Fecha_Venta, Producto, Referencia,Precio_unitario,Descripcion,Total,Vendedor,Cantidad,Estado_venta} = req.body;
    const NuevaVenta= new Venta({ Fecha_Venta, Producto, Referencia,Precio_unitario,Descripcion,Total,Vendedor,Cantidad, Estado_venta})

    const respuesta = await NuevaVenta.save()
    res.json({
        mensaje: "Venta creada",
        Fecha_Venta: req.body.fecha_Venta,
        Producto: req.body.Producto,
        Referencia: req.body.Referencia,
        Precio_unitario:req.body.Precio_unitario,
        Descripcion: req.body.Descripcion,
        Total: req.body.Total,
        Vendedor: req.body.Vendedor,
        Cantidad: req.body.Cantidad,
        Estado_venta:req.body.Estado_venta,        
        respuesta
    })
}

VentasCtrl.listar = async (req, res) => {
    const respuesta = await Ventas.find()
    res.json(respuesta)
}

VentasCtrl.listarid = async (req, res) => {
    const id = req.params.id
    const respuesta = await Ventas.findById({ _id: id })
    res.json(respuesta)
}
VentasCtrl.ventasdeunjefe = async (req, res) => {
    const id = req.params.id
    const respuesta = await Ventas.find({ usuario: id })
    res.json(respuesta)
}

VentasCtrl.eliminar = async (req, res) => {
    const id = req.params.id
    await Venta.findByIdAndRemove({ _id: id })
    res.json({
        mensaje: "Venta eliminada",
        valortotaFecha_Vental: Ventas.Fecha_Venta,
        Producto: Ventas.Producto,
        Referencia: Ventas.Referencia,
        Precio_unitario: Ventas.Precio_unitario,
        Descripcion: Ventas.Descripcion,
        Total: Ventas.Total,
        Vendedor: Ventas.Vendedor,
        Cantidad: Ventas.Cantidad,
        Estado_venta: Ventas.Estado_venta,


    })

}

VentasCtrl.actualizar = async(req,res)=>{
    const id=req.params.id
    await Venta.findByIdAndUpdate({_id:id},req.body)
    res.json({
        mensaje: "Venta actualizada",
        valortotaFecha_Vental: Ventas.Fecha_Venta,
        Producto: Ventas.Producto,
        Referencia: Ventas.Referencia,
        Precio_unitario: Ventas.Precio_unitario,
        Descripcion: Ventas.Descripcion,
        Total: Ventas.Total,
        Vendedor: Ventas.Vendedor,
        Cantidad: Ventas.Cantidad,
        Estado_venta: Ventas.Estado_venta,

    })


}
VentasCtrl.buscarventa=async (req,res)=>{
    const idventas =req.params.idventas
    const respuesta = await Ventas.find({identificador: { $regex: ".*" + idventas + ".*" }});

    res.json(respuesta)

}


module.exports = VentasCtrl