# Getting started with Backend Server of "Smart Health Monitoring system" API  
### Server deployed in Render  
###### (may be have 30 secs delay if server sleep after long time of inactivity)  
start the server:  
online:   
        selectDatabase='online' databasePass=<password> nodemon index.js  
ofline:  
        nodemon index.js  
*************************        
#### Tools used:  
Nodejs,  
Express,    
Mongodb,  
Nodemailer,  
Render,  
Vs code,  
***************************
#### Api Route:  
Get all data from the server:  
https://prosthetic-dasboard.onrender.com/  
Get last 10 data:  
https://prosthetic-dasboard.onrender.com/last  
Get last 50 data:  
https://prosthetic-dasboard.onrender.com/lastfifty  
Get incident report:  
https://prosthetic-dasboard.onrender.com/incident  
POST data to the server:   
use json for post in request body:    
https://prosthetic-dasboard.onrender.com/ 

  -     {  
                "temperature":"37.2C",  
                "pulse":"86",  
                "oxygen":"98%",               
        }



**********************************

