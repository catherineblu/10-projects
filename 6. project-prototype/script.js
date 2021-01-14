const searchForm = document.querySelector('.search-location');
const cityValue = document.querySelector('.search-location input');
const cityName = document.querySelector('.city-name p');
const cardBody = document.querySelector('.card-body');

const spitOutCelsius = (kelvin) =>{
    celsius = Math.round(kelvin-273.15);
    return celsius;
} 

updateWeatherApp = (city)=>{
    cityName.textContent=city.name;
    cardBody.innerHTML=`
    <div class="card-mid row">
                    <div class="col-8 text-center temp">
                        <span>5&deg;C</span>
                    </div>
                    <div class="col-4 condition-temp">
                        <p class="condition">${city.weather[0].description}</p>
                        <p class="high">6&deg;C</p>
                        <p class="low">2&deg;C</p>
                    </div>
                </div>
                <div class="icon-container card shadow mx-auto">
                    <img src="images/cloud.svg" alt="">
                </div>
                <div class="card-bottom px-5 py-4 row">
                    <div class="col text-center">
                        <p>5&deg;C</p>
                        <span>Feel it like...</span>
                    </div>
                    <div class="col text-center">
                        <p>60%</p>
                        <span>Humidity</span>
                    </div>
                </div>
    `
}


//add event listener to the form

searchForm.addEventListener('submit', e =>{
    e.preventDefault();
    const citySearched = cityValue.value.trim();
    console.log(citySearched)
    searchForm.reset();

    requestCity(citySearched)
    .then((data)=>{
        updateWeatherApp(data);
    })
    .catch((error)=>{console.log(error)})
})