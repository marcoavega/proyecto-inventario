const Material = require("../models/Material");

const leerMaterial = async (req, res) => {
  try {
   const material = await Material.find().lean();
    res.render("home", { material: material });
  } catch (error) {
    console.log(error);
    res.send("Algo fallo");
  }
};


const agregarMaterial = async (req, res) => {
  const { codigo } = req.body;
  try {
    const material = new Material({ codigo: codigo });
    await material.save();
    res.redirect("/");
  } catch (error) {
    console.log(error);
    res.send("error algo fallo");
  }
};

module.exports = {
  leerMaterial,
  agregarMaterial,
  //redireccionamiento,
};
