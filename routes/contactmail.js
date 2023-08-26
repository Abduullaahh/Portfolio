const express = require("express");
const router = express.Router();
const {transporter} = require("../nodemailer/nodemailer");

router.post('/', (req, res) => {
    console.log('in file')
    const name = req.body.Name;
    const email = req.body.Email;
    const phone = req.body.Phone;
    const message = req.body.Message;
    console.log('data got')
    const mailOption = {
        from: `"${name}" <${email}>`,
        to: 'hafizabdullahtahir@gmail.com',
        subject: "Costumer Contact",
        html: `
            <p>Hello Abdullah,</p>
            <p>You have received a message request from <strong>${name}</strong></p>
            <strong>Phone:</strong> ${phone}
            <p><strong>Message:</strong> ${message}</p>
        `,
    };
    
    transporter.sendMail(mailOption, (error, info)=>
        {
            if (error) throw error;
            else {
                console.log("Email Recieved")
                res.redirect('https://muhammad-abdullah-tahir.netlify.app/');
            }
        }
    )
});

module.exports = router;
