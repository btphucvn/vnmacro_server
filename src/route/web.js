import express from "express";

import StockController from "../controllers/StockController";
import MarketRatioController from "../controllers/MarketRatioController";

import Business2Controller from "../controllers/Business2Controller";
import MarketNameController from "../controllers/MarketNameController";
import StockMacroController from "../controllers/StockMacroController/StockMacroController";
import MacroTypeController from "../controllers/MacroTypeController";
import MacroController from "../controllers/MacroController";

import TableController from "../controllers/TableController";

let router = express.Router();
let initWebRoutes = (app) => {


    router.get("/api/get-all-stock", StockController.getAllStock);


    router.get("/api/get-all-business2", Business2Controller.getAllBusiness2);

    router.get("/api/get-all-martket-name", MarketNameController.getAllMarketName);
    router.get("/api/get-market-ratio-by-code", MarketRatioController.getMarketRatioByCode);

    router.get("/api/get-all-select", StockMacroController.getAllSelect);
    router.get("/api/get-finished-profit-plan", StockMacroController.getFinishedProfitPlan);


    router.get("/api/get-macro-type", MacroTypeController.getMacroTypeByKeyIDMacro);



    router.get("/api/get-table-by-keyidmacrotype", TableController.getTableByKeyIDMacroType);

    
    router.get("/api/get-value-type-by-keyidmacrotype", MacroTypeController.getValueTypeByKeyIDMacro);

    router.get("/api/get-all-macro", MacroController.getAllMacro);


    return app.use("/", router);
}
module.exports = initWebRoutes;
