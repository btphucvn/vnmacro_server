import MarketNameService from "../services/MarketNameService";

let getAllMarketName= async(req,res)=>{
    try{
        let data = await MarketNameService.getAllMarketName();
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
    getAllMarketName:getAllMarketName
}