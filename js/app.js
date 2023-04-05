//jquery area 
// Start New Arrivals Section
//light slider
$(document).ready(function(){
    
    $("#lightslider").lightSlider({
        item:4,
        auto:true,
        loop:true,
        slideMove:1,
        autoWidth:true,
        controls:false,
        pager:false,
        speed:1500
    })

// End New Arrivals Section

//Start All Product //Filter Image
$('.products').click(function(){
    $(this).addClass('activeitems').siblings().removeClass('activeitems');

    var getattvalue = $(this).attr('data-filter');
    console.log(getattvalue)

    if(getattvalue === 'all'){
        $('.filters').show();
    }else{
        $('.filters').hide();
        $('.filters').not('.'+ getattvalue).hide();
        $('.filters').filter('.' + getattvalue).show();
    }
})
//End All Product //Filter Image

//Start Partner Section
$(".lightsliders").lightSlider({
    item:5,
    loop:true,
    auto:true,
    slideMove:1,
    autoWidth:true,
    controls:false,
    pager:false,
    speed:1000
})

//End Partner Section

//up to top
$(window).scroll(function(){
    let getscrolltop = $(this).scrollTop();
    console.log(getscrolltop)

    if(getscrolltop >= 500){
        $('.uptop').addClass('scroll');
    }else{
        $('.uptop').removeClass('scroll');
    }
})

})
//End jquery area


//javascript area

//navmenu collapse 
let openNavMenu = document.querySelector('.open-nav-menu');
let getNavMenu = document.querySelector('.navmenu');
let mediasize = 990;

openNavMenu.addEventListener('click',toggleNav);

function toggleNav(){
   if(getNavMenu.style.height){
    getNavMenu.style.height = '';
   }else{
    getNavMenu.style.height = getNavMenu.scrollHeight + "px";
   }
}

getNavMenu.addEventListener('click',function(e){
    console.log(e.target)
    if(e.target.hasAttribute('data-toggle') && window.innerWidth <= mediasize){
        e.preventDefault();

        let menuItemHasChildren = e.target.parentElement;
        console.log(menuItemHasChildren)

        if(menuItemHasChildren.classList.contains('active')){
            collapsesubmenu();
        }else{
            if(getNavMenu.querySelector('.menu-item-has-children.active')){
                collapsesubmenu();
            }
            menuItemHasChildren.classList.add("active");
            let submenu = menuItemHasChildren.querySelector('.sub-menu');
            submenu.style.maxHeight = submenu.scrollHeight + "px";
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

//add to cart
let noti = document.querySelector('.cart');
let select = document.querySelector(".select");
let getselectitem = document.querySelector('.select-item');
let carticon = document.querySelectorAll('.addcarts');
let trash = document.querySelector('.trashs')


for(but of carticon){
    but.addEventListener('click',function(e){
        let add = +(noti.getAttribute('data-count') || 0);
        noti.setAttribute('data-count',add+1);
        noti.classList.toggle('zero');

        let parent = e.target.parentNode.parentNode.parentNode.parentNode.parentNode;
        let clone = parent.cloneNode(true);
        getselectitem.appendChild(clone);
        // console.log(parent,clone);

        if(clone){
            noti.onclick = ()=>{
                select.classList.toggle('display');
                document.body.addEventListener('click',function(e){
                    console.log(e.target)
                    if(e.target.classList.contains('fa-trash-alt')){
                        e.target.parentElement.parentElement.remove();
                        if(e.target.parentElement.parentElement.remove()){
                            noti.getAttribute('data-count',add-1);
                        }
                    }
                })
            }
        }
        
    });
}
//add to cart 

//eyebutton clcik to show new modal
let geteyebuttons = document.querySelectorAll('.eyebutton');
let getnewmodal = document.querySelector('.newmodals');
let btnclose = document.querySelector('.btn-closes');
let slides = document.querySelectorAll('.items');
let dots = document.querySelectorAll('.dot');

geteyebuttons.forEach(function(eyebutton){
    eyebutton.addEventListener('click',function(){
        showmodal()
    })
});
function showmodal(){
    getnewmodal.style.display = "block";
}

btnclose.onclick = function(){
    getnewmodal.style.display = "none";
    window.location.reload();
}

window.onclick = function(e){
    // console.log(e.target)
    if(e.target === getnewmodal){
        getnewmodal.style.display = "none";
    }
}

for(var j = 0 ; j < dots.length ; j++){
    dots[j].addEventListener('click',function(){
        // console.log(this.getAttribute('data-bs-slide-to'))
        curidx = this.getAttribute('data-bs-slide-to');
        carousel(curidx)
    })
}

let curidx = 1;
carousel(curidx);
function carousel(slidenum){
    // console.log(slidenum)

    for(var x = 0 ; x < slides.length ; x++){
        slides[x].style.display = "none";
    }

    if(slidenum > slides.length){
        curidx = 1;
    }else if(slidenum < 1){
        curidx = slides.length-1;
    }

    slides[curidx-1].style.display = "block";

}

  //incre and decre

  let currentidx = 1
  let getnumber = document.querySelector('.numbers');
  getnumber.textContent = 1;
  document.querySelector('.incre').onclick = function(){
      // console.log(currentidx += 1);     
       currentidx += 1;
      getnumber.textContent = currentidx;
  }

  document.querySelector('.decre').onclick = function(){
      // console.log(currentidx += 1);
       currentidx -= 1;
       if(currentidx < 1){
          currentidx = 0;
       }
      getnumber.textContent = currentidx;
  }

  //newmodal


//footer 
//years 
let year = new Date().getUTCFullYear();
document.querySelector('#years').textContent = year;



 




