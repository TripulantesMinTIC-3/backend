const {Router} = require("express")
const router = Router()
const VentasCtrl = require("../controllers/Ventas.controllers")
const Auth = require("../helper/Auth")


router.delete("/delete/:id",VentasCtrl.eliminar)
router.get("/listarventas/:id",VentasCtrl.ventasdeunvendedor)
router.get("/listar/:id",VentasCtrl.listarid)
router.get("/listarventas", VentasCtrl.listar)
router.post("/crear",VentasCtrl.crear)
router.put("/actualizar/:id",VentasCtrl.actualizar)
router.get("/buscar/:id",VentasCtrl.buscarventa)







module.exports = router
