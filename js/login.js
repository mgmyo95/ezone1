// jquery area 



// javascript area
let openNavMenu = document.querySelector('.open-nav-menu');
let getNavMenu = document.querySelector(".navmenu");
let mediasize = 990;

openNavMenu.addEventListener('click',toggleNav);
function toggleNav(){
    if(getNavMenu.style.height){
        getNavMenu.style.height = null;
    }else{
        getNavMenu.style.height = getNavMenu.scrollHeight + "px";
    }
}

getNavMenu.addEventListener('click',function(e){
    console.log(e.target)
    if(e.target.hasAttribute('data-toggle') && window.innerWidth <= mediasize){
        let menuItemHasChildren = e.target.parentElement;
        console.log(menuItemHasChildren)

      if(menuItemHasChildren.classList.contains('active')){
        collapsesubmenu();
      }else{
        if(getNavMenu.querySelector('.menu-item-has-children.active')){
            collapsesubmenu();
        }else{
            menuItemHasChildren.classList.add('active')
            let submenu = menuItemHasChildren.querySelector('.sub-menu');
            submenu.style.height = submenu.scrollHeight + "px";
        }
      }
    }
})

function collapsesubmenu(){
    getNavMenu.querySelector('.menu-item-has-children.active .sub-menu').removeAttribute('style');
    getNavMenu.querySelector('.menu-item-has-children.active').classList.remove('active');
}

function resizefix(){
    if(getNavMenu.style.height){
        toggleNav();
    }
    if(getNavMenu.querySelector('.menu-item-has-children.active')){
        collapsesubmenu();
    }
}

window.addEventListener('resize',function(){
    if(this.innerWidth >= mediasize){
        resizefix();
    }
});

//navsearch
let search = document.querySelector('.search');
let navsearch = search.querySelector('#search');
navsearch.focus();

//banners 
let getheader = document.querySelector("header");
$(document).ready(function(){
    $(window).scroll(function(){
        let getscrolltop = $(this).scrollTop();
        console.log(getscrolltop)
        getheader.style.backgroundPositionY = getscrolltop * 0.6 + "px";
    })
})

//Start Contact Section 
let contact = document.querySelector('.contacts');
let password = contact.querySelector('#password');
let showtext = document.querySelector('.showtext');
let show = document.querySelector('#show');
show.addEventListener('click',function(){
    if(show.checked){
        showtext.textContent = "Hide Password";
        password.type = "text";
    }else{
        showtext.textContent = "Show Password";
        password.type = "password";
    }
})
//End Contact Section 

//End javascript area