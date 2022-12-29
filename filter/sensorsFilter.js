import emailService from "../email/emailService.js";
import defaults from "../defaults/defaults.js";
import database from "../database/databaseHandler.js";

// Object module
const filter = {};


filter.sendWarningMsg= (data) => {
        // filter out the data.
        const [oxygen, pulse, bodyTemp] = filter.getData(data);
        // check the data 
        const warningMsg = filter.filterSensorsData(oxygen, pulse, bodyTemp);

                // database.saveIncident({msg: warningMsg}, err => {
                //         console.log(err);
                // });
        
        


        const warningFullMsg = filter.makeWarningMsg(warningMsg);
        if(warningFullMsg) {
                console.log("sensors data warning message");
                /*
                emailService.sendEmail(warningMsg, defaults.email, (err) => {
                        if (err) return err;
                })*/
                return warningFullMsg;
        }
        return null;
}

const sendIncidentReport = (msg) => {
        const url = "http://";
}



// get the oxygen, pulse, temp data json request body
filter.getData = (data) => {
        const oxygenInt = parseInt(data['oxygen']);
        const pulseInt = parseFloat(data['pulse']);
        const bodyTemInt = parseFloat(data['temperature']);
        return [oxygenInt, pulseInt, bodyTemInt];
}



// make the message from the data if any data go outside the range
filter.filterSensorsData = (oxygen, pulse, bodyTem) => {
        let msg = "";
        
        if (oxygen < 95) {
                msg += `Oxygen level ciritical: ${oxygen}%\n`;
        } 
        if (pulse < 60 || pulse > 100) {
                msg += `Pulse rate outside the range: ${pulse} b/m\n`;
        }
        if (bodyTem < 97 || bodyTem > 98.6 ) {
                msg += `Body temp outside the range: ${bodyTem}ºF\n` ;
        }
        return msg;
}


filter.makeWarningMsg = (msg) => {
        if (msg != "") {
                msg += `
        
        
Smart healthcare monitoring with Prosthetic
Group-6, Capstone project, United International Universtity
        `
                return msg;
        }
        return null;
}





export default filter;

