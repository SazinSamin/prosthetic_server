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
userRoute.get('/incident', async (req, res) => {
        const fectchedData = await database.fetchIncident();
        database.closeConnection();
        res.status(200).send(fectchedData);
})

// handle get request for fetching last 10 data 
userRoute.get('/last', async(req, res) => {
        const fectchedData = await database.fetchLastTen();
        database.closeConnection();
        res.status(200).send(fectchedData);
})

// handle get request for fetching last 50 data
userRoute.get('/lastfifty', async(req, res) => {
        const fectchedData = await database.fetchLastFifty();
        database.closeConnection();
        res.status(200).send(fectchedData);
})


// handle post request and save the data to the database
userRoute.post('/', async (req, res) => {
        // send warning message/email if any sensors value go outside the value
        const warningMsg = filter.sendWarningMsg(req.body);
        
        /*
        database.saveIncident({msg: warningMsg}, (err) => {
                err ? console.log(`Warning: ${err} saved to the database`) : null;
                database.closeConnection();
                res.status(200).send('Warning saved to the database');
        });
        */
        
        
        database.save(req.body, (err) => {
                database.closeConnection();
                err ? res.status(400).send('Error to save data ' + err.message) :
                        res.status(200).send(`Date saved in the database`);
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

