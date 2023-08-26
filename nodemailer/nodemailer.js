const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport (
    {
        host: "smtp-relay.brevo.com",
        port: 587,
        auth:
        {
            user: "hafizabdullahtahir@gmail.com",
            pass: "vDcj5NS0VCPm18xr"
        }
    }
)
module.exports = {transporter};