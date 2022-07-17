import MacroTypeService from "../services/MacroTypeService";

let getMacroTypeByKeyIDMacro = async (req, res) => {
    try {
        let data = await MacroTypeService.getMacroTypeByKeyIDMacro(req.query.keyIDMacro);

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
    getMacroTypeByKeyIDMacro: getMacroTypeByKeyIDMacro
}