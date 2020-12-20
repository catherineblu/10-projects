const tempusRerum = '1st Jan 2021';

function cowntdown (){
    const newYearsDate = new Date (tempusRerum);
    const currentDate = new Date();

    console.log(tempusRerum - currentDate);
}
cowntdown();