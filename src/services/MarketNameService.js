import db from '../models/index';


let getAllMarketName = () => {
    return new Promise(async (resolve, reject) => {
        try {

            const MarketName = await db.Market_Name.findAll({
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                },

                raw: true,
            });
            //console.log(MarketName);
            resolve(MarketName);
        } catch (e) {
            reject(e);
        }

    })
}


module.exports = {
    getAllMarketName: getAllMarketName,

}