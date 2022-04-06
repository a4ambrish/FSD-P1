
const donor = require('./controller/donorController')
const doctor = require('./controller/doctorController')
const bloodDonate = require('./controller/bloodDonateController')
const fileUpload = require('./controller/fileUploadController')
const report = require('./controller/reportController')
const edoctor = require('./encrypted/controller/doctorController')

module.exports = function(app) {
  donor(app);
  doctor(app);
  bloodDonate(app);
  fileUpload(app);
  report(app);
  edoctor(app);
}