import TableService from "../services/TableService";

let getTableByIDMacroType= async(req,res)=>{
    try{
        let data = await TableService.getTableByIDMacroType(req.query.idMacroType,req.query.valueType);
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
    getTableByIDMacroType:getTableByIDMacroType
}