import db from '../models/index';


let getDataByIdRowDataLevel1 = (idRowDataLevel1) => {
    return new Promise(async (resolve, reject) => {
        try {
            let datas = db.Row_Data_Level1_Value.findAll({
                where: { idRowDataLevel1: idRowDataLevel1},
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
    getDataByIdRowDataLevel1: getDataByIdRowDataLevel1,

}