const {Router}=require('express')
const router=Router()
const UsuarioCtrl=require('../controllers/Usuario.controllers')
const Auth = require('../helper/Auth')

//router.post('/crear',UsuarioCtrl.crear)


router.post('/login',Auth.verificartoken,UsuarioCtrl.login)
router.post("/crear",Auth.verificartoken,UsuarioCtrl.crearUsuario)
router.get("/listar",Auth.verificartoken,UsuarioCtrl.listar)
router.get("/listar/:id",Auth.verificartoken,UsuarioCtrl.listarid)
router.delete("/delete/:id",Auth.verificartoken,UsuarioCtrl.eliminar)
router.put("/actualizar/:id",Auth.verificartoken,UsuarioCtrl.actualizar)
router.get("/buscar/:correo",Auth.verificartoken,UsuarioCtrl.buscarusuario)

module.exports=router

