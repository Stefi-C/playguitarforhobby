
 //navbar
 /*
 function reorderNavbar() {
    const navbar = document.getElementById('navbar');
    const items = Array.from(navbar.children);
    const homeItem = items.find(item => item.querySelector('a').getAttribute('href') === 'index.html');

    if (window.innerWidth <= 1024) {
      if (navbar.firstChild !== homeItem) {
        navbar.insertBefore(homeItem, navbar.firstChild);
      }
    } else {
      const thirdItem = items[2];
      if (thirdItem !== homeItem) {
        navbar.insertBefore(homeItem, thirdItem.nextSibling);
      }
    }
  }

  // Reorder on page load
  window.addEventListener('load', reorderNavbar);
  // Reorder on window resize
  window.addEventListener('resize', reorderNavbar);*/

  navbarBtn = document.querySelector('.toggle_bnt');
navbar = document.querySelector('.navbar');

if(navbarBtn){
    navbarBtn.addEventListener('click', function(){
        if(navbar.style.top == "-900px"){
          navbar.style.top = "0"
          navbarBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
      }else{
          navbar.style.top = "-900px";
          navbarBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
       }
      })
}