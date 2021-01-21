
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = `${d.getMonth() + 1}` +' / '+ d.getDate()+' / '+ d.getFullYear();

// Personal API Key for OpenWeatherMap API
    // that is the base url i will use when i fetch data 
const baseUrl = `http://api.openweathermap.org/data/2.5/weather?zip=`;
   //  apiKey from my email in oenweathermap
const apiKey = '&appid=bad5e2d58fc7b5e3d62ee832722fc2dc';

// Event listener to add function to existing HTML DOM element
const generate = document.querySelector('#generate');
        // when click on generate button the function will execute
generate.addEventListener('click', ()=>{
  const zipCode = document.querySelector('#zip').value;
  const feelings = document.querySelector('#feelings').value;
        //the url is equal base url , zipCode i wil write in input , apiKey
  const URL =`${baseUrl}${zipCode}${apiKey}`;
        // if zipCode input is empty you wil recive alert 
   if(zipCode == ''){
     alert('you should write zipCode it is necessary')
   }
   else{
    getAPI(URL)
    .then((data)=>{
      postData('/post', {date:newDate, temp:data.main.temp, feelings:feelings});
      getData();
  })
}
})
/* Function called by event listener */
/* Function to GET Web API Data*/
const getAPI = async (URL)=>{
      // fetch data from URL and then transform to json then return this data
    const res = await fetch(URL);
  try {
  // Transform into JSON
  const data = await res.json();
  console.log(data);
    return data;
}
  catch(error) {
    console.log("error", error);
    // appropriately handle the error
  }
}
/* Function to POST data */
// post the data from client side to server side 
const postData = async (url='', data='')=>{
  fetch(url,{
    method:'post',
    credentials: 'same-origin', 
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((res)=>{
    const newData = res.json();
    return newData;
  } 
  ,(err)=>{
    console.log('The err is', err)
  })
  
}

/* Function to GET Project Data */
// get data from server side to client side
const getData = async () =>{ 
  const request = await fetch('/allData');
  try {
  // Transform into JSON
  const alldata = await request.json();
      //generate variable date div and change prperty innerHTML
  const date = document.querySelector('#date').innerHTML = `Date: ${alldata[0].date}`
      //generate variable temp div and change prperty innerHTML
  const temp = document.querySelector('#temp').innerHTML= `temp: ${alldata[0].temp - 272.15} Celsius`;
      //generate variable feelings div and change prperty innerHTML
  const feelings = document.querySelector('#content').innerHTML = `feelings: ${alldata[0].feelings}`
      // console.log  all data in the client side
console.log(alldata)
  }
  catch(error) {
    console.log("error", error);
    // appropriately handle the error
  }
};