const connect = require('../../database')

class FileUploadController {

    singleFileUpload(data) {
        return new Promise((resolve, reject) => {
            const query = connect.query(`INSERT INTO blood_donation(donor_id, doctor_id, quantity) 
            VALUES( $1, $2, $3)`,
            [data.donor_id, data.doctor_id, data.quantity], (err, result) => {
                return err ? reject(err) : resolve(result);
            });
        });
    }

    addDonor(data, file) {
        console.log(data)
        console.log(file)
        return new Promise((resolve, reject) => {
            const query = connect.query(`INSERT INTO donor(name, dob, date_of_reg, blood_group, address, city, pincode, imagepath) 
            VALUES( $1, $2, $3, $4, $5, $6, $7, $8)`,
            [data.name, data.dob, data.date_of_reg, data.blood_group, data.address, data.city, data.pincode,file], (err, result) => {
                return err ? reject(err) : resolve(result);
            });
        });
    }
    

}

module.exports = new FileUploadController();

  