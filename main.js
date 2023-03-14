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


  // navbar

  const MenuToggle = document.querySelector(".menu-toggle");
        const nav = document.querySelector("nav ul");

        MenuToggle.addEventListener("click", function() {
            nav.classList.toggle("slide");
        })
