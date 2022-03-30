const custom = require('../services/fileUploadService')
const multer  = require('multer')
const upload = multer({ dest: 'upload/' })
const uploads = multer({ dest: 'uploads/' })

var CronJob = require('cron').CronJob;
// const cron = require('node-cron')

module.exports = function(app) {

    app.post('/api/singlefileupload', upload.single('avatar'), async(req, res) => {   
        const data = req.file;
        // req.file is the `avatar` file
        // req.body will hold the text fields, if there were any
        if(data.size != 0) {
            res.send({
                status: true,
                message: 'File Uploaded Successfully..!',
                result: data
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


    app.post('/api/multiplefileupload', uploads.array('photos', 12), function (req, res, next) {
        // req.files is array of `photos` files
        // req.body will contain the text fields, if there were any
        const data = req.files;
        if(data.size != 0) {
            res.send({
                status: true,
                message: 'Files Uploaded Successfully..!',
                result: data
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


      var job = new CronJob('*/2 * * * * *', function() {
        async(req, res) => {
            const data = await custom.getAllDonorList();
            console.log(data);
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
        };
        console.log('Job Run..!');
      });
      job.start();
      job.stop();


    //   CronJob.schedule('1 * * * * *', () => {
    //       console.log('New cron started..');
    //   })

}

