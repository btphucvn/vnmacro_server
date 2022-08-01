import db from '../models/index';

import RowDataLevel3ValueService from '../services/RowDataLevel3ValueService';
import RowDataLevel2ValueService from '../services/RowDataLevel2ValueService';
import RowDataLevel1ValueService from '../services/RowDataLevel1ValueService';
import MacroTypeService from "../services/MacroTypeService";

import ToolDate from '../utils/ToolDate'
let getTableByKeyIDMacroType = (key_id_macro_type, value_type) => {
    return new Promise(async (resolve, reject) => {
        let macroTypes = await MacroTypeService.getIDMacroByKeyID(key_id_macro_type);
        let id_macro_type;
        let error = {};
        error.errCode = 1;
        error.errMessage = "Wrong keyID";
        if (macroTypes) {
            id_macro_type = macroTypes.id;
        }
        else {
            resolve(error);
        }
        try {
            let tables = await db.Table.findAll({
                where: { id_macro_type: id_macro_type, value_type: value_type },
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                },
                include: [
                    {
                        model: db.AllKey,
                        as: 'names',
                        attributes: ['name_vi'],
                    },

                    {
                        model: db.Row_Data_Level1,
                        as: 'rows',
                        attributes: {
                            exclude: ['createdAt', 'updatedAt']
                        },

                        include: [
                            {
                                model: db.AllKey,
                                as: 'names',
                                attributes: ['name_vi'],
                            },

                            {
                                model: db.Row_Data_Level2, as: 'rows',
                                attributes: {
                                    exclude: ['createdAt', 'updatedAt']
                                },
                                include: [
                                    {
                                        model: db.AllKey,
                                        as: 'names',
                                        attributes: ['name_vi'],
                                    },
                                    {
                                        model: db.Row_Data_Level3,
                                        as: 'rows',
                                        attributes: {
                                            exclude: ['createdAt', 'updatedAt']
                                        },
                                        include: [
                                            {
                                                model: db.AllKey,
                                                as: 'names',
                                                attributes: ['name_vi'],
                                            },
                                        ]
                                    }]
                            }
                        ],
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
            tables = JSON.stringify(tables);
            tables = JSON.parse(tables);

            // không sử dụng eager loading vì load quá lâu
            // duyệt từng table
            for (let itemTable of tables) {
                let headerData = [];
                //vào row level1
                for (let row_level1 of itemTable.rows) {
                    //vào row level2
                    row_level1.data = await RowDataLevel1ValueService.getDataByIdRowDataLevel1(row_level1.id);
                    for (let data of row_level1.data) {
                        data.timestamp = parseFloat(data.timestamp);
                        data.value = parseFloat(data.value);
                    }
                    if (row_level1.data.length > headerData.length) { headerData = row_level1.data }
                    row_level1.data = convertToArrayHighChartData(row_level1.data);
                    let childRowLevel1 = [];
                    for (let row_level2 of row_level1.rows) {

                        row_level2.data = await RowDataLevel2ValueService.getDataByIdRowDataLevel2(row_level2.id);
                        for (let data of row_level2.data) {
                            data.timestamp = parseFloat(data.timestamp);
                            data.value = parseFloat(data.value);
                        }
                        if (row_level2.data.length > headerData.length) { headerData = row_level2.data }
                        row_level2.data = convertToArrayHighChartData(row_level2.data);
                        //vào row level3
                        for (let row_level3 of row_level2.rows) {
                            row_level3.data = await RowDataLevel3ValueService.getDataByIdRowDataLevel3(row_level3.id);
                            for (let data of row_level3.data) {
                                data.timestamp = parseFloat(data.timestamp);
                                data.value = parseFloat(data.value);
                            }
                            row_level3.data = convertToArrayHighChartData(row_level3.data);
                            row_level3.idChild = itemTable.key_id + "_" + row_level1.key_id + "_" + row_level2.key_id + "_" + row_level3.key_id;
                            childRowLevel1.push(row_level3.idChild);
                        }
                        row_level2.idChild = itemTable.key_id + "_" + row_level1.key_id + "_" + row_level2.key_id;
                        childRowLevel1.push(row_level2.idChild);
                    }
                    row_level1.idChild = itemTable.key_id + "_" + row_level1.key_id;
                    row_level1.childRow = childRowLevel1;
                }
                let header = [];
                for (let item of headerData) {
                    header.push(ToolDate.Convert_TimeStamp_To_MMYYYY(parseFloat(item.timestamp)));
                }
                itemTable.header = header;

            }

            resolve(tables);
        } catch (e) {
            reject(e);
        }

    })
}

let convertToArrayHighChartData = (data) => {
    data = JSON.stringify(data);
    data = JSON.parse(data);
    let result = [];
    for (let item of data) {
        let arrItem = [];
        arrItem.push(item.timestamp);
        arrItem.push(item.value);
        result.push(arrItem);
    }

    return result;
}


let getTableByIDMacroType2 = (id_macro_type, valueType) => {
    return new Promise(async (resolve, reject) => {
        try {
            let tables = await db.Table.findAll({
                where: { id_macro_type: id_macro_type, valueType: valueType },
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                },
                include: [
                    {
                        model: db.AllKey,
                        as: 'names',
                        attributes: ['name_vi'],
                    },

                    {
                        model: db.Row_Data_Level1,
                        as: 'rows',
                        attributes: {
                            exclude: ['createdAt', 'updatedAt']
                        },

                        include: [
                            {
                                model: db.AllKey,
                                as: 'names',
                                attributes: ['name_vi'],
                            },
                            {
                                model: db.Row_Data_Level1_Value, as: 'data',
                                attributes: ['timestamp', 'value'],
                            },

                            {
                                model: db.Row_Data_Level2, as: 'rows',
                                attributes: {
                                    exclude: ['createdAt', 'updatedAt']
                                },
                                include: [
                                    {
                                        model: db.AllKey,
                                        as: 'names',
                                        attributes: ['name_vi'],
                                    },
                                    {
                                        model: db.Row_Data_Level2_Value, as: 'data',
                                        attributes: ['timestamp', 'value'],
                                    },
                                    {
                                        model: db.Row_Data_Level3,
                                        as: 'rows',
                                        attributes: {
                                            exclude: ['createdAt', 'updatedAt']
                                        },
                                        include: [
                                            {
                                                model: db.AllKey,
                                                as: 'names',
                                                attributes: ['name_vi'],
                                            },
                                        ]
                                    }]
                            }
                        ],
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
                    [
                        { model: db.Row_Data_Level1, as: 'rows' }, { model: db.Row_Data_Level1_Value, as: 'data' },
                        'timestamp',
                        'DESC'
                    ],
                    [
                        { model: db.Row_Data_Level1, as: 'rows' }, { model: db.Row_Data_Level2, as: 'rows' }, { model: db.Row_Data_Level2_Value, as: 'data' },
                        'timestamp',
                        'DESC'
                    ],


                ],

                raw: false,
                nest: true,
            });
            tables = JSON.stringify(tables);
            tables = JSON.parse(tables);

            // không sử dụng eager loading vì load quá lâu
            // duyệt từng table
            for (let itemTable of tables) {

                //vào row level1
                for (let row_level1 of itemTable.rows) {
                    //vào row level2
                    row_level1.level = 1;
                    let childRowLevel1 = [];
                    for (let row_level2 of row_level1.rows) {
                        //vào row level3
                        let childRowLevel2 = [];
                        for (let row_level3 of row_level2.rows) {
                            let data = await RowDataLevel3ValueService.getDataByIdRowDataLevel3(row_level3.id);
                            row_level3.data = data;
                            row_level3.idChild = itemTable.key_id + "_" + row_level1.key_id + "_" + row_level2.key_id + "_" + row_level3.key_id;
                            childRowLevel2.push(row_level3.idChild);
                            childRowLevel1.push(row_level3.idChild);
                        }
                        row_level2.childRow = childRowLevel2;
                        row_level2.idChild = itemTable.key_id + "_" + row_level1.key_id + "_" + row_level2.key_id;
                        childRowLevel1.push(row_level2.idChild);
                    }
                    row_level1.idChild = itemTable.key_id + "_" + row_level1.key_id;
                    row_level1.childRow = childRowLevel1;
                }
            }


            resolve(tables);
        } catch (e) {
            reject(e);
        }

    })
}

module.exports = {
    getTableByKeyIDMacroType: getTableByKeyIDMacroType,

}