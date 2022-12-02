/*
Name: Smarth Healthcare monitoring with Prosthetic.
Date: 05-09-2022
Author: Group-6, Capstone, EEE, UIU.
*/

import express from "express";
import errorHandler from "./handler/erroHanlder.js";
import userRoute from "./handler/routeHandler.js";
import emailRoute from "./email/emailRoutehandler.js"
import cors from 'cors';


// app object - module scafolding
const app = express();

// configuration
const config = {};
// port config
config.port = process.env.PORT || 3000;

app.use(cors({origin: '*'}));
app.use(express.json());
app.use(express.raw());
app.use(express.text());
app.use(express.urlencoded({extended: true}));
app.set('view-engine', 'ejs');



// data request handler
app.use('/data', userRoute);
// email request handler
app.use('/prescription', emailRoute);
// custom error handler
app.use(errorHandler);
// top request handler
app.use('/', userRoute)


// app listening
app.listen(config.port, () => {
        console.log(`Server is listening on port ${config.port}...`);
});

