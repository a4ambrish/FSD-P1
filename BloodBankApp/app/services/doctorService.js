const connect = require('../../database')

class employeeController {

    getAllDoctorList() {
        return new Promise((resolve, reject) => {
            const query = connect.query('SELECT * FROM doctor', (err, res) => {
                return err ? reject(err): resolve(res);
            })
        })
    }

    getDoctorById(data) {
        return new Promise((resolve, reject) => {
            const query = connect.query('SELECT * FROM doctor WHERE id=$1', [data.doctorId], (err, res) => {
                return err ? reject(err): resolve(res);
            })
        })
    }

    addDoctor(data) {
        console.log(data)
        return new Promise((resolve, reject) => {
            const query = connect.query(`INSERT INTO doctor(firstname, lastname) VALUES( $1, $2)`,
            [data.firstname, data.lastname], (err, result) => {
                return err ? reject(err) : resolve(result);
            });
        });
    }

}

module.exports = new employeeController();