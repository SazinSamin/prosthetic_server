/*
Name: Prosthetic Arm with sense server
Date: 05-09-2022
Author: Group-6, Capstone, EEE, UIU
*/


import mongoose from "mongoose";
import utilities from "../utilities.js";

const schema = {};

// database schema for sensors data
schema.dataSchema = mongoose.Schema({
        charge: String,
        temperature : String,
        pulse: String,
        oxygen: String,
        date: {
                type: String,
                default: (utilities.currentTime()).toString()
        }
});

// database schema incident report
schema.incidentSchema = mongoose.Schema({
        date: {
                type: String,
                default: (utilities.currentTime()).toString()
        },
        msg: String,
})



export default schema;