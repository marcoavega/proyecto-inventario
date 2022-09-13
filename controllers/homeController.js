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
  try {
    const material = new Material({ codigo: codigo });
    await material.save();
    res.redirect("/");
  } catch (error) {
    console.log(error);
    res.send("error algo fallo");
  }
};

const editarMaterialForm = async(req,res)=>{
  const {id} = req.params;
  try{
    const material = await Material.findById(id).lean();
    res.render("home", {codigo: material});
  }catch(error){
    console.log(error);
    res.send("error algo fallo al editar");
  }
};

const editarMaterial = async(req,res)=>{
  const {id} = req.params;
  const {codigo} = req.body;
  try{
    await Material.findByIdAndUpdate(id,{codigo:codigo});
    res.redirect("/");
  }catch(error){
    console.log(error);
    res.send("error algo fallo al editar");
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
