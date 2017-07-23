// Email helper to send out emails from Zoho server
// =========================================================================================
const nodemailer = require('nodemailer');

// Create transporter for Zoho mail server
let zohoTransporter = nodemailer.createTransport({
    host: 'smtp.zoho.com',
    port: 465,
    secure: true, 
    auth: {
        user: 'info@ziptag.in',   // To be brought from config
        pass: 'Ziptag@2017'       // To be brought from config
    }
});

let mailer = {
    sendEmail: function(emailTo, emailSubject, emailText, emailIsHTML = false) {
        let mailOptions = {
            from: '"Ziptag Admin" <info@ziptag.in>',
            to: emailTo,
            subject: emailSubject
        };

        if(emailIsHTML) {
            mailOptions.html = emailText;
        }
        else {
            mailOptions.text = emailText;
        }

        zohoTransporter.sendMail(mailOptions, (error, info) => {
            if(error) {
                console.log(error);
            }
            return console.log(info);
        });
    }
}

module.exports = mailer;