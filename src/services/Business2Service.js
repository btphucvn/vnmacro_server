import db from '../models/index';
import ToolDate from '../utils/ToolDate';
import axios from 'axios'

let getAllBusiness2 = () => {
    return new Promise(async (resolve, reject) => {
        try {

            const business2 = await db.sequelize.query(
                "Select id,name_vi,name_en from business2s",
                {
                    type: db.sequelize.QueryTypes.SELECT
                }
            );
            //console.log(business2);
            resolve(business2);
        } catch (e) {
            reject(e);
        }

    })
}


module.exports = {
    getAllBusiness2: getAllBusiness2,

}