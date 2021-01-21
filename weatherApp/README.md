Server side :
1- Setup empty JS object to act as endpoint for all routes

    2-  Require Express to run server and routes and start up instance of app

    3- require middleware (body parser) then app use this json middleware

    3- Cors for cross origin allowance   (communication the server side with website)

    4- Initialize the main project folder
    (connection with client side the first parameter is route and the secound parameter is name of client side)

    5-  get request (request from client side to server side then server will send data to client side)

    6-  post request (cleient requset from server to add data then server will push data in projectData array)

    7- Setup Server
    (the first parameter is port and the socound parmeter is lishning fuction )
    the local host => localhost:8000

client side (website):

    1-  Create a new date instance dynamically with JS

    2- Personal API Key for OpenWeatherMap API
     that is the base url i will use when i fetch data
    3- Event listener to add function to existing HTML DOM element
    4- Function to GET Web API Data

    5- Function to POST data
         post the data from client side to server side


    6- Function to GET Project Data
       get data from server side to client side
