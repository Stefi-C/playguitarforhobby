
        //navbar
        const navbarBtn = document.querySelector(".toggle_btn"),
        navbar = document.querySelector('.navbar'),
        icon = document.querySelector('.fa-bars');
        if(window.innerWidth < 1024){
            navbar.style.top = '-900px';
             function navbarFunction(){
                console.log("Toggle button clicked");
                if (navbar.style.top === "0px" || navbar.style.top === "") {
                    console.log("Hiding navbar");
                    navbar.style.top = "-900px";
                    
                } else {
                    console.log("Showing navbar");
                    navbar.style.top = "0";
                    
                }
                if(icon.classList.contains("fa-bars")){
                    icon.classList.replace("fa-bars", "fa-times");
                }
                else{
                    icon.classList.replace("fa-times", "fa-bars");
                }
            }
        }
           
            
        