import Business2Service from "../services/Business2Service";

let getAllBusiness2= async(req,res)=>{
    try{
        let data = await Business2Service.getAllBusiness2();
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
    getAllBusiness2:getAllBusiness2
}