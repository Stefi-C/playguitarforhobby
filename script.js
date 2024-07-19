
        //navbar
        const navbarBtn = document.querySelectorAll(".toggle_btn"),
        navbar = document.querySelectorAll('.navbar'),
        icon = document.querySelectorAll('.fa-bars');
        
         
                navbarBtn.addEventListener('click', function(){
    console.log("Toggle button clicked");
            if(window.innerWidth < 1024){    
                if (navbar.style.top === "0px" || navbar.style.top === "") {
                    console.log("Hiding navbar");
                    
                    icon.classList.replace("fa-times", "fa-bars");
                    
                } else if(navbar.style.top === "-900px") {
                    console.log("Showing navbar");
                    navbar.style.top = "0px";
                    icon.classList.replace("fa-bars", "fa-times");
                    
                }
               
            }
            })
           
        
            
      
        
            
         
           
            
        