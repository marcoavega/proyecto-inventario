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

const leerMaterialEntrada = async (req, res) => {
  try {
    const material = await Material.find().lean();
    res.render("entrada", { material: material });
  } catch (error) {
    console.log(error);
    res.send("Algo fallo");
  }
  const material = [];
};

const leerMaterialSalida = async (req, res) => {
  try {
    const material = await Material.find().lean();
    res.render("salida", { material: material });
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
  const { unidadMedida } = req.body;
  const { precioUnitario } = req.body;
  const { precioUnitarioUSD } = req.body;
  const { proveedor } = req.body;

  if (
    !isNaN(codigo) &&
    !isNaN(cantidad) &&
    !isNaN(precioUnitario) &&
    !isNaN(precioUnitarioUSD)
  ) {
    try {
      const material = new Material({
        codigo: codigo,
        nombre: nombre,
        descripcion: descripcion,
        cantidad: cantidad,
        precioUnitario: precioUnitario,
        precioUnitarioUSD: precioUnitarioUSD,
        proveedor: proveedor,
        unidadMedida: unidadMedida,
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
      unidadMedida: material,
      precioUnitario: material,
      precioUnitarioUSD: material,
      proveedor: material,
    });
  } catch (error) {
    console.log(error);
    res.send("error algo fallo ingrese tipo de datos correctos");
  }
};

const editarMaterial = async (req, res) => {
  const { id } = req.params;
  const {
    codigo,
    nombre,
    descripcion,
    cantidad,
    unidadMedida,
    precioUnitario,
    precioUnitarioUSD,
    proveedor,
  } = req.body;
  if (
    !isNaN(codigo) &&
    !isNaN(cantidad) &&
    !isNaN(precioUnitario) &&
    !isNaN(precioUnitarioUSD)
  ) {
    await Material.findByIdAndUpdate(id, {
      codigo: codigo,
      nombre: nombre,
      descripcion: descripcion,
      cantidad: cantidad,
      unidadMedida: unidadMedida,
      precioUnitario: precioUnitario,
      precioUnitarioUSD: precioUnitarioUSD,
      proveedor: proveedor,
    });
    console.log(
      codigo,
      nombre,
      descripcion,
      cantidad,
      unidadMedida,
      precioUnitario,
      precioUnitarioUSD,
      proveedor
    );
    res.redirect("/");
  } else {
    res.send("error algo fallo ingrese tipo de datos correctos2");
  }
};

const entradaMaterial = async (req, res) => {
  const { id } = req.params;
  const { cantidad } = req.body;
  if (!isNaN(cantidad)) {
    await Material.findByIdAndUpdate(id, 
		{
      $inc :
      {
        cantidad : cantidad
      }
    });
    console.log(cantidad);
    res.redirect("/");
  } else {
    res.send("error algo fallo ingrese tipo de datos correctos2");
  }
};

const salidaMaterial = async (req, res) => {
  const { id } = req.params;
  const { cantidad } = req.body;
  if (!isNaN(cantidad)) {
    await Material.findByIdAndUpdate(id, 
		{
      $inc :
      {
        cantidad : -cantidad
      }
    });
    console.log(cantidad);
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
  leerMaterialEntrada,
  entradaMaterial,
  salidaMaterial,
  leerMaterialSalida
};
