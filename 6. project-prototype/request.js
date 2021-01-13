const key = "ad5c4063fad48812931799267dd25a22";
//const baseURL =
//  "http://api.openweathermap.org/data/2.5/weather?q=Lagos&appid=ad5c4063fad48812931799267dd25a22";

//fetch(baseURL).then((data) => {
//  console.log("response", data.json()) })
//.catch((error)=>{
//    console.log(error)
//});

const requestCity = async (city)=>{
const baseURL='http://api.openweathermap.org/data/2.5/weather'

const query = `?q=${city}&appid=${key}`;

//fetch call

const response = await fetch(baseURL+query);

//promise data
const data = await response.json();
return data;
}

