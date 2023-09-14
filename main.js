
// preloader script............
var audio = document.getElementById("audioPlayer");
var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  loader.style.display = "none";
  document.querySelector('.hey').classList.add('popup');
})

// preloader script ends here.........

// switch for setting
function settingtoggle(){
  document.getElementById("setting-container").classList.toggle('settingactivate');
  document.getElementById("visualmodetogglebuttoncontainer").classList.toggle('visualmodeshow');
  document.getElementById("soundtogglebuttoncontainer").classList.toggle('soundmodeshow');
}
function playpause() {
  if (document.getElementById('switchforsound').checked == false) {
    audio.pause();
   }

 else{
     audio.play();
 }
  }

  function visualmode(){
    document.body.classList.toggle('light-mode');
    document.getElementById('labelforsound').classList.toggle('invertsoundlabel');
    document.querySelector('.about-heading-article').classList.toggle('heading-article-light');
    document.querySelector('.aboutHeadingP').classList.toggle('heading-article-light');

    document.querySelector('.services-heading-article').classList.toggle('heading-article-light');
    document.querySelector('.servicesHeadingP').classList.toggle('heading-article-light');

    document.querySelector('.projects-heading-article').classList.toggle('heading-article-light');
    document.querySelector('.projectsHeadingP').classList.toggle('heading-article-light');
   
    document.querySelector('.frontend-dev-heading').classList.toggle('heading-article-light');
    document.querySelector('.designing-heading').classList.toggle('heading-article-light');
    document.querySelector('.languages-heading').classList.toggle('heading-article-light');

    document.getElementById('html').classList.toggle('language-gradient-class');
    document.getElementById('css').classList.toggle('language-gradient-class');
    document.getElementById('bootstrap').classList.toggle('language-gradient-class');
    document.getElementById('react').classList.toggle('language-gradient-class');
    document.getElementById('js').classList.toggle('language-gradient-class');
    document.getElementById('ap').classList.toggle('language-gradient-class');
    document.getElementById('canva').classList.toggle('language-gradient-class');
    document.getElementById('ai').classList.toggle('language-gradient-class');
    document.getElementById('c').classList.toggle('language-gradient-class');
    document.getElementById('cpp').classList.toggle('language-gradient-class');
    // document.getElementById('project-box1').classList.toggle('language-gradient-class');
    // document.getElementById('project-box2').classList.toggle('language-gradient-class');
    let projectBox = document.querySelectorAll('.project-box');
    projectBox.forEach(Box => {
        Box.classList.toggle('language-gradient-class');
    })

  }
let emptyArea = document.getElementById("emptyarea");
 let mobileTogglemenu = document.getElementById("mobiletogglemenu");
// toggle menu by clicking on hamburger
function hamburgerMenu() {
    document.body.classList.toggle("stopscrolling");
 document.getElementById("mobiletogglemenu").classList.toggle("show-toggle-menu");
 document.getElementById("emptyarea").classList.toggle("blur-class");
document.getElementById("burger-bar1").classList.toggle("hamburger-animation1");
document.getElementById("burger-bar2").classList.toggle("hamburger-animation2");
document.getElementById("burger-bar3").classList.toggle("hamburger-animation3");
}
// close mobile toggle menu by clicking on LI
function hidemenubyli(){
document.body.classList.toggle("stopscrolling");
document.getElementById("mobiletogglemenu").classList.remove("show-toggle-menu");
document.getElementById("emptyarea").classList.remove("blur-class");
document.getElementById("burger-bar1").classList.remove("hamburger-animation1");
document.getElementById("burger-bar2").classList.remove("hamburger-animation2");
document.getElementById("burger-bar3").classList.remove("hamburger-animation3");
}

// close Mobile hamburger toggle menu while clicking in empty area
emptyArea.addEventListener('click',hidetogglemenu);
function hidetogglemenu(){
document.body.classList.remove("stopscrolling");
document.getElementById("mobiletogglemenu").classList.remove("show-toggle-menu");
document.getElementById("emptyarea").classList.remove("blur-class");
document.getElementById("burger-bar1").classList.remove("hamburger-animation1");
document.getElementById("burger-bar2").classList.remove("hamburger-animation2");
document.getElementById("burger-bar3").classList.remove("hamburger-animation3");
}

const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('.navbar .navbar-tabs .navbar-tabs-ul a li');
const mobilenavLi = document.querySelectorAll('.mobiletogglemenu .mobile-navbar-tabs-ul a li');

window.addEventListener('scroll', ()=>{
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if(pageYOffset >= (sectionTop - 500)){
      current = section.getAttribute('id');
    }
  })

  mobilenavLi.forEach( li => {
    li.classList.remove('activeThismobiletab');
    if(li.classList.contains(current)){
      li.classList.add('activeThismobiletab')
    }
  })
navLi.forEach( li => {
  li.classList.remove('activeThistab');
  if(li.classList.contains(current)){
    li.classList.add('activeThistab')
  }
})
})
console.log('%c Designed and Developed by Anas Rabea ', 'background-image: linear-gradient(90deg,#8000ff,#6bc5f8); color: white;font-weight:900;font-size:1rem; padding:20px;');



// document.addEventListener("contextmenu", function (e){
//   e.preventDefault();
// }, false);

document.addEventListener("contextmenu", function(e){
  if (e.target.nodeName === "IMG") {
      e.preventDefault();
  }
}, false);





let pupils = document.getElementsByClassName('pupil');
let pupilsArr = Array.from(pupils);
// console.log(pupils);

let pupilStartPoint = -1;
let pupilRange = 3;

// mouse X 
let mouseXStartPoint = 0;
let mouseXEndPoint = window.innerWidth;
let currentXPosition = 0;
let fracXValue = 0;


// mouse Y position 
let mouseYEndPoint = window.innerHeight;
let currentYPosition = 0;
let fracYValue = 0;

let mouseXRange = mouseXEndPoint - mouseXStartPoint;

const mouseMove = (event) => {
    currentXPosition = event.clientX - mouseXStartPoint;
    fracXValue = currentXPosition / mouseXRange;

    currentYPosition = event.clientY;
    fracYValue = currentYPosition / mouseYEndPoint;
    
    let pupilXCurrrentPosition = pupilStartPoint + (fracXValue * pupilRange);
    let pupilYCurrrentPosition = pupilStartPoint + (fracYValue * pupilRange);

    pupilsArr.forEach((curPupil) => {
        curPupil.style.transform= `translate(${pupilXCurrrentPosition}px, ${pupilYCurrrentPosition}px)`;
    })

}

const windowResize = (event) => {
    mouseXEndPoint = window.innerWidth;
    mouseYEndPoint = window.innerHeight;
    mouseXRange = mouseXEndPoint - mouseXStartPoint;
}


window.addEventListener('mousemove', mouseMove);
window.addEventListener('resize', windowResize);


const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let maxLevel = 5;
let branches = 2;
let sides = 5;
let gapBetweenTwoBranches = Math.random() * 150 + 150;
let lengthOfTheBranches = Math.random() * 150 + 150;
let spread = Math.random();
let angle = Math.PI * 2 * spread;

ctx.translate(canvas.width / 2, canvas.height / 2);

function drawLine(level) {
    if (level > maxLevel) {
        return;
    }
    ctx.strokeStyle = "green";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(lengthOfTheBranches, 0);
    ctx.stroke();
    for (let i = 1; i < branches + 1; i++) {
        ctx.save();
        ctx.translate(gapBetweenTwoBranches * i, 0);
        ctx.scale(0.5, 0.5);
        ctx.save();

        ctx.rotate(angle);
        drawLine(level + 1);
        ctx.restore();
        ctx.save();

        ctx.rotate(-angle);
        drawLine(level + 1);
        ctx.restore();

        ctx.restore();
    }
}

for (let i = 0; i < sides; i++) {
    drawLine(0);
    ctx.rotate((Math.PI * 2) / sides);
}

window.addEventListener("click", () => {
    maxLevel = 5;
    branches = 2;
    sides = 5;
    gapBetweenTwoBranches = Math.random() * 150 + 150;
    lengthOfTheBranches = Math.random() * 150 + 150;
    spread = Math.random();
    angle = Math.PI * 2 * spread;
    ctx.clearRect(
        -canvas.width / 2,
        -canvas.height / 2,
        canvas.width,
        canvas.height
    );
    for (let i = 0; i < sides; i++) {
        drawLine(0);
        ctx.rotate((Math.PI * 2) / sides);
    }
});

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.translate(canvas.width / 2, canvas.height / 2);
});


// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);


//////////////////////////////////////////////////

let nums = document.querySelectorAll(".counters .num");
let section = document.getElementById("score");
let started = false; // Function Started ? No

window.onscroll = function () {
  scrollFunction()
  if (window.scrollY = section.offsetTop) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 6000 / goal);
}




//////////////////////////////////////////
let mybutton = document.getElementById("backtotopbutton");

function scrollFunction(){
  if(document.body.scrollTop > 400 || document.documentElement.scrollTop > 400)
  {
    mybutton.style.display = "block";
  }
   else{
      mybutton.style.display = "none";
     
      }
}

function scrolltoTopfunction(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}