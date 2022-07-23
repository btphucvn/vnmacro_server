
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

let getValueTypeByKeyIDMacro = (keyIDMacro) => {
    return new Promise(async (resolve, reject) => {
        try {


            const macroTypes = await db.Macro_Type.findAll({
                where: {
                    keyID: keyIDMacro,
                },
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                },
                include: [
                    {
                        model: db.Table,
                        as: 'valueTypes',
                        attributes: {
                            exclude: ['createdAt', 'updatedAt'],
                            
                        },
                    }
                ],
                raw: false,
                nest:true,
            });

            let result = {};
            result.errCode = 0;
            result.data = [];
            for (let macroType of macroTypes) {
                for (let valueType of macroType.valueTypes) {
                    result.data.push(valueType.valueType)
                }
            }
            result.data= result.data.filter((v, i, a) => a.indexOf(v) === i);
            resolve(result);
        } catch (e) {
            reject(e);
        }

    })
}

let getIDMacroByKeyID = (keyID) => {
    
    return new Promise(async (resolve, reject) => {
        try {


            const macroTypes = await db.Macro_Type.findOne({
                where: {
                    keyID: keyID,
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
    getIDMacroByKeyID:getIDMacroByKeyID,
    getValueTypeByKeyIDMacro:getValueTypeByKeyIDMacro

}