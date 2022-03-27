const connect = require('../../database')

class employeeController {

    getAllBloodDonatorList() {
        return new Promise((resolve, reject) => {
            const query = connect.query(`SELECT concat(d.firstname, ' ',d.lastname) AS doctor_name,
             dnr.name AS donor_name, bd.quantity FROM blood_donation bd
            INNER JOIN doctor d ON d.id = bd.doctor_id
            INNER JOIN donor dnr ON dnr.id = bd.donor_id
            `, 
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

    getAllBloodGroupReportlist() {
        return new Promise((resolve, reject) => {
            const query = connect.query(`select blood_group, sum(quantity) as quantity,count(*) from (
                select d.blood_group, b.quantity
                from donor d
                INNER JOIN blood_donation b
                ON d.id = b.donor_id) a group by blood_group`, 
            (err, res) => {
                return err ? reject(err): resolve(res);
            })
        })
    }

    getAllDoctorReportlist() {
        return new Promise((resolve, reject) => {
            const query = connect.query(`select doctor_name, sum(quantity) as quantity, count(*) from (
                select d.blood_group, b.quantity, CONCAT(dc.firstname, ' ',dc.lastname) AS doctor_name
                from donor d
                LEFT JOIN blood_donation b ON d.id = b.donor_id
                INNER JOIN doctor dc ON dc.id = b.doctor_id
                ) a group by doctor_name`, 
            (err, res) => {
                return err ? reject(err): resolve(res);
            })
        })
    }
    

}

module.exports = new employeeController();