const mongoose = require("mongoose");
//const { nanoid } = require("nanoid");
const {Schema} = mongoose;

const materialSchema = new Schema({
    codigo:{
        type: String,
        unique: true,
        require: true
    },
});

const Material = mongoose.model("Material", materialSchema);
module.exports = Material;
