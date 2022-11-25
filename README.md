start the server:  
online:   
        selectDatabase='online' databasePass=<password> nodemon index.js  
ofline:  
        nodemon index.js  
.  


POST data to the server:   
use json for post in request body:    
https://prosthetic.herokuapp.com/  
        {  
                "charge":"67",  
                "temperature":"37.2C",  
                "pulse":"86"  
        }



server currently deploy on https://prosthetic-dasboard.onrender.com

.  
for Procfile of heroku:  
selectDatabase='online' emailPass=<> databasePass=<password> nodemon index.js
check all dependecies also if you are deploy this in heroku:   
        {  
                "type": "module",  
                "dependencies": {  
                        "cors": "^2.8.5",  
                        "express": "^4.18.2",  
                        "mongoose": "6.7.0"  
        }  
}  
