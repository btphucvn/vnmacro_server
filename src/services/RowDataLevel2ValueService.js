import db from '../models/index';


let getDataByIdRowDataLevel2 = (id_row_data_level2) => {
    return new Promise(async (resolve, reject) => {
        try {
            let datas = db.Row_Data_Level2_Value.findAll({
                where: { id_row_data_level2: id_row_data_level2},
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