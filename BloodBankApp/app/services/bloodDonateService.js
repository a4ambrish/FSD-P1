const connect = require('../../database')

class BloodDonateController {

    getAllDonatorList() {
        return new Promise((resolve, reject) => {
            const query = connect.query(`SELECT concat(d.firstname, ' ',d.lastname) AS doctor_name,
             dnr.name AS donor_name, bd.quantity FROM blood_donation bd
            INNER JOIN doctor d ON d.id = bd.doctor_id
            INNER JOIN donor dnr ON dnr.id = bd.donor_id`, 
            (err, res) => {
                return err ? reject(err): resolve(res);
            })
        })
    }

    getDonatorById(data) {
        return new Promise((resolve, reject) => {
            const query = connect.query('SELECT * FROM blood_donation WHERE id=$1', [data.donatorId], (err, res) => {
                return err ? reject(err): resolve(res);
            })
        })
    }

    addDonator(data) {
        return new Promise((resolve, reject) => {
            const query = connect.query(`INSERT INTO blood_donation(donor_id, doctor_id, quantity) 
            VALUES( $1, $2, $3)`,
            [data.donor_id, data.doctor_id, data.quantity], (err, result) => {
                return err ? reject(err) : resolve(result);
            });
        });
    } 

}

module.exports = new BloodDonateController();