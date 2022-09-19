const materialValidar = (req, res, next) => {
  try {
    const {
      codigo,
      nombre,
      cantidad,
      unidadMedida,
      descripcion,
      precioUnitario,
      precioUnitarioUSD,
      proveedor,
    } = req.body;

    if (
      codigo !== "" &&
      nombre !== "" &&
      descripcion !== "" &&
      cantidad !== "" &&
      unidadMedida !== "" &&
      precioUnitario !== "" &&
      precioUnitarioUSD !== "" &&
      proveedor !== ""
    ) {
      return next();
    } else {
      throw new Error("No valido1");
    }
  } catch (error) {
    return res.send("los campos no pueden ir vacios");
  }
};

module.exports = materialValidar;
