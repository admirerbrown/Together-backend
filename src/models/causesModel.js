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
}


module.exports = CausesModel;

