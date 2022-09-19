const express = require("express");

const {
  leerMaterial,
  agregarMaterial,
  eliminarMaterial,
  editarMaterialForm,
  editarMaterial,
  leerMaterialEntrada,
  entradaMaterial,
  leerMaterialSalida,
  salidaMaterial
  //redireccionamiento
} = require("../controllers/homeController");

const materialValidar = require("../middlewares/materialValidar");

const router = express.Router();

router.get("/",leerMaterial);
router.post("/", materialValidar, agregarMaterial);
router.get("/editar/:id",editarMaterialForm);
router.post("/editar/:id",editarMaterial);
router.get("/eliminar/:id", eliminarMaterial);
router.get("/entrada",leerMaterialEntrada);
router.post("/entrada/:id",entradaMaterial);
router.get("/salida",leerMaterialSalida);
router.post("/salida/:id",salidaMaterial);

module.exports = router;