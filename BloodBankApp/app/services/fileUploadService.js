const connect = require('../../database')

class employeeController {

    singleFileUpload(data) {
        return new Promise((resolve, reject) => {
            const query = connect.query(`INSERT INTO blood_donation(donor_id, doctor_id, quantity) 
            VALUES( $1, $2, $3)`,
            [data.donor_id, data.doctor_id, data.quantity], (err, result) => {
                return err ? reject(err) : resolve(result);
            });
        });
    }
    

}

module.exports = new employeeController();

  