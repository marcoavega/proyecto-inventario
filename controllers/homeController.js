const Material = require("../models/Material");

const leerMaterial = async (req, res) => {
  try {
    const material = await Material.find().lean();
    res.render("home", { material: material });
  } catch (error) {
    console.log(error);
    res.send("Algo fallo");
  }
  const material = [];
};

const agregarMaterial = async (req, res) => {
  const { codigo } = req.body;
  const { nombre } = req.body;
  const { descripcion } = req.body;
  const { cantidad } = req.body;

  if (!isNaN(codigo) && !isNaN(cantidad)) {
    try {
      const material = new Material({
        codigo: codigo,
        nombre: nombre,
        descripcion: descripcion,
        cantidad: cantidad,
      });
      await material.save();
      res.redirect("/");
    } catch (error) {
      console.log(error);
      res.send("error algo fallo ingrese tipo de datos correctos");
    }
  } else {
    res.send("error algo fallo ingrese tipo de datos correctos1");
  }
};

const editarMaterialForm = async (req, res) => {
  const { id } = req.params;
  try {
    const material = await Material.findById(id).lean();
    res.render("home", {
      codigo: material,
      nombre: material,
      descripcion: material,
      cantidad: material,
    });
  } catch (error) {
    console.log(error);
    res.send("error algo fallo ingrese tipo de datos correctos");
  }
};

const editarMaterial = async (req, res) => {
  const { id } = req.params;
  const { codigo, nombre, descripcion, cantidad } = req.body;
  if (!isNaN(codigo) && !isNaN(cantidad)) {
    await Material.findByIdAndUpdate(id, {
      codigo: codigo,
      nombre: nombre,
      descripcion: descripcion,
      cantidad: cantidad,
    });
    console.log(codigo, nombre, descripcion, cantidad);
    res.redirect("/");
  } else {
    res.send("error algo fallo ingrese tipo de datos correctos2");
  }
};

const eliminarMaterial = async (req, res) => {
  const { id } = req.params;
  try {
    await Material.findByIdAndDelete(id);
    res.redirect("/");
  } catch (error) {
    console.log(error);
    res.send("error algo fallo");
  }
};

module.exports = {
  leerMaterial,
  agregarMaterial,
  editarMaterialForm,
  editarMaterial,
  eliminarMaterial,
};
