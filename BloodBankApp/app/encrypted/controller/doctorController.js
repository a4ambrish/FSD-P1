const custom = require('../../services/doctorService')
var CryptoJS = require("crypto-js");

module.exports = function(app) {


    app.get('/api/v2/doctorlist', async(req, res) => {
        const data = await custom.getAllDoctorList();
        console.log(data)
        var edata = CryptoJS.AES.encrypt(JSON.stringify(data), 'YourSecretKeyForEncryption&Descryption').toString();

        console.log(edata)
        if(edata != 0) {
            res.send({
                status: true,
                message: 'Get Doctor List Successfully..!',
                result: edata
            });
        }
        else {
            res.send({
                status: false,
                message: 'Something went wrong. Please try again..!',
                result: data
            });
        }
    });

    app.get('/api/v2/doctorById', async(req, res) => {
        headers = {
            'doctorId': req.headers.id
        }
        const data = await custom.getDoctorById(headers);
        if(data.rowCount != 0) {
            res.send({
                status: true,
                count: data.rowCount,
                message: 'Get Doctor Successfully..!',
                result: data.rows
            });
        }
        else {
            res.send({
                status: false,
                message: 'Something went wrong. Please try again..!',
                result: data
            });
        }
    });


    app.post('/api/v2/adddoctor',  async(req, res) => {  
        // Encrypt
        console.log(req.body)

        var firstName = CryptoJS.AES.encrypt(req.body.firstname, 'secret key 123').toString();
        var lastName = CryptoJS.AES.encrypt(req.body.lastname, 'secret key 123').toString();

        var firstName = CryptoJS.AES.encrypt(JSON.stringify(req.body.firstname), 'secret key 123').toString();
        var lastName = CryptoJS.AES.encrypt(JSON.stringify(req.body.lastname), 'secret key 123').toString();
        headers = {
            'firstname': firstName,
            'lastname': lastName        
        }
        const data = await custom.addDoctor(headers);   
        if (data.rowCount != 0) {
            res.send({
                status: true,
                message: "Record Inserted Successfully..!",
                result: data
            });
        }
         else {
            res.send({
                status: false,
                message: "Something went wrong. Please try again..!",
            });
        }
    });



}