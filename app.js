let menu_btn  =  document.getElementsByClassName('navbar__menu-icon')[0];
let  navbar__mobile  = document.getElementsByClassName('navbar__mobile-view')[0];
let close_btn =  document.getElementsByClassName('navbar__mobile-view--close-icon')[0];
let overlay =   document.getElementById("overlay") ; 
let match  =  window.matchMedia('(max-width:700px)');



function close_mobile_nav(){
      navbar__mobile.classList.remove('navbar__mobile-view--expanded');
      navbar__mobile.classList.add('navbar__mobile-view--compressed');
      overlay.style.display = "none";
}

function open_mobile_nav(){
      navbar__mobile.classList.add('navbar__mobile-view--expanded');
      navbar__mobile.classList.remove('navbar__mobile-view--compressed');
      overlay.style.display = "block";
}


overlay.addEventListener('click',()=>{
    close_mobile_nav();
})  


menu_btn.addEventListener("click",()=>{
    open_mobile_nav();
})


close_btn.addEventListener('click',()=>{
    close_mobile_nav();
})  


match.addEventListener("change",()=>{
    if (! match.matches)
        close_mobile_nav()
})
