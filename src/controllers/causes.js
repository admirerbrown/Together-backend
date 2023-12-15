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
}

// const addCause = async (req, res) => {
//     try {
//         const newCause = await causesModel.addCause(req.body);
//         res.status(201).json(newCause);
//     } catch (error) {
//         console.error("Error Adding cause to database:", error);
//         res.status(500).send("Internal Server Error");
//     }
// };

// module.exports = {addCause};
module.exports = CausesController;

