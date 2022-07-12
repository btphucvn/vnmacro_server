import db from '../models/index';


let getAllStockService = () => {
    return new Promise(async(resolve, reject) => {
        try {
            let stocks = db.Stock.findAll({
                raw: true,
            });
            resolve(stocks);
        } catch (e) {
            reject(e);
        }

    })
}


module.exports = {
    getAllStockService: getAllStockService,

}