import MacroTypeService from "../services/MacroTypeService";

let getMacroTypeByKeyIDMacro = async (req, res) => {
    try {
        let data = await MacroTypeService.getMacroTypeByKeyIDMacro(req.query.key_id_macro);
        return res.status(200).json(data);
    } catch (e) {
        console.log("Get all code error: ", e)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from server',
        })
    }
}

let getValueTypeByKeyIDMacro = async (req, res) => {

    try {
        let data = await MacroTypeService.getValueTypeByKeyIDMacro(req.query.key_id_macro);
        return res.status(200).json(data);
    } catch (e) {
        console.log("Get all code error: ", e)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from server',
        })
    }
}
module.exports = {
    getMacroTypeByKeyIDMacro: getMacroTypeByKeyIDMacro,
    getValueTypeByKeyIDMacro: getValueTypeByKeyIDMacro
}