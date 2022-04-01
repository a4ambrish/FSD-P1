const custom = require('../services/donorService')

module.exports = function(app) {


    app.get('/api/donorlist', async(req, res) => {
        const data = await custom.getAllDonorList();
        if(data.rowCount != 0) {
            res.send({
                status: true,
                count: data.rowCount,
                message: 'Get Donor List Successfully..!',
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

    app.get('/api/donorById', async(req, res) => {
        console.log(req.headers)
        headers = {
            'donorId': req.headers.id
        }
        const data = await custom.getDonorById(headers);
        if(data.rowCount != 0) {
            res.send({
                status: true,
                count: data.rowCount,
                message: 'Get Donor Successfully..!',
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


    app.post('/api/adddonor',  async(req, res) => {   
        const data = await custom.addDonor(req.body);   
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