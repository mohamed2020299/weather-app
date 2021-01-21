// Setup empty JS object to act as endpoint for all routes
 projectData = [];

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();
/* Middleware   (parser the data to json)*/  
const bodyParser = require('body-parser');
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance   (communication the server side with website)
const cors = require('cors');
app.use(cors());
// Initialize the main project folder  
// (connection with client side the first parameter is route and the secound parameter is name of client side)
app.use('/',express.static(__dirname + '/website'));

// get request (request from client side to server side then server will send data to client side) 
app.get('/allData',(req,res)=>{
    res.send(projectData);
    console.log(projectData)
})
// post request (cleient requset from server to add data then server will push data in projectData array)
app.post('/post',(req, res)=>{
    console.log(req.body);
   const  myData = {
        date: req.body.date,
        temp: req.body.temp,
        feelings: req.body.feelings
    }
    projectData.push(myData);
})
// Setup Server 
// (the first parameter is port and the socound parmeter is lishning fuction )
// localhost:8000
const port = 8000;
app.listen(port, ()=>{
    console.log(`the localhost is:${port}`);
})












