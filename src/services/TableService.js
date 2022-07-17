import db from '../models/index';


let getTableByIDMacroType = (idMacroType) => {
    return new Promise(async (resolve, reject) => {
        try {
            let tables = db.Table.findAll({
                where: { idMacroType: idMacroType },
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                },
                include: [{
                    model: db.Row_Data_Level1,
                    as: 'rows',
                    include: [{
                        model: db.Row_Data_Level1_Value, as: 'data',
                        attributes: ['timeStamp', 'value'],

                    },
                    {
                        model: db.Row_Data_Level2, as: 'rows',
                        include: [{
                            model: db.Row_Data_Level2_Value, as: 'data',
                            attributes: ['timeStamp', 'value'],
                        }]
                    }],
                }],

                order: [
                    [
                        { model: db.Row_Data_Level1, as: 'rows' },
                        'stt',
                        'ASC'
                    ],

                    [
                        { model: db.Row_Data_Level1, as: 'rows' }, { model: db.Row_Data_Level2, as: 'rows' },
                        'stt',
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