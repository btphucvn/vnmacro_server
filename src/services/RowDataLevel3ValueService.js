import db from '../models/index';


let getDataByIdRowDataLevel3 = (id_row_data_level3) => {
    return new Promise(async (resolve, reject) => {
        try {
            let datas = db.Row_Data_Level3_Value.findAll({
                where: { id_row_data_level3: id_row_data_level3 },
                attributes: ['timestamp', 'value'],
                order: [
                    ['timestamp', 'DESC']
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