const express = require("express");

const {
  leerMaterial,
  agregarMaterial,
  eliminarMaterial,
  editarMaterialForm,
  editarMaterial,
  //redireccionamiento
} = require("../controllers/homeController");

const materialValidar = require("../middlewares/materialValidar");

const router = express.Router();

router.get("/",leerMaterial);
router.post("/", materialValidar, agregarMaterial);
router.get("/editar/:id",editarMaterialForm);
router.post("/editar/:id",editarMaterial);
router.get("/eliminar/:id", eliminarMaterial);

module.exports = router;