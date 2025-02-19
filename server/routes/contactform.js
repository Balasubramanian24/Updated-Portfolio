const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();

router.post("/", async (req, res) => {
    const { name, email, message } = req.body;


    const transporter = nodemailer.createTransport({   
        service: "gmail",
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD,
        }, 
        debug: true,
        logger: true,

    });

    const mailOptions = {
        from: process.env.EMAIL,
        to: process.env.EMAIL,
        subject: `Portfolio Contact: ${name}`,
        text: `From: ${email}\n\nMessage: ${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error("Error:", error);
            return res.status(500).json({ success: false, message: "Failed to send email", error });
        }
        console.log("Email sent: " + info.response);
        return res.status(200).json({ success: true, message: "Email sent successfully!" });
    });
});

module.exports = router;