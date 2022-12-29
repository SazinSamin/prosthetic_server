import express from "express";
import emailService from "./emailService.js";

const emailRoute = express.Router();

emailRoute.post('/', async(req, res) => {
        
        // handle post request for email service
        const [prescription, email] = prescriptionMsg(req.body);
        
        emailService.sendEmail(prescription, email,  (err) => {
                err ? res.send(err) : res.send("Message has successfully delivered to the patient");
        });
        // res.end();
});

const prescriptionMsg = (data) => {
        let msg = `Prescription: ${data['prescription']}


Issue: ${data['Date']}`;

        msg += `

Professor Dr. Megboron Paul
Degree: MBBS, MS (Ortho), FICS, FACS (USA), DNB(ortho), Fellow in Pediatric Orthopedics
Designation: Head, Orthopedic Department
Expertise: Orthopaedic
Org: Ibrahim Memorial Medical College & Hospital
Chamber: Dhaka Central Hospital
Location: Block-A, Sayednagar, Vatara,Dhaka, Bangladesh
Phone: +88 01728346234

Design and Developed by Smarth Healthcare of Prosthetic(Group 6, Capstone, UIU).
`

        const email = data['email'];

        return [msg, email];
}



export default emailRoute;
