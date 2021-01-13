const searchForm = document.querySelector('.search-location');
const cityValue = document.querySelector('.search-location input');

//add event listener to the form

searchForm.addEventListener('submit', e =>{
    e.preventDefault();
    const citySearched = cityValue.value.trim();
    console.log(citySearched)
    searchForm.reset();

    requestCity(citySearched)
    .then((data)=>{console.log(data)})
    .catch((error)=>{console.log(error)})
})