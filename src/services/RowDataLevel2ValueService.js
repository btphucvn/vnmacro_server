import db from '../models/index';


let getDataByIdRowDataLevel2 = (idRowDataLevel2) => {
    return new Promise(async (resolve, reject) => {
        try {
            let datas = db.Row_Data_Level2_Value.findAll({
                where: { idRowDataLevel2: idRowDataLevel2},
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
    getDataByIdRowDataLevel2: getDataByIdRowDataLevel2,

}