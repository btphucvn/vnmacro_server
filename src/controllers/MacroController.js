import MacroService from "../services/MacroService";

let getAllMacro= async(req,res)=>{
    try{
        let data = await MacroService.getAllMacro();
        return res.status(200).json(data);
    }catch(e){
        console.log("Get all code error: ",e)
        return res.status(200).json({
            errCode:-1,
            errMessage:'Error from server',
        })
    }
}
module.exports = {
    getAllMacro:getAllMacro
}