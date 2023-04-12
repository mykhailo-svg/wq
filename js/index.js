
$(document).ready(function(){
  $('.slider').slick({
      dots:true,
      arrows:false,
      slidesToShow: 2,
      slidesToScroll: 2,
      speed: 400,
      touchThreshold:12,
      responsive: [
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
       
          }
        },
     
      ]
  });
  
});

const loacationButton = document.querySelector('.locat__button');
const locationPopUp = document.querySelector('.location__successful');

loacationButton.addEventListener('click', function ()  {
  locationPopUp.classList.add('loc__pop__show');
});


const selectHeader = document.querySelectorAll('.select__header');
const selectItems = document.querySelectorAll('.select__item');
const currentText = document.querySelectorAll('.select__current');
const currencyReverse = document.querySelector('.cash__dekor-svg');

const selects = document.querySelectorAll('.select');

const crDwn = document.querySelectorAll('.select__body');
currencyReverse.addEventListener('click', function ()  {
    const currencyClone = currentText[0].innerHTML;
    currentText[0].innerHTML = currentText[1].innerHTML;
    currentText[1].innerHTML = currencyClone;
});
const select = function () {
    
  
    

    





  


  for (let i = 0; i < selects.length; i++) {
    

    selectHeader[i].addEventListener('click', function () {
      if (i==1) {
        selects[0].classList.add('is-active');
        selects[i].classList.toggle('is-active');
      }
      else if (i==0) {
        selects[1].classList.add('is-active');
        selects[i].classList.toggle('is-active');
      }
      
      
    });
   
  }
  for (let a = 0; a < selectItems.length; a++) {
    selectItems[a].addEventListener('click', function ()  {
      if (a <3) {
        selects[0].classList.add('is-active');
        currentText[0].innerHTML = this.innerHTML;
        console.log("hi");
      }
      else{
        selects[1].classList.add('is-active');
        currentText[1].innerHTML = this.innerHTML;
        console.log("hi");
      }
  });
    
  }

  
   
};


  
select();


const burgerButton = document.querySelector('.hamburger');

const burgerBody = document.querySelector('.burger__body');
burgerButton.addEventListener('click', function ()  {
    if (burgerBody.classList.length<2) {
      burgerBody.classList.add('burger__show');
    }
    else{
      burgerBody.classList.toggle('burger__show');
      burgerBody.classList.toggle('burger__hide');
    }
   
});


const langList = document.querySelectorAll('.curr__lang');
const langSublists = document.querySelectorAll('.lang__sublist');

let selLangCont;
const currentLang = document.querySelectorAll('.curr__lang');
for (let i = 0; i < langList.length; i++) {
  langList[i].addEventListener('click', function ()  {
      langSublists[i].classList.toggle('lang_sub_hide');
    
  });
  langSublists[i].addEventListener('click', function ()  {
      selLangCont = langSublists[i].innerHTML;
      
      langSublists[i].innerHTML = currentLang[i].innerHTML;
      currentLang[i].innerHTML = selLangCont;
      langSublists[i].classList.toggle('lang_sub_hide');
  });
}





const drpD = document.querySelectorAll('.dropdown');

const dropConts = document.querySelectorAll('.drop__text');


for (let i = 0; i < drpD.length; i++) {
  drpD[i].addEventListener('click', function ()  {
    dropConts[i].classList.toggle('drop__show');
  });
  
}
console.log(langList);
document.documentElement.style.scrollBehavior = "smooth";

const upBtn = document.querySelector('.up__btn img');
console.log(upBtn);
upBtn.addEventListener('click', function ()  {
  scroll(0, 0);
});

// document.querySelectorAll('.dropdown-btn').forEach(function (el) {
//   el.addEventListener('click', function () {
//       this.parentNode.classList.toggle('active');
//   });
// });

const headerBlock = document.querySelector('.header');

const headerHeight = headerBlock.offsetHeight;
const uppExButton = document.querySelector('.up__btn');
console.log(uppExButton);

const startHeight = document.querySelector('.start__container').offsetHeight;
window.addEventListener('scroll', function ()  {
  if (window.scrollY >  startHeight + headerHeight) {
      uppExButton.classList.add('up_btn_show');
      console.log("up");
    
  }
  else if(window.scrollY < startHeight + headerHeight){
      uppExButton.classList.remove('up_btn_show');
      console.log("dwn");
  }
});

const cashLockBtn = document.querySelector('.cash__lock-cont');
console.log(cashLockBtn);

cashLockBtn.addEventListener('click', function ()  {
    cashLockBtn.classList.toggle('cash__lock');
});
