
const materialValidar = (req,res,next) => {
    try{
        const {codigo} = req.body;
        if(codigo !== "null"){
            return next();
        }else{
            throw new Error ("No valido");
        }
    }catch(error){
        return res.send("No valido");
    }
}

module.exports = materialValidar;