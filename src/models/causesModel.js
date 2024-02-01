const pool = require('../../config/db');

class CausesModel {
    static async addCause(causeData) {
        let client;
        try {
            client = await pool.connect();
            const { image, title, description, target, amount_raised, progress, completed } = causeData;

            const result = await client.query(
                'INSERT INTO cause (image, title, description, target, amount_raised, progress, completed) VALUES($1, $2, $3, $4, $5, $6, $7)',
                [image, title, description, target, amount_raised, progress, completed]
            );

            console.log('Database connection successful and cause added successfully');
            return { success: 'Cause added successfully', result };
        } catch (error) {
            console.error(`Failed to execute database insertion query:\nError message: ${error.message}`);


            if (client) {
                client.release();
            }

            return { error: `Database connection error: ${error.message}` };
        } finally {
            if (client) {
                client.release();
            }
        }
    }

    static async getAllCauses() {
        let client;
        try {
            client = await pool.connect();
            const result = await client.query('SELECT * FROM cause');
            return result.rows;
        } catch (error) {
            console.error(`Failed to execute database query:\nError message: ${error.message}`);
            return { error: `Database query error: ${error.message}` };
        } finally {
            if (client) {
                client.release();
            }
        }
    }


    static async updateCauseProgress(update) {
        let client;
        try {
            client = await pool.connect();
            const { amount, cause_id } = update;

            const result = await client.query('SELECT * FROM cause WHERE cause_id = $1', [cause_id]);
            const existingCauseData = result.rows[0];

            const newAmountRaised = parseInt(existingCauseData.amount_raised, 10) + parseInt(amount, 10);
            let newProgress = 0;
            let completed = existingCauseData.completed || false;

            if (newAmountRaised >= existingCauseData.target) {
                newProgress = 100;
                completed = true;
            } else {
                newProgress = Math.floor((newAmountRaised / existingCauseData.target) * 100);
            }

            const query = `UPDATE cause SET amount_raised = $1, progress = $2, completed = $3 WHERE cause_id = $4`;
            const values = [newAmountRaised, newProgress, completed, cause_id];

            await client.query(query, values);


            const updatedResult = await client.query('SELECT * FROM cause WHERE cause_id = $1', [cause_id]);
            const updatedCauseData = updatedResult.rows[0];

            return { success: true, message: "Cause progress updated successfully.", updatedCauseData };
        } catch (error) {
            console.error('Error updating cause progress:', error);
            return { success: false, message: "Failed to update cause progress." };
        } finally {
            if (client) client.release();
        }
    }

}


module.exports = CausesModel;

