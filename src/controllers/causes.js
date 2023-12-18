const causesModel = require("../models/causesModel");

class CausesController {
    static async addCause(req, res) {

        try {
            const newCause = await causesModel.addCause(req.body);
            res.status(201).json(newCause);
        } catch (error) {
            console.error('Error Adding cause to database:', error);
            res.status(500).send('Internal Server Error');
        }
    }

    static async getAllCauses(req, res) {
        try {
            const causes = await causesModel.getAllCauses();

            if (causes.error) {
                return res.status(500).json({ success: false, error: causes.error });
            }

            return res.status(200).json({
                success: true,
                message: 'Fetched all causes successfully',
                causes
            });
        } catch (error) {
            console.error(`Error in getAllCausesController: ${error.message}`);
            return res.status(500).json({ success: false, error: 'Internal Server Error' });
        }
    };
}

module.exports = CausesController;

