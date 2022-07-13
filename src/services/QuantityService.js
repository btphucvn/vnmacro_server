import db from '../models/index';


let getAllQuantityService = () => {
    return new Promise(async(resolve, reject) => {
        try {
            let quantitys = db.Quantity.findAll({
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                },
                raw: true,
            });

            resolve(quantitys);
        } catch (e) {
            reject(e);
        }

    })
}


module.exports = {
    getAllQuantityService: getAllQuantityService,

}