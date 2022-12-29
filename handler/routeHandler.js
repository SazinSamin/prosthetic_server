/*
Name: Prosthetic Arm with sense server
Date: 05-09-2022
Author: Group-6, Capstone, EEE, UIU
*/

import express from "express";
import database from "../database/databaseHandler.js";
import filter from "../filter/sensorsFilter.js";


// Router object
const userRoute =  express.Router();

// middleware for database connection establishment
userRoute.use(database.connectDatabase);

// handle get request and send database data
userRoute.get('/', async (req, res) => {
        const fectchedData = await database.fetch();
        database.closeConnection();
        res.status(200).send(fectchedData);
});

// handle get request and send incident report data
userRoute.get('/incident_report', async (req, res) => {
        const fectchedData = await database.fectchedData;
        database.closeConnection();
        res.send(200).send(fectchedData);
})

// handle get request for fetching data 
userRoute.get('/single', async(req, res) => {
        const fectchedData = await database.fetchSingleData();
        database.closeConnection();
        res.status(200).send(fectchedData);
})

// handle post request and save the data to the database
userRoute.post('/', async (req, res) => {
        // send warning message/email if any sensors value go outside the value
        const warningMsg = filter.sendWarningMsg(req.body);
        
        /*
        await database.saveIncident({msg: warningMsg}, (err) => {
                err ? console.log(`Incident warnning: ${err}`) : console.log("No incident warning");
        })
        */

        database.save(req.body, (err) => {
                database.closeConnection();
                err ? res.status(400).send(err.message) :
                        res.status(200).send(`Date saved in the database. \n${warningMsg ? warningMsg : "{No warning}"}`);
        });
});

userRoute.post('/incident_report', (req, res) => {
        database.saveIncident(req.body, err => {
                database.closeConnection();
                err ? res.status(400).send(err.message) :
                        res.status(200).send(`Incident saved in the database ${req.body}`);
        })
})



// export module
export default userRoute;

