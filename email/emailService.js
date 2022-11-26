import nodemailer from 'nodemailer';

const emailService = {};

emailService.transporter = nodemailer.createTransport({
        service: 'outlook',
        auth: {
                user: "prosthetic_healthcare@outlook.com",
                pass: process.env.emailPass,
        }
});

emailService.setConfig = (msg, email) => {
        const config = {
                from: "prosthetic_healthcare@outlook.com",
                to: email ? email: "sazinsamin50@gmail.com",
                subject: "Smart Healthcare of Prosthetic",
                text: msg,
        }
        return config;
};

emailService.sendEmail = (msg, email, callback) => {
        emailService.transporter.verify((err, success) => {
                if(err) {
                        console.log(err);
                } else {
                        console.log('Ready....');
                }
        });
        emailService.transporter.sendMail(emailService.setConfig(msg, email), (err, data) => {
                console.log(err);
                err ? callback(err) : callback(null);
        });
        // callback(null);
}

export default emailService;