import db from '../models/index';


let getDataByIdRowDataLevel1 = (id_row_data_level1) => {
    return new Promise(async (resolve, reject) => {
        try {
            let datas = db.Row_Data_Level1_Value.findAll({
                where: { id_row_data_level1: id_row_data_level1},
                attributes: ['timestamp', 'value'],
                order:[
                    ['timestamp','DESC']
                ],
                raw: false,
                nest: true,
            });
            //datas = JSON.stringify(datas);
            //console.log(datas)
            // datas = JSON.parse(datas);
            // if (datas=!null) {
            //     for (let data of datas) {
            //         data.timeStamp = parseFloat(data.timeStamp);
            //         data.value = parseFloat(data.value);
            //     }
            // }
            resolve(datas);
        } catch (e) {
            reject(null);
        }

    })
}


module.exports = {
    getDataByIdRowDataLevel1: getDataByIdRowDataLevel1,

}