import MarketNameService from "../MarketNameService";
import Business2Service from "../Business2Service";
import db from '../../models/index';

let getAllSelect = () => {
    return new Promise(async (resolve, reject) => {
        try {

            const marketName = await MarketNameService.getAllMarketName();
            const business2 = await Business2Service.getAllBusiness2();
            const result = [...marketName, ...business2]

            // //console.log(business2);
            resolve(result);
        } catch (e) {
            reject(e);
        }

    })
}
let getFinishedProfitPlan = (id) => {
    return new Promise(async (resolve, reject) => {
        try {

            // SELECT  COUNT(C.code) as numberOfStock, SUM(sumPostTaxProfit) as postTaxProfit, SUM(profit_plans.postTaxProfit) as postTaxProfitPlan, ROUND(SUM(sumPostTaxProfit)/SUM(profit_plans.postTaxProfit),2) AS finishPercent
            // FROM profit_plans
            // INNER JOIN
            //     (
            //         SELECT B.Code, SUM(B.postTaxProfit) as sumPostTaxProfit FROM 
            //         (
            //             SELECT A.Code,postTaxProfit 
            //             FROM 
            //                 (
            //                     SELECT Code FROM stocks WHERE business2=6
            //                 ) AS A
            //             INNER JOIN summary_statements ON A.code = summary_statements.code
            //             WHERE quarter>0 and year=2022
            //         )AS B
            //         GROUP BY (B.code)
            //     )AS C
            // ON profit_plans.Code = C.code
            // WHERE profit_plans.Year=2022 and profit_plans.postTaxProfit!=0;
            let queryString = "SELECT  COUNT(C.code) as numberOfStock, SUM(sumPostTaxProfit) as postTaxProfit, SUM(profit_plans.postTaxProfit) as postTaxProfitPlan, ROUND(SUM(sumPostTaxProfit)/SUM(profit_plans.postTaxProfit),2)*100 AS finishedPercent "
            +"FROM profit_plans "
            +"INNER JOIN "
            +"( "
            +"SELECT B.Code, SUM(B.postTaxProfit) as sumPostTaxProfit FROM "
            +"("
            +"SELECT A.Code,postTaxProfit "
            +"FROM "
            +"("
            +"SELECT Code FROM stocks WHERE business2=? "
            +") AS A "
            +"INNER JOIN summary_statements ON A.code = summary_statements.code "
            +"WHERE quarter>0 and year=2022 "
            +")AS B "
            +"GROUP BY (B.code) "
            +")AS C "
            +"ON profit_plans.Code = C.code "
            +"WHERE profit_plans.Year=2022 and profit_plans.postTaxProfit!=0;";
            if(id=='VNINDEX')
            {
                queryString = "SELECT  COUNT(C.code) as numberOfStock, SUM(sumPostTaxProfit) as postTaxProfit, SUM(profit_plans.postTaxProfit) as postTaxProfitPlan, ROUND(SUM(sumPostTaxProfit)/SUM(profit_plans.postTaxProfit),2)*100 AS finishedPercent "
                +"FROM profit_plans "
                +"INNER JOIN "
                +"( "
                +"SELECT B.Code, SUM(B.postTaxProfit) as sumPostTaxProfit FROM "
                +"("
                +"SELECT A.Code,postTaxProfit "
                +"FROM "
                +"("
                +"SELECT Code FROM stocks"
                +") AS A "
                +"INNER JOIN summary_statements ON A.code = summary_statements.code "
                +"WHERE quarter>0 and year=2022 "
                +")AS B "
                +"GROUP BY (B.code) "
                +")AS C "
                +"ON profit_plans.Code = C.code "
                +"WHERE profit_plans.Year=2022 and profit_plans.postTaxProfit!=0;";
            }


            const result = await db.sequelize.query(
                queryString
                ,
                {
                    replacements: [id],
                    type: db.sequelize.QueryTypes.SELECT
                }
            );
            //console.log(business2);

            // //console.log(business2);
            resolve(result[0]);
        } catch (e) {
            reject(e);
        }

    })
}

module.exports = {
    getFinishedProfitPlan: getFinishedProfitPlan,
    getAllSelect:getAllSelect,

}