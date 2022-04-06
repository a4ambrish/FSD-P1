const custom = require('../../services/doctorService')
var CryptoJS = require("crypto-js");
const multer  = require('multer')
const upload = multer({ dest: 'upload/' })
var cron = require('node-cron');

module.exports = function(app) {

    app.get('/api/v2/doctorlist', async(req, res) => {
        const data = await custom.getAllDoctorList();
        var edata = CryptoJS.AES.encrypt(JSON.stringify(data), 'YourSecretKey').toString();
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

    app.post('/api/v2/decryptdoctorlist',  async(req, res) => {   
        console.log(req.body)
        const data = req.body.p1;  
        if (data != null) {
            var edata = CryptoJS.AES.decrypt(data, 'YourSecretKeyForEncryption&Descryption');
            edata = JSON.parse(edata.toString(CryptoJS.enc.Utf8));
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
 
    app.post('/api/v2/decryptdoctorlistwithimg', upload.single('avatar'), async(req, res) => { 
        const file = req.file;
        const data = req.body.encdata; 
        if(data != null) {
            const info2 = CryptoJS.AES.decrypt(data, 'YourSecretKey').toString(CryptoJS.enc.Utf8);
            const info3 = JSON.parse(info2);
            res.send({
                status: true,
                message: 'File Uploaded Successfully..!',
                result: info3.rows
            })
        }
        else {
            res.send({
                status: false,
                message: 'Something went wrong. Please try again..!',
                result: data
            })
        }
    });

     var task = cron.schedule('*/5 * * * * *', async(req, res) => {
        console.log('Job Run.. 30 sec....!');
            const data = await custom.getAllDoctorList();
            var edata = CryptoJS.AES.encrypt(JSON.stringify(data), 'YourSecretKey').toString();
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

task.stop();


}