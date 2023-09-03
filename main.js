// LOADER

document.addEventListener('DOMContentLoaded', function(){
    setTimeout(showContent,4000);
})
function showContent(){
    document.getElementById('loader-content').classList.add('active');

}

// NAVMENU
{
const toggleCheckbox = document.getElementById("toggle-checkbox");
const sideNav = document.getElementById("sidenav");
const navOverlay = document.getElementById("navOverlay");
const navmenu = document.querySelectorAll(".navmenu-body > a");
const active = "active";
const sidenavClose = document.getElementById("button-close-sidenav");

    toggleCheckbox.addEventListener('change', function(){
        if (toggleCheckbox.checked){
            navOverlay.classList.add(active);
            sideNav.classList.add(active);
        } else{
            navOverlay.classList.remove(active);
            sideNav.classList.remove(active);
        }
    });
    navmenu.forEach(item => {
        item.addEventListener('click', function(event) {
            if (document.querySelector(".sidenav.active") !== null) {
                toggleCheckbox.checked = false;
                navOverlay.classList.remove('active');
                sideNav.classList.remove('active');
            }
        });
    });

    document.addEventListener('click', (event) =>{
        if (event.target === document.querySelector('.navOverlay.active')){
            toggleCheckbox.checked = false;
            document.querySelector('.sidenav.active').classList.remove('active');
            navOverlay.classList.remove('active');
        }
    })
    document.addEventListener('keyup', e =>{
        if (e.key === "Escape" && document.querySelector('.navOverlay.active')){
            toggleCheckbox.checked = false;
            document.querySelector('.sidenav.active').classList.remove('active');
            navOverlay.classList.remove('active');
        }
    })

}
// GREETING TEXT
const time = new Date().getHours();
let greeting;

if (time > 4 && time <= 11){
    greeting = "Good Morning!";
}
else if (time >= 11 && time < 14 ) {
    greeting = "Good Afternoon!"
}
else if (time > 14 && time <= 17.59){
    greeting = "Good Afternoon!";
}
else {
    greeting = "Good Evening!"
}
document.getElementById('greeting').innerHTML = greeting;

// WHEN THE USER SCROLL DOWN THE NAVBAR CHANGING BACKGROUND COLOR

window.addEventListener('scroll', function(){
    var scrollY = this.window.scrollY;
    if (scrollY > 100){
        this.document.querySelector(".topNav").classList.add('topNav-scrolled');
    } else{
        this.document.querySelector(".topNav").classList.remove('topNav-scrolled');
    }
});




// ACCORDION

$(document).ready(function() {
    // Fungsi untuk memeriksa jika layar adalah perangkat mobile
    function isMobileDevice() {
      return (window.innerWidth <= 768); // Ganti dengan breakpoint sesuai kebutuhan Anda
    }

    // Cek apakah perangkat adalah mobile sebelum menjalankan kode
    if (isMobileDevice()) {
      $('.accordion-header').click(function() {
        $(this).next('.accordion-content').slideToggle();
        
        $(this).toggleClass('active');
        
        $(this).toggleClass('active-background');
        
        $('.accordion-header').not(this).removeClass('active-background');
        
        $('.accordion-content').not($(this).next('.accordion-content')).slideUp();
        $('.accordion-header').not(this).removeClass('active');
      });
    }
  });


// AOS ANIMATION SCROLL

// below listed default settings
AOS.init({
  // Global settings:
  disable: false, 
  startEvent: 'DOMContentLoaded', 
  initClassName: 'aos-init',
  animatedClassName: 'aos-animate',
  useClassNames: false, 
  disableMutationObserver: false, 
  debounceDelay: 50,
  throttleDelay: 200,
  
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120,
  delay: 1,
  duration: 1000,
  easing: 'ease', 
  once: false, 
  mirror: false, 
  anchorPlacement: 'top-bottom',

});

const isiForm = document.querySelector('.form-container .form-item > input');
isiForm.addEventListener('input', function(){
  const userInput = isiForm.ariaValueMax;
  alert("I'm sorry, the contact form is not available at the moment!");
})