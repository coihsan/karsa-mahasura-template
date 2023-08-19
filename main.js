// greeting
let hour = new Date().getHours();
let greeting;
  
  if (hour >= 4 && hour < 11) {
   greeting = "Morning!";
  }
  else if (hour >= 11 && hour < 13) {
   greeting = "Day!"
  }
  else if (hour >= 13 && hour < 18) {
   greeting = "Afternoon!"
  }
  else {
   greeting = "Evening!";
  }
  document.getElementById("greeting").innerHTML = greeting;

  // When the user scroll changging background the navbar

  window.addEventListener('scroll', function(){
    var scrollY = this.window.scrollY;
    if (scrollY > 100){
      this.document.querySelector('nav').classList.add('scrolled');
    } else {
      this.document.querySelector('nav').classList.remove('scrolled');
    }
  })

// Modal 
const openEls = document.querySelectorAll("[data-open]");
const closeEls = document.querySelectorAll("[data-close]");
const isVisible = "is-visible";

for (const el of openEls) {
  el.addEventListener("click", function() {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
  });
}

for (const el of closeEls) {
  el.addEventListener("click", function() {
    this.parentElement.parentElement.parentElement.classList.remove(isVisible);
  });
}

document.addEventListener("click", e => {
  if (e.target == document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});

document.addEventListener("keyup", e => {
  // if we press the ESC
  if (e.key == "Escape" && document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});

// animation scroll

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0;i < reveals.length; i++){
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible){
      reveals[i].classList.add("actives");
    } else {
      reveals[i].classList.remove("actives");
    }
  }
}
window.addEventListener("scroll", reveal);

// form

const inputField = document.getElementById("name");

  inputField.addEventListener('input', function(){
    const userInput = inputField.ariaValueMax;
    alert("I'm sorry, the contact form is not available at the moment!");
  })
  // navbar


 {
      const MenuToggle = document.querySelector(".menu-toggle");
      const nav = document.querySelector("nav ul");
      const navOff = ".navbar ul.slide"

      MenuToggle.addEventListener("click", function() {
          nav.classList.toggle("slide");
      });

      MenuToggle.addEventListener('click', ss => {
       if (ss.target == document.querySelector(".navbar ul.slide")) {
        document.querySelector(".navbar ul.slide").classList.remove("slide");
       }
      })
    }

// slider card

function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
const slider = document.querySelector('.progress-bar-div');
let startX = null;

slider.addEventListener('touchstart', e => {
  startX = e.touches[0].clientX;
});

slider.addEventListener('touchmove', e => {
  if (startX) {
    const diffX = startX - e.touches[0].clientX;
    slider.scrollLeft += diffX;
    startX = e.touches[0].clientX;
  }
});

slider.addEventListener('touchend', () => {
  startX = null;
});

