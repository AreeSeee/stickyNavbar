let navbar = document.getElementById("navDiv");
let navPos = navbar.getBoundingClientRect().top;


window.addEventListener("scroll", e => {
    let viewportHeight = window.innerHeight;
    let scrollPos = window.scrollY;
    if (scrollPos > navPos) {
      navbar.classList.add('sticky');
      
    } else {
      navbar.classList.remove('sticky');
     
    }
  });