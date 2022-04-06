const connect = require('../../database')

class ReportController {

    getBloodGroupSummaryDetails(data) {
        return new Promise((resolve, reject) => {
            const query = connect.query(`select d.blood_group, d.name, b.quantity
            from donor d
            INNER JOIN blood_donation b ON d.id = b.donor_id
            where d.blood_group = $1`, [data.bloodgroup],
            (err, res) => {
                return err ? reject(err): resolve(res);
            })
        })
    }

    getDoctorSummaryDetails(data) {
        return new Promise((resolve, reject) => {
            const query = connect.query(`select d.blood_group, d.name, b.quantity
            from donor d
            INNER JOIN blood_donation b ON d.id = b.donor_id
            INNER JOIN doctor dc ON dc.id = b.doctor_id
            where dc.id = $1`, [data.doctorId],
            (err, res) => {
                return err ? reject(err): resolve(res);
            })
        })
    }

    getAllBloodGroupReportlist() {
        return new Promise((resolve, reject) => {
            const query = connect.query(`select d.blood_group, sum(b.quantity) as quantity,count(blood_group)
            from donor d
            INNER JOIN blood_donation b
            ON d.id = b.donor_id group by d.blood_group`, 
            (err, res) => {
                return err ? reject(err): resolve(res);
            })
        })
    }

    getAllDoctorReportlist() {
        return new Promise((resolve, reject) => {
            const query = connect.query(`select dc.id, CONCAT(dc.firstname, ' ',dc.lastname) AS doctor_name, 
            sum(b.quantity) as quantity, count(*)
            from donor d INNER JOIN blood_donation b ON d.id = b.donor_id
            INNER JOIN doctor dc ON dc.id = b.doctor_id
            group by dc.id, doctor_name`, 
            (err, res) => {
                return err ? reject(err): resolve(res);
            })
        })
    }
    

}

module.exports = new ReportController();