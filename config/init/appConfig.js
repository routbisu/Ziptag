// =========================================================================
// Application Configuration
// =========================================================================

// Dev Database Connection String
const devDBConnectionString = 'mongodb://admin:admin@ds143532.mlab.com:43532/ziptag';
// QA Database Configuration
const qaDBConnectionString = 'mongodb://admin:admin@ds143532.mlab.com:43532/ziptagqa';

// Email Configuration - Admin / Batch jobs
const emailConfig = {
    DefaultFromEmail: 'info@ziptag.in',
    DefaultFromEmailFrom: 'Ziptag Admin',
    EmailHostName: 'smtp.zoho.com',
    EmailPort: '465',
    DefaultEmailUser: 'info@ziptag.in',
    DefaultEmailPassword: 'Ziptag@2017'
}

// All other configuration
const appConfig = {
    DBConnectionString: devDBConnectionString,
    EmailConfig: emailConfig,
    PassportSecret: 'SerenityPrayer'
};

module.exports = appConfig;