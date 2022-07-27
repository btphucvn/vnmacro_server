import db from '../models/index';


let getDataByIdRowDataLevel1 = (id_row_data_level1) => {
    return new Promise(async (resolve, reject) => {
        try {
            let datas = db.Row_Data_Level1_Value.findAll({
                where: { id_row_data_level1: id_row_data_level1},
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