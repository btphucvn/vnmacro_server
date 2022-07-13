import StockService from "../services/StockService";

let getAllStock= async(req,res)=>{
    try{
        let data = await StockService.getAllStockService();
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
    getAllStock:getAllStock
}