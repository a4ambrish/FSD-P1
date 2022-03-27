const custom = require('../services/doctorService')

module.exports = function(app) {


    app.get('/api/doctorlist', async(req, res) => {
        const data = await custom.getAllDoctorList();
        if(data.rowCount != 0) {
            res.send({
                status: true,
                count: data.rowCount,
                message: 'Get Doctor List Successfully..!',
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

    app.get('/doctorById', async(req, res) => {
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


    app.post('/api/adddoctor',  async(req, res) => {   
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



}