import db from '../models/index';


let getYAxisByUnit = (unit) => {
    return new Promise(async (resolve, reject) => {
        try {
            let yAxis = await db.YAxis.findOne({
                where: { unit: unit },
                raw: true,
            });
           // console.log(yAxis.yaxis)
           if(yAxis)
           {
                resolve(yAxis.yaxis);
           }
           resolve(-1);
        } catch (e) {
            reject(-1);
        }

    })
}


module.exports = {
    getYAxisByUnit: getYAxisByUnit,

}