
(function ($) {

  "use strict";

  $(".product-img").tilt({
    maxTilt: 15,
    perspective: 1400,
    easing: "cubic-bezier(.03,.98,.52,.99)",
    speed: 1200,
    glare: true,
    maxGlare: 0.2,
    scale: 1.04
  });

}(jQuery));
function menuDot() {
  let arr = window.location.href.split('/');
  let page = arr[arr.length - 1];
  if (page == 'index.html') {
    document.getElementById("home-icon").classList.add('menu-dot', 'item-active')
  }
  else if (page == 'service.html' || page == 'packageapp.html' || page == 'enterpriseapp.html' || page == 'cloud-doctor.html' || page == 'time-tracker.html') {
    document.getElementById("service-icon").classList.add('menu-dot', 'item-active')
  }
  else if (page == 'about.html') {
    document.getElementById("about-icon").classList.add('menu-dot', 'item-active')
  }
  else if (page == 'contact.html') {
    document.getElementById("contact-icon").classList.add('menu-dot', 'item-active')
  }
  else {
    document.getElementById("home-icon").classList.add('menu-dot', 'item-active')
  }
}
menuDot();

var dragItem = document.querySelector("#item");
var container = document.querySelector("#container");
var dragItem1 = document.querySelector("#item1");
var container1 = document.querySelector("#container1");

function languageMode() {
  container.addEventListener('click', function (e) {
    let className = container.classList[0];
    if (className == 'select-left') {
      container.classList.remove('select-left');
      container.classList.add('select-right');
      dragItem.classList.remove('item-left');
      dragItem.classList.add('item-right');
    }
    if (className == 'select-right') {
      container.classList.remove('select-right');
      container.classList.add('select-left');
      dragItem.classList.remove('item-right');
      dragItem.classList.add('item-left');
    }
  })

  container1.addEventListener('click', function (e) {
    let className = container1.classList[0];
    if (className == 'select-left') {
      // document.getElementById("menu1").style.display = "block";
      container1.classList.remove('select-left');
      container1.classList.add('select-right');
      dragItem1.classList.remove('item-left');
      dragItem1.classList.add('item-right');
    }
    if (className == 'select-right') {
      container1.classList.remove('select-right');
      container1.classList.add('select-left');
      dragItem1.classList.remove('item-right');
      dragItem1.classList.add('item-left');
    }
  })

}
languageMode();

new WOW().init();

function tiltcustom() {
  $('.tilt').tilt({
    maxTilt: 10,
  })
}
tiltcustom();

function toogleMenu() {
  let menuButton = document.querySelector(".header__menu-icon ");
  let menu = document.querySelector(".header__menu");
  let closeBtn = document.querySelector(".close-menu");
  let body = document.getElementsByTagName("body")[0];
  let bodyOverlay = document.querySelector(".body-overlay");

  menuButton.addEventListener("click", () => {
    menu.classList.toggle('set-width')
    body.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
    menuButton.classList.toggle('toggle')
    // bodyOverlay.style.display = "block";
  });
  // window.addEventListener('click', function(e){
  //   if (!document.getElementById('l2').contains(e.target) && (!document.getElementById('logo-menu').contains(e.target))){
  //   alert("Clicked outside l2 and logo-menu");
  //    document.getElementById('l2').style.height="0px"; //the same code you've used to hide the menu
  // } 
  // })
  window.addEventListener('click', function (e) {
    if (!menu.contains(e.target) && !menuButton.contains(e.target)) {
      menu.classList.remove('set-width')
      menuButton.classList.remove('toggle')
    }
  })
}
toogleMenu();


