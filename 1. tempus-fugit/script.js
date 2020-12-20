const newYear = '1 Jan 2021';

function countdown (){
    const newYearDate = new Date (newYear);
    const currentDate = new Date();
    console.log(newYearDate - currentDate);

    const seconds = (newYearDate - currentDate) *1000;
}
countdown();

setInterval(countdown, 1000);
