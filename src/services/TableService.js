import db from '../models/index';


let getTableByIDMacroType = (idMacroType, valueType) => {
    return new Promise(async (resolve, reject) => {
        try {
            let tables = db.Table.findAll({
                where: { idMacroType: idMacroType,valueType: valueType },
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                },
                include: [{
                    model: db.Row_Data_Level1,
                    as: 'rows',
                    attributes: {
                        exclude: ['createdAt', 'updatedAt']
                    },
                    include: [{
                        model: db.Row_Data_Level1_Value, as: 'data',
                        attributes: ['timeStamp', 'value'],
                    },
                    {
                        model: db.Row_Data_Level2, as: 'rows',
                        attributes: {
                            exclude: ['createdAt', 'updatedAt']
                        },
                        include: [{
                            model: db.Row_Data_Level2_Value, as: 'data',
                            attributes: ['timeStamp', 'value'],
                        },
                        {
                            model: db.Row_Data_Level3,
                            as: 'rows',
                            include: [{
                                model: db.Row_Data_Level3_Value, as: 'data',
                                attributes: ['timeStamp', 'value'],
                            }]
                        }]
                    }],
                }],

                order: [
                    [
                        { model: db.Row_Data_Level1, as: 'rows' },
                        'id',
                        'ASC'
                    ],

                    [
                        { model: db.Row_Data_Level1, as: 'rows' }, { model: db.Row_Data_Level2, as: 'rows' },
                        'id',
                        'asc'
                    ],

                ],

                raw: false,
                nest: true,
            });
            // let tables = db.Row_Data_Level1_Value.findAll({

            //     raw: false,
            //     nest: true,
            // });
            resolve(tables);
        } catch (e) {
            reject(e);
        }

    })
}


module.exports = {
    getTableByIDMacroType: getTableByIDMacroType,

}