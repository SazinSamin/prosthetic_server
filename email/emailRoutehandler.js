import express from "express";
import emailService from "./emailService.js";

const emailRoute = express.Router();


emailRoute.post('/', async(req, res) => {
	console.log(req.body);
        // handle post request for email service
//        emailService.sendEmail("Test again from the server side", (err) => {
//                err ? res.send(err) : res.send("Message succesfully send to the patient");
//        });
	res.send("Data successfully got from the frontend");
});

export default emailRoute;
