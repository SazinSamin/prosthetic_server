import nodemailer from 'nodemailer';

const emailService = {};
emailService.transporter = nodemailer.createTransport({
        service: 'outlook',
        auth: {
                user: 'sazinsamin@outlook.com',
                pass: process.env.emailPass,
        }
});

emailService.setConfig = (msg) => {
        const config = {
                from: 'sazinsamin@outlook.com',
                to: 'sazinsamin50@gmail.com',
                subject: 'Smart Healthcare',
                text: msg,
        };
        return config;
};

emailService.sendEmail = (msg, callback) => {
        emailService.transporter.sendMail(emailService.setConfig(msg), (err, data) => {
                err ? callback(err) : callback(null);
        });
};

export default emailService;

// emailService.sendEmail("Test from the server", (err) => {
//         err ? console.log(err) : console.log("Email send successfully");
// });
