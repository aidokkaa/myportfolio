let saluteTextContainer = document.querySelector('.saluteTextContainer');
let saluteImgContainer = document.querySelector('.saluteImgContainer');
let name = document.querySelector('.name');
const jobTitleContainers = document.querySelectorAll(".jobTitleContainer")
const jobTitles = document.querySelectorAll(".jobTitle")
const projectsTitle = document.querySelector(".projectsTitle")
const phones = document.querySelectorAll(".phone")
const laptop = document.querySelector(".laptop")

window.addEventListener("scroll", ()=>{
    let offsetY = window.scrollY;
    console.log(offsetY);
    saluteTextContainer.style.transform = `translateY(${offsetY *0.1}px)`
    saluteImgContainer.style.transform= `translate(${offsetY * 0.4}px, ${offsetY * 0.1}px)`;
    name.style.transform = `translateX(${-offsetY *0.1}px)`;
    jobTitleContainers[0].style.backgroundPositionY = `${offsetY*0.5}px`
    jobTitleContainers[1].style.backgroundPositionY = `${-offsetY*0.5}px`;
    jobTitles[0].style.transform = `translateX(calc(-200vh + ${offsetY}px))`
    jobTitles[1].style.transform = `translateX(calc(-300vh + ${offsetY}px))`;
})


