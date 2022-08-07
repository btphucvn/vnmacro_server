
import db from '../models/index';


let getMacroData = (key_id_macro_type,value_type) => {
    return new Promise(async (resolve, reject) => {
        try {

            let data = await db.Macro_Data.findOne({
                where:{
                    key_id_macro_type:key_id_macro_type,
                    value_type:value_type
                },
                raw: false,
                nest: true,
            });
            // data.map((data)=>{
            //     data.data=JSON.parse(data.data);
            // })
            data.data=JSON.parse(data.data);
            resolve(data.data);
        } catch (e) {
            reject(e);
        }

    })
}


module.exports = {
    getMacroData:getMacroData,

}