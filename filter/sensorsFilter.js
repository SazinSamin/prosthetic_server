import emailService from "../email/emailService.js";

// Object module
const filter = {};

filter.sendWarningMsg= (data) => {
        const [oxygen, pulse, bodyTemp] = filter.getData(data);
        const warningMsg = filter.filterSensorsDataAndMakeMsg(oxygen, pulse, bodyTemp);
        emailService.sendEmail(warningMsg, (err) => {
                if(err) return err;
        })
        return warningMsg;
}




// get the oxygen, pulse, temp data json request body
filter.getData = (data) => {
        const oxygenInt = parseInt(data['oxygen']);
        const pulseInt = parseFloat(data['pulse']);
        const bodyTemInt = parseFloat(data['temperature']);
        return [oxygenInt, pulseInt, bodyTemInt];
}




// make the message from the data if any data go outside the range
filter.filterSensorsDataAndMakeMsg = (oxygen, pulse, bodyTem) => {
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

        msg += `
        
        
Smart healthcare monitoring with Prosthetic
Group-6, Capstone project, United International Universtity
        `
        return msg;

}


export default filter;

