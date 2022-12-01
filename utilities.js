/*
Name: Prosthetic Arm with sense server
Date: 05-09-2022
Author: Group-6, Capstone, EEE, UIU
*/

// utility object
const utilities = {};

// get local time
utilities.currentTime = () => {
        let dateTime = new Date();
        let hh = dateTime.getHours();
        let mm = dateTime.getMinutes();
        let ss = dateTime.getSeconds();
        let date = dateTime.getDate();
        let month = dateTime.getDate();
        let year = dateTime.getFullYear();

        let session = "AM";

        if (hh === 0) {
                hh = 12;
        }
        if (hh > 12) {
                hh = hh - 12;
                session = "PM";
        }

        hh = (hh < 10) ? "0" + hh : hh;
        mm = (mm < 10) ? "0" + mm : mm;
        ss = (ss < 10) ? "0" + ss : ss;

        let time = hh + ":" + mm + ":" + ss + " " + session;
        let currDate = date + ":" + month + ":" + year;
        let currentDateTime = "Time: " + time + "       Date: " + currDate;
        return currentDateTime;
}
console.log(utilities.currentTime());


export default utilities;