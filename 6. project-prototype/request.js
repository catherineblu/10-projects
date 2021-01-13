const key = "ad5c4063fad48812931799267dd25a22";
const baseURL =
  "http://api.openweathermap.org/data/2.5/weather?q=Lagos&appid=ad5c4063fad48812931799267dd25a22";

fetch(baseURL).then((data) => {
  console.log("response", data.json()) })
.catch((error)=>{
    console.log(error)
})
