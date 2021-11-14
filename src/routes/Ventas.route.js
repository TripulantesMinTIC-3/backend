var express = require("express");
const router = express.Router();

const VentasController = require("../controllers/Ventas.controllers");

router.get("/listarventas", VentasController.getVentas);
router.post("/crearventa", VentasController.addVentas);
router.delete("/borrar/idventa", VentasController.deleteVentas);
router.get("/listar/:idventa", VentasController.getVentaId);
router.put("/actualizar/:id", VentasController.updateVentasById);

module.exports = router;