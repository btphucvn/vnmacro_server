
import db from '../models/index';


let getMacroTypeByKeyIDMacro = (key_id_macro) => {
    return new Promise(async (resolve, reject) => {
        try {

            const { Op } = require("sequelize");

            const macroTypes = await db.Macro_Type.findAll({
                where: {
                    key_id_macro: key_id_macro,
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

let getValueTypeByKeyIDMacro = (key_id_macro) => {
    return new Promise(async (resolve, reject) => {
        try {


            const macroTypes = await db.Macro_Type.findAll({
                where: {
                    key_id: key_id_macro,
                },
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                },
                include: [
                    {
                        model: db.Table,
                        as: 'value_types',
                        attributes: {
                            exclude: ['createdAt', 'updatedAt'],

                        },
                    }
                ],
                raw: false,
                nest: true,
            });

            let result = {};
            result.errCode = 0;
            result.data = [];
            for (let macroType of macroTypes) {
                for (let valueType of macroType.value_types) {
                    result.data.push(valueType.value_type)
                }
            }
            result.data = result.data.filter((v, i, a) => a.indexOf(v) === i);
            resolve(result);
        } catch (e) {
            reject(e);
        }

    })
}

let getIDMacroByKeyID = (key_id) => {

    return new Promise(async (resolve, reject) => {
        try {


            const macroTypes = await db.Macro_Type.findOne({
                where: {
                    key_id: key_id,
                },
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                },
                raw: true,
            });

            resolve(macroTypes);
        } catch (e) {
            reject(e);
        }

    })
}


module.exports = {
    getMacroTypeByKeyIDMacro: getMacroTypeByKeyIDMacro,
    getIDMacroByKeyID: getIDMacroByKeyID,
    getValueTypeByKeyIDMacro: getValueTypeByKeyIDMacro

}