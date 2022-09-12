const express = require("express");

const {
  leerMaterial,
  agregarMaterial,
  //redireccionamiento
} = require("../controllers/homeController");

const materialValidar = require("../middlewares/materialValidar");

const router = express.Router();

router.get("/",leerMaterial);
router.post("/", materialValidar, agregarMaterial);

module.exports = router;
