const {Router}=require('express')
const router=Router()
const ProductoCtrl=require('../controllers/Productos.controllers')
const Auth=require('../helper/Auth')

router.post('/crear',ProductoCtrl.crear)
router.get('/listarproductos', ProductoCtrl.listar)
router.get('/listar/:id',ProductoCtrl.listarid)
router.delete('/eliminar/:id', ProductoCtrl.eliminar)
router.put('/actualizar/:id', ProductoCtrl.actualizar)
router.get('/buscar/:descripcion', ProductoCtrl.buscarproducto)



module.exports=router
