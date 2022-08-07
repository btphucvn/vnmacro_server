
import db from '../models/index';


let getAllMacro = () => {
    return new Promise(async (resolve, reject) => {
        try {

            const macros = await db.Macro.findAll({
                include: [
                    {
                        model: db.AllKey,
                        as: 'names',
                        attributes: ['name_vi'],
                    },
                    {
                        model: db.Macro_Type,
                        as: 'macro_types',
                        include: [
                            {
                                model: db.AllKey,
                                as: 'names',
                                attributes: ['name_vi'],
                            }
                        ]
                    },

                ],
                order: [
                    [
                        { model: db.Macro_Type, as: 'macro_types' },
                        'stt',
                        'ASC'
                    ],

                    [
                        'id'
                        ,'ASC'
                    ]

                ],
                raw: false,
                nest: true,
            });

            // //console.log(business2);
            resolve(macros);
        } catch (e) {
            reject(e);
        }

    })
}


module.exports = {
    getAllMacro:getAllMacro,

}