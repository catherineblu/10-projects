//variables
const addCurrencyBtn = document.querySelector('.add-currency-btn');


//event listeners

addCurrencyBtn.addEventListener('click', addCurrencyBtnClick);
function addCurrencyBtnClick(event){
    addCurrencyBtn.classList.toggle('open');
}
