const {Router}=require('express')
const router=Router()
const EmpleadoCtrl=require('../controllers/Empleado.controllers')

router.post('/crear',EmpleadoCtrl.crear)

module.exports=router

