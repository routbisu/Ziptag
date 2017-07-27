// Database configuration
// =================================================================================

const appConfig = require('./appConfig');
const util = require('util');

var mongoose = require('mongoose');
mongoose.connect(appConfig.DBConnectionString);