import db from '../models/index';
import ToolDate from '../utils/ToolDate';
import axios from 'axios'

let getMarketRatioByCode = (code) => {
    return new Promise(async (resolve, reject) => {
        try {
            let pe = [];
            let pb = [];
            const { Op } = require("sequelize");
            const marketRatios = await db.Market_Ratio.findAll({
                where: {
                    code: code,
                  },
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                },
                order: [
                    ['timeStamp', 'ASC'],
                ],
                raw: true,
            });

            for (let i = 0; i < marketRatios.length; i++) {
                //let yyyymmdd = ToolDate.Convert_TimeStamp_To_YYYYMMDD(marketRatios[i].timeStamp);
                pe.push({ time: marketRatios[i].timeStamp, value: marketRatios[i].pe });
                pb.push({ time: marketRatios[i].timeStamp, value: marketRatios[i].pb });
            }

            let result = {};
            result.code = 'VNINDEX';
            result.pe = pe;
            result.pb = pb;

            resolve(result);
        } catch (e) {
            reject(e);
        }

    })
}


module.exports = {
    getMarketRatioByCode: getMarketRatioByCode,

}