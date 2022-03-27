
const donor = require('./controller/donorController')
const doctor = require('./controller/doctorController')
const bloodDonate = require('./controller/bloodDonateController')

module.exports = function(app) {
  donor(app);
  doctor(app);
  bloodDonate(app);
}