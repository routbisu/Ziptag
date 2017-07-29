// =========================================================================================
// Email helper to send out emails from Zoho server
// =========================================================================================

const appConfig = require('../config/init/appConfig');
const util = require('util');
const nodemailer = require('nodemailer');

// Create transporter for Zoho mail server
let zohoTransporter = nodemailer.createTransport({
    host: appConfig.EmailConfig.EmailHostName,
    port: appConfig.EmailConfig.EmailPort,
    secure: true, 
    auth: {
        user: appConfig.EmailConfig.DefaultEmailUser,   
        pass: appConfig.EmailConfig.DefaultEmailPassword       
    }
});

let mailer = {
    // Sends an email and returs a promise
    sendEmail: function(emailTo, emailSubject, emailText, emailIsHTML = false) {
        let emailFromText = util.format('"%s" <%s>', appConfig.EmailConfig.DefaultFromEmailFrom, 
            appConfig.EmailConfig.DefaultFromEmail);
            
        let mailOptions = {
            from: emailFromText,    
            to: emailTo,
            subject: emailSubject
        };

        if(emailIsHTML) {
            mailOptions.html = emailText;
        }
        else {
            mailOptions.text = emailText;
        }

        // Return a promise object
        return new Promise(function (resolve, reject) {
            zohoTransporter.sendMail(mailOptions, (error, info) => {
                if(error) {
                    reject(error);
                }
                else {
                    resolve(info);
                }
            });
        });
    }
}

module.exports = mailer;