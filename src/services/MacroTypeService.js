
import db from '../models/index';


let getMacroTypeByKeyIDMacro = (keyIDMacro) => {
    return new Promise(async (resolve, reject) => {
        try {

            const { Op } = require("sequelize");

            const macroTypes = await db.Macro_Type.findAll({
                where: {
                    keyIDMacro: keyIDMacro,
                },
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                },
                order: [
                    ['stt', 'ASC'],
                ],
                raw: true,
            });

            let result = {};
            result.errCode = 0;
            result.data = macroTypes
            resolve(result);
        } catch (e) {
            reject(e);
        }

    })
}


module.exports = {
    getMacroTypeByKeyIDMacro: getMacroTypeByKeyIDMacro,

}