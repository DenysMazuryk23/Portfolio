const btn = document.querySelectorAll('.modal');
const modal = document.querySelector('#modals');
const modalClose = document.querySelector('.modal__close');
const title = document.querySelectorAll('.index__title');
let FormTitle = document.querySelector('.form__title');
const ModalBtn = document.querySelectorAll('.modal__button');





btn[0].addEventListener('click', function modalActive(i) {
    modal.classList.add('modal__active');
});

btn[1].addEventListener('click', function modalActive(i) {
    modal.classList.add('modal__active');
});


for (let i = 0; i < 7; i++) {
    btn[i].addEventListener('click', function modalActive() {
            modal.classList.add('modal__active');
        });
}



for (let index = 0; index < 6; index++) {
    ModalBtn[index].addEventListener('click', function modalTitle() {
        FormTitle.textContent = title[index].textContent;
    });
    
}



modalClose.addEventListener('click', function() {
    modal.classList.remove('modal__active');
});







const FirstBtn = document.querySelector('#first__btn');
const MidlleBtn = document.querySelector('#midlle__btn');
const LastBtn = document.querySelector('#last__btn');


const FirtsBlock = document.querySelector('#fitst__block');
const MidlleBlock = document.querySelector('#midlle__block');
const LastBlock = document.querySelector('#last__block');



MidlleBtn.addEventListener('click', function() {
    FirtsBlock.classList.remove('tabs_active');
    LastBlock.classList.remove('tabs_active');
    MidlleBlock.classList.add('tabs_active');
});


FirstBtn.addEventListener('click', function() {
    MidlleBlock.classList.remove('tabs_active');
    LastBlock.classList.remove('tabs_active');
    FirtsBlock.classList.add('tabs_active');
});

LastBtn.addEventListener('click', function() {
    MidlleBlock.classList.remove('tabs_active');
    FirtsBlock.classList.remove('tabs_active');
    LastBlock.classList.add('tabs_active');
});




const showBtn = document.querySelectorAll('.reviews__iteam--btn');
const showMore = document.querySelectorAll('.reviews__iteam--text');
const showRemove = document.querySelectorAll('.reviews__iteam--button');


// showRemove.addEventListener('click', function() {
//     showMore.style.height = "140px";
//     showBtn.style.display = "block";
//     showRemove.style.display = "none";
// });



for (let A = 0; A < 3; A++) {
    showBtn[A].addEventListener('click', function() {
        showMore[A].style.height = "300px";
        showBtn[A].style.display = "none";
        showRemove[A].style.display = "block";


        showRemove[A].addEventListener('click', function() {
            showMore[A].style.height = "140px";
            showBtn[A].style.display = "block";
            showRemove[A].style.display = "none";
        });
        
        
    });
}




const hamburger = document.querySelector('#hamber');
const menu = document.querySelector('#menu');



hamburger.addEventListener('click', function() {
   if(menu.className == "menu" && hamburger.className == "hamburger"){
       menu.className = "menu__acitve";
       hamburger.className = "hamburger__acitve";
   }else{
        hamburger.className = "hamburger";
         menu.className = "menu";
   }



});




const forms = document.querySelector('#forms');



forms.addEventListener('submit', (e) => {
    e.preventDefault();


    forms.reset();
});



const arowUp = document.querySelector('.arow__up');


    window.addEventListener('scroll', () => {

    });