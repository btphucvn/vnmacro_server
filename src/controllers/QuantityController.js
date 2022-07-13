import QuantityService from "../services/QuantityService";

let getAllQuantity= async(req,res)=>{
    try{
        let data = await QuantityService.getAllQuantityService();
        let result={};
        result.errCode=0;
        result.data=data;
        return res.status(200).json(result);
    }catch(e){
        return res.status(200).json({
            errCode:-1,
            errMessage:'Error from server: '+e,
        })
    }
}
module.exports = {
    getAllQuantity:getAllQuantity
}