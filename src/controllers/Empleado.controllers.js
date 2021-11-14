const EmpleadoCtrl={}
const Empleado=require('../models/Usuario.model')

EmpleadoCtrl.crear=async(req,res)=>{
    const {nombres,apellidos,identificacion,puesto,tcontrato,jefe}=req.body
    const NuevoEmpleado=new Empleado({
        nombres,apellidos,identificacion,puesto,tcontrato,jefe

    })

   const respuesta = await NuevoEmpleado.save()
   res.json({
       mensaje:'Empleado creado',
       respuesta
   })

}

module.exports=EmpleadoCtrl