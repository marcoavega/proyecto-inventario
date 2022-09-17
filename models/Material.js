const mongoose = require("mongoose");
const { Schema } = mongoose;

const materialSchema = new Schema({
  codigo: {
    type: Number,
    unique: true,
    require: true,
  },
  nombre: {
    type: String,
    unique: true,
    require: true,
  },
  descripcion: {
    type: String,
    unique: false,
    require: true,
  },
  cantidad:{
    type: Number,
    unique: false,
    require: true,
  }
});

const Material = mongoose.model("Material", materialSchema);
module.exports = Material;
 