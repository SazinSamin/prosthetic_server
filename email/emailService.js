import nodemailer from 'nodemailer';
import defaults from '../defaults/defaults.js';

const emailService = {};

emailService.transporter = nodemailer.createTransport({
        service: 'outlook',
        auth: {
                user: "prosthetic_healthcare@outlook.com",
                pass: process.env.emailPass,
        },
	from:"prosthetic_healthcare@outlook.com",
});

emailService.setConfig = (msg, email) => {
        const config = {
                from: "prosthetic_healthcare@outlook.com",
                to: email ? email: defaults.email,
                subject: "Smart Healthcare of Prosthetic(Group 6, Capstone",
                text: msg,
        }
        return config;
};

emailService.sendEmail = (msg, email, callback) => {
        emailService.transporter.verify((err, success) => {
                err ? console.log('Email verification failed') : console.log("Email verified...");
        });
        emailService.transporter.sendMail(emailService.setConfig(msg, email), (err, data) => {  
                if(err) {
                        console.log("Email send");
                        callback(err);
                } else {
                        callback(null);
                }
        });
        // callback(null);
}

export default emailService;
