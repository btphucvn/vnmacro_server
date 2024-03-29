import TableService from "../services/TableService";

let getTableByKeyIDMacroType= async(req,res)=>{
    try{
        let data = await TableService.getTableByKeyIDMacroType(req.query.key_id_macro_type,req.query.value_type);
        return res.status(200).json(data);
    }catch(e){
        console.log("Get all code error table controller: ",e)
        return res.status(200).json({
            errCode:-1,
            errMessage:'Error from server '+e,
        })
    }
}
module.exports = {
    getTableByKeyIDMacroType:getTableByKeyIDMacroType
}