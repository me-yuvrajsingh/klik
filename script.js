let sec = document.querySelectorAll("section");
let svgElem = document.querySelector(".svg");
let dots = document.querySelectorAll(".dotsst");
let pathfill = document.querySelector(".transrgwht").style;
pathfill.transition = "stroke-dasharray, 2s";
function defaultSet() {
  console.log("exdefault");
  sec.forEach((e) => {
    e.classList.add("none");
  });
  dots.forEach((e) => {
    e.style.fill = "rgb(255 255 255 / 50%)";
  });
}

// for the exit animation of the text and images
function exitAnimation() {
  console.log("exit");
  document.querySelectorAll(".animate__fadeInDown").forEach((e) => {
    e.classList.add("animate__fadeOutUp");
  });
  document.querySelectorAll(".animate__fadeInUp").forEach((e) => {
    e.classList.add("animate__fadeOutDown");
  });
  document.querySelectorAll(".animate__fadeInUpBig").forEach((e) => {
    e.classList.add("animate__fadeOutDownBig");
  });
  document.querySelectorAll(".animate__fadeInDownBig").forEach((e) => {
    e.classList.add("animate__fadeOutUpBig");
  });
  document.querySelectorAll(".animate__fadeInRight").forEach((e) => {
    e.classList.add("animate__fadeOutRight");
  });
}

// for the entry animation of the text and images
function entryAnimation() {
  console.log("entry");
  document.querySelectorAll(".animate__fadeInDown").forEach((e) => {
    e.classList.remove("animate__fadeOutUp");
  });
  document.querySelectorAll(".animate__fadeInUp").forEach((e) => {
    e.classList.remove("animate__fadeOutDown");
  });
  document.querySelectorAll(".animate__fadeInUpBig").forEach((e) => {
    e.classList.remove("animate__fadeOutDownBig");
  });
  document.querySelectorAll(".animate__fadeInDownBig").forEach((e) => {
    e.classList.remove("animate__fadeOutUpBig");
  });
  document.querySelectorAll(".animate__fadeInRight").forEach((e) => {
    e.classList.remove("animate__fadeOutRight");
  });
}

// svg dots for the active pages
function noOfDotActive(n) {
  for (var i = 0; i < n; i++) {
    dots[i].style.fill = "white";
  }
}

// to display from first to last page
function showSec1() {
  exitAnimation();
  pathfill.strokeDasharray = "0, 1000";
  setTimeout(() => {
    entryAnimation();
    defaultSet();
    noOfDotActive(1);
    sec[0].classList.remove("none");
    svgElem.style.backgroundColor = "#6015ab";
  }, 1000);
}

function showSec2() {
  exitAnimation();
  pathfill.strokeDasharray = "140, 1000";
  setTimeout(() => {
    entryAnimation();
    defaultSet();
    noOfDotActive(2);
    sec[1].classList.remove("none");
    svgElem.style.backgroundColor = "#352091";
  }, 650);
}
function showSec3() {
  exitAnimation();
  pathfill.strokeDasharray = "280, 1000";
  setTimeout(() => {
    entryAnimation();
    defaultSet();
    noOfDotActive(3);
    sec[2].classList.remove("none");
    svgElem.style.backgroundColor = "#0f1239";
  }, 650);
}
function showSec4() {
  exitAnimation();
  pathfill.strokeDasharray = "415, 1000";
  setTimeout(() => {
    entryAnimation();
    defaultSet();
    noOfDotActive(4);
    sec[3].classList.remove("none");
    svgElem.style.backgroundColor = "#17273c";
  }, 650);
}
function showSec5() {
  exitAnimation();
  pathfill.strokeDasharray = "530, 1000";
  setTimeout(() => {
    entryAnimation();
    defaultSet();
    noOfDotActive(5);
    sec[4].classList.remove("none");
    svgElem.style.backgroundColor = "#154fa2";
  }, 650);
}
function showSec6() {
  exitAnimation();
  pathfill.strokeDasharray = "680, 1000";
  setTimeout(() => {
    entryAnimation();
    defaultSet();
    noOfDotActive(6);
    sec[5].classList.remove("none");
    svgElem.style.backgroundColor = "#022d92";
  }, 650);
}
function showSec7() {
  exitAnimation();
  pathfill.strokeDasharray = "820, 1000";
  setTimeout(() => {
    entryAnimation();
    defaultSet();
    noOfDotActive(7);
    sec[6].classList.remove("none");
    svgElem.style.backgroundColor = "#00824a";
  }, 650);
}
