const express = require("express");
const router = express.Router();
const {transporter} = require("../nodemailer/nodemailer");

router.post('/', (req, res) => {
    console.log('in file')
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    console.log('data got')
    const mailOption = {
        from: `"${name}" <${email}>`,
        to: 'hafizabdullahtahir@gmail.com',
        subject: "Costumer Contact",
        html: `
            <p>Hello Abdullah,</p>
            <p>You have received a message from <strong>${name}</strong></p>
            <p><strong>Message:</strong> ${message}</p>
        `,
    };
    
    transporter.sendMail(mailOption, (error, info)=>
        {
            if (error) {
                console.error('Error sending email:', error);
                return res.status(500).json({ error: 'Failed to send email', details: error.message });
            }
            console.log('Email sent successfully:', info.response);
            res.status(200).json({ success: 'Email sent successfully' });
        }
    )
});

module.exports = router;