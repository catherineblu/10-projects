//movement animation
const card = document.querySelector('.card');
const container = document.querySelectorAll('.container');
//stuff on the card that are animated too :)
const title = document.querySelectorAll('.title');
const cat = document.querySelectorAll('.cat img');
const mrow = document.querySelectorAll('.mrow button');
const description = document.querySelectorAll('.info h3');
const paws = document.querySelectorAll('.paws');

//moving animation event
container.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) /25;
    let yAxis = (window.innerHeight / 2 - e.pageY)/25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//animate in
container.addEventListener('mouseenter', (e) => {
    card.style.transition = 'none';
    //popout
    title.style.transform = 'translateZ(150px)';
    cat.style.transform = 'translateZ(200px) rotateZ(-45deg)';
    description.style.transform = 'translateZ(125px)';
    paws.style.transform = 'translateZ(100px)';
    mrow.style.transform = 'translateZ(75px)';
});

//animate out
container.addEventListener("mouseleave", (e) => {
    card.style.transition = 'all 0.5s ease';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //popback
    title.style.transform = 'translateZ(0px)';
    cat.style.transform = 'translateZ(0px) rotateZ(0deg)';
    description.style.transform = 'translateZ(0px)';
    paws.style.transform = 'translateZ(0px)';
    mrow.style.transform = 'translateZ(0px)';
});