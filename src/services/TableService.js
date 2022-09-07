import db from '../models/index';

import RowDataLevel3ValueService from '../services/RowDataLevel3ValueService';
import RowDataLevel2ValueService from '../services/RowDataLevel2ValueService';
import RowDataLevel1ValueService from '../services/RowDataLevel1ValueService';
import YAxisService from '../services/YAxisService';

import MacroTypeService from "../services/MacroTypeService";

import ToolDate from '../utils/ToolDate'
import _ from 'lodash';
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
                    // {
                    //     model: db.AllKey,
                    //     as: 'names',
                    //     attributes: ['name_vi'],
                    // },
                    {
                        model: db.Row, as: 'rows',
                        attributes: {
                            exclude: ['createdAt', 'updatedAt']
                        },
                        include: [

                            {
                                model: db.Row_Value,
                                as: 'data',
                                attributes: ['timestamp', 'value'],
                            },
                        ]
                    }
                ],

                order: [
                    [
                        'stt',
                        'ASC'
                    ],
                    [
                        { model: db.Row, as: 'rows' },
                        'stt',
                        'ASC'
                    ],
                    [
                        { model: db.Row, as: 'rows' },
                        { model: db.Row_Value, as: 'data' },
                        'timestamp',
                        'desc'
                    ],
                ],
                raw: false,
                nest: true,
            });
            tables = JSON.stringify(tables);
            tables = JSON.parse(tables);

            for (let table of tables) {
                let headerData = [];
                let headerTimeStamp = [];
                for (let row of table.rows) {
                    row.data = convertToArrayHighChartData(row.data);
                    if (row.data.length > headerData.length) {
                        headerData = row.data;
                    }
                }
                let header = [];
                for (let item of headerData) {
                    header.push(ToolDate.Convert_TimeStamp_To_MMYYYY(item[0]));
                    headerTimeStamp.push(item[0]);
                }
                table.header = header;
                table.headerTimeStamp = headerTimeStamp;
            }

            for (let table of tables) {
                for (let row of table.rows) {
                        const arr = getArrTimeStampNotExitsInHeader(table.headerTimeStamp,row.data);
                        //console.log(arr);
                        for(let item of arr){
                            let itemPush = [item,undefined];
                            row.data.push(itemPush);
                            
                        }
                        row.data = _.orderBy(row.data,[0],['desc']);
                }
            }
            // let test2 =[1,2];
            // let test3 = [2,4];
            // console.log(_.difference(test2, test3))

            // let test = [[2, 481224.9], [1, 478150.8]];
            // test = _.orderBy(test, [0],['asc']);
            // console.log(test);
            resolve(tables);
        } catch (e) {
            reject(e);
        }

    })
}


let getArrTimeStampNotExitsInHeader = (arrTimeStampHeader, data) => {
    let arrTimeStampRow = [];
    //console.log(data);
    for(let item of data){
        arrTimeStampRow.push(item[0]);
    }
    return _.difference(arrTimeStampHeader, arrTimeStampRow);
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




module.exports = {
    getTableByKeyIDMacroType: getTableByKeyIDMacroType,

}