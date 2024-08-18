const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport (
    {
        host: "smtp-relay.brevo.com",
        port: 587,
        auth:
        {
            user: "hafizabdullahtahir@gmail.com",
            pass: "xsmtpsib-43d841572de4cc14dbe2a3cf7136dd1754f488cf9e15d31436f80487a1f45efa-SEsFPOCHTMd8RK6r"
        }
    }
)
module.exports = {transporter};