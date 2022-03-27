const custom = require('../services/bloodDonateService')

module.exports = function(app) {

    app.get('/api/donatorlist', async(req, res) => {
        const data = await custom.getAllBloodDonatorList();
        if(data.rowCount != 0) {
            res.send({
                status: true,
                count: data.rowCount,
                message: 'Get Donator List Successfully..!',
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

    app.get('/donatorById', async(req, res) => {
        headers = {
            'donatorId': req.headers.id
        }
        const data = await custom.getDonatorById(headers);
        if(data.rowCount != 0) {
            res.send({
                status: true,
                count: data.rowCount,
                message: 'Get Donator Successfully..!',
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


    app.post('/api/adddonator',  async(req, res) => {   
        const data = await custom.addDonator(req.body);   
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

    app.get('/api/bloodgroupreportlist', async(req, res) => {
        const data = await custom.getAllBloodGroupReportlist();
        if(data.rowCount != 0) {
            res.send({
                status: true,
                count: data.rowCount,
                message: 'Record fetch Successfully..!',
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

    app.get('/api/doctorsummarylist', async(req, res) => {
        const data = await custom.getAllDoctorReportlist();
        if(data.rowCount != 0) {
            res.send({
                status: true,
                count: data.rowCount,
                message: 'Record fetch Successfully..!',
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

}