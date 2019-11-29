const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const maintenanceSchema = new Schema({
	maintennceEver: Boolean
});

const Maintenance = mongoose.model('maintenance', userSchema);
module.exports = Maintenance;
