const materialValidar = (req, res, next) => {
  try {
    const { codigo, nombre, cantidad, descripcion } = req.body;
    
    if (codigo !== "" && nombre !== "" && descripcion !== "" && cantidad !== "") {
      return next();
    } else {
      throw new Error("No valido1");
    }
  } catch (error) {
    return res.send("los campos no pueden ir vacios");
  }
};

module.exports = materialValidar;
