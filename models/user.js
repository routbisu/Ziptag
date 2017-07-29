// =========================================================================================
// Mongoose model for User collection
// =========================================================================================

// Get instance of mongoose connection
const mongoose = require('../config/init/db');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    first_name: String,
    last_name: String,
    email_id: String,
    contact: String,
    city: String,
    password: String,
    google_login_id: String,
    is_active: boolean
});

module.exports = mongoose.model('User', UserSchema);