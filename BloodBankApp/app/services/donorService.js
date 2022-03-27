const connect = require('../../database')

class employeeController {

    getAllDonorList() {
        return new Promise((resolve, reject) => {
            const query = connect.query('SELECT * FROM donor', (err, res) => {
                return err ? reject(err): resolve(res);
            })
        })
    }

    getDonorById(data) {
        return new Promise((resolve, reject) => {
            const query = connect.query('SELECT * FROM donor WHERE id=$1', [data.donorId], (err, res) => {
                return err ? reject(err): resolve(res);
            })
        })
    }

    addDonor(data) {
        return new Promise((resolve, reject) => {
            const query = connect.query(`INSERT INTO donor(name, dob, date_of_reg, blood_group, address, city, pincode) 
            VALUES( $1, $2, $3, $4, $5, $6, $7)`,
            [data.name, data.dob, data.date_of_reg, data.blood_group, data.address, data.city, data.pincode], (err, result) => {
                return err ? reject(err) : resolve(result);
            });
        });
    }

}

module.exports = new employeeController();