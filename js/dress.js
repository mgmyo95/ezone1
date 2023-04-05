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
});


//product-search
let names = ["Ayla","Jake","Sean","Henry","Brad","Stepen","Taylor","Timmy","Cathy","John","Sam","Danny","Ellen","Camille","Emily","Nadia","Mitchell","Harvey","Lucy","Amy","Glen","Peter"];
let sortnames = names.sort();
let productinput = document.querySelector('.product-search #search');

productinput.addEventListener('keyup',(e)=>{
    // console.log(e.target)
    removeelement();
    for(var i of sortnames){
        if(i.toLowerCase().startsWith(productinput.value.toLowerCase()) && productinput.value !== ""){
            let newli = document.createElement('li');
            newli.classList.add('search-items');
            newli.style.cursor = "pointer";
            newli.setAttribute('onclick','displayname("'+i+'")')
            let word = "<b>"+i.substr(0,productinput.value.length)+"</b>";
            word += i.substr(productinput.value.length);
            newli.innerHTML = `${word}`;
            document.querySelector('.list').appendChild(newli);
        }
    }
});

function displayname(value){
    productinput.value = value;
    removeelement();
}

function removeelement(){
    let items = document.querySelectorAll('.search-items');
    items.forEach(item=>{
        item.remove();
    })
};

//filter price range 
let rangeinput = document.querySelectorAll('.range-input input');
let priceinput = document.querySelectorAll('.price-input input');
let progress = document.querySelector('.slider .progresss');
let pricegap = 5;

rangeinput.forEach(function(input){
    input.addEventListener('input',(e)=>{
        let minval = parseInt(rangeinput[0].value);
        let maxval = parseInt(rangeinput[1].value);
        // console.log(minval,maxval);
        if(maxval - minval < pricegap){
            if(e.target.className === "range-min"){
                rangeinput[0].value = maxval - pricegap;
            }else{
                rangeinput[1].value = minval + pricegap;
            }
        }else{
            priceinput[0].value = minval;
            priceinput[1].value = maxval;
            progress.style.left = (minval / rangeinput[0].max) * 100 + "%";
            progress.style.right = 100 - (maxval / rangeinput[1].max) * 100 + "%";  
        }
    })
});

//product colors 
let lis = document.querySelectorAll('.product-colors ol li');
lis.forEach(function(li){
   li.addEventListener('click',function(){
        let currentitems = document.querySelector('.coloritems');
        currentitems.classList.remove('coloritems');
        this.classList.add('coloritems');
   });
})

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