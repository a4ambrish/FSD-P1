const custom = require('../services/reportService')
const connect = require('../../database')

module.exports = function(app) {

    app.get('/api/bloodgroupsummarydetails', async(req, res) => {
        headers = {
            'bloodgroup': req.headers.bloodgroup
        }
        const data = await custom.getBloodGroupSummaryDetails(headers);
        if(data.rowCount != 0) {
            res.send({
                status: true,
                count: data.rowCount,
                message: 'Get Blood Group Summary Details Successfully..!',
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

    app.get('/api/doctorsummarydetails', async(req, res) => {
        headers = {
            'doctorId': req.headers.doctorid
        }
        const data = await custom.getDoctorSummaryDetails(headers);
        if(data.rowCount != 0) {
            res.send({
                status: true,
                count: data.rowCount,
                message: 'Get Doctor Summary Details Successfully..!',
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