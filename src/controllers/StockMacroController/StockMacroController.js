import StockMacroService from "../../services/StockMacroService/StockMacroService";

let getAllSelect= async(req,res)=>{
    try{
        let data = await StockMacroService.getAllSelect();
        return res.status(200).json({
            errCode:0,
            data:data
        });
    }catch(e){
        console.log("Get all code error: ",e)
        return res.status(200).json({
            errCode:-1,
            errMessage:'Error from server',
        })
    }
}

let getFinishedProfitPlan= async(req,res)=>{
    try{
        let data = await StockMacroService.getFinishedProfitPlan(req.query.id);
        return res.status(200).json({
            errCode:0,
            data:data
        });
    }catch(e){
        console.log("Get all code error: ",e)
        return res.status(200).json({
            errCode:-1,
            errMessage:'Error from server',
        })
    }
}
module.exports = {
    getFinishedProfitPlan:getFinishedProfitPlan,
    getAllSelect:getAllSelect,
}