const searchForm = document.querySelector('.search-location');
const cityValue = document.querySelector('.search-location input');
const cityName = document.querySelector('.city-name p');
const cardBody = document.querySelector('.card-body');

const toCelsius = (kelvin) =>{
    celsius = Math.round(kelvin-273.15);
    return celsius;
} 

const dayTime = (icon) => {
    if(icon.includes('d')){
        return true;
    }else{
        return false
    }
}

const isDayTime = (icon) => {
    if(icon.includes('d')){
        return true;
    }else{
        return false
    }
}

updateWeatherApp = (city)=>{
    const imageName = city.weather[0].icon
    const iconSrc = `http://openweathermap.org/img/wn/${imageName}@2x.png`
    cityName.textContent=city.name;
    cardBody.innerHTML=`
    <div class="card-mid row">
                    <div class="col-8 text-center temp">
                        <span>${toCelsius(city.main.temp)}&deg;C</span>
                    </div>
                    <div class="col-4 condition-temp">
                        <p class="condition">${city.weather[0].description}</p>
                        <p class="high">${toCelsius(city.main.temp_max)}&deg;C</p>
                        <p class="low">${toCelsius(city.main.temp_min)}&deg;C</p>
                    </div>
                </div>
                <div class="icon-container card shadow mx-auto">
                    <img src="${iconSrc}" alt="">
                </div>
                <div class="card-bottom px-5 py-4 row">
                    <div class="col text-center">
                        <p>${toCelsius(city.main.feels_like)}&deg;C</p>
                        <span>Feel it like...</span>
                    </div>
                    <div class="col text-center">
                        <p>${city.main.humidity}%</p>
                        <span>Humidity</span>
                    </div>
                </div>
    `
    if (isDayTime){
        console.log('Day')
    }else{
        console.log('night')
    }

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