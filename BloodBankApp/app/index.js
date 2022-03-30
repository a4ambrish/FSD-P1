
const donor = require('./controller/donorController')
const doctor = require('./controller/doctorController')
const bloodDonate = require('./controller/bloodDonateController')
const fileUpload = require('./controller/fileUploadController')
const edoctor = require('./encrypted/controller/doctorController')

module.exports = function(app) {
  donor(app);
  doctor(app);
  bloodDonate(app);
  fileUpload(app);
  edoctor(app);
}