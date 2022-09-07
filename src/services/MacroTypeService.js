
import db from '../models/index';


let getMacroTypeByKeyIDMacro = (key_id_macro) => {
    return new Promise(async (resolve, reject) => {
        try {

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
                nest: true,
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
            let tmpResult = []
            const arrValueTypeSTT = ["Value", "MoM", "QoQ", "YoY", "YoY Ave", "Q", "YTD", "TTM"];
            for (let macroType of macroTypes) {
                for (let valueType of macroType.value_types) {
                    tmpResult.push(valueType.value_type)
                }
            }
            for (let valueType of arrValueTypeSTT) {
                for (let item of tmpResult) {
                    if (item == valueType) {
                        result.data.push(valueType);
                    }
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