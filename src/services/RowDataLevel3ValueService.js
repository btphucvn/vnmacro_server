import db from '../models/index';


let getDataByIdRowDataLevel3 = (idRowDataLevel3) => {
    return new Promise(async (resolve, reject) => {
        try {
            let datas = db.Row_Data_Level3_Value.findAll({
                where: { idRowDataLevel3: idRowDataLevel3},
                attributes: ['timeStamp', 'value'],
                order:[
                    ['timeStamp','DESC']
                ],
                raw: false,
                nest: true,
            });
            resolve(datas);
        } catch (e) {
            reject(null);
        }

    })
}


module.exports = {
    getDataByIdRowDataLevel3: getDataByIdRowDataLevel3,

}