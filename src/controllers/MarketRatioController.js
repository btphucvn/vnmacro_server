import MarketRatioService from "../services/MarketRatioService";

let getMarketRatioByCode= async(req,res)=>{
    try{
        let data = await MarketRatioService.getMarketRatioByCode(req.query.code);
        //console.log(req.query.code);
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
    getMarketRatioByCode:getMarketRatioByCode
}