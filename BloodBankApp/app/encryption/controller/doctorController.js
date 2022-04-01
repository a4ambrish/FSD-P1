const cryptoJs = require('crypto-js');
const custom = require('../../services/doctorService')


module.exports = function(app) {


    app.get('/api/v2/doctorlist', async(req, res) => {
        const data = await custom.getAllDoctorList();
        var edata = cryptoJs.AES.encrypt(JSON.stringify(data), 'Encryptionanddecryption').toString();
        if(edata != null) {
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
                result: edata
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
        const data = await custom.addDoctor(req.body);   
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


    app.post('/api/v2/decryptdoctorlist',  async(req, res) => {   
        const data = req.body.p1;  
        if (data != null) {
            var edata = cryptoJs.AES.decrypt(data, 'Encryptionanddecryption');
            edata = JSON.parse(edata.toString(cryptoJs.enc.Utf8));
            res.send({
                status: true,
                message: "Record Inserted Successfully..!",
                result: edata.rows
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