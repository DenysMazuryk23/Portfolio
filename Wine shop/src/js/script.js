const modallListbtn = document.querySelector('.list');
const fiilterModall = document.querySelector('.modall__fillter');
const modallList = document.querySelector('.modall__list');
const total = document.querySelector('.total');
const modallLists = document.querySelector('.modall__totralPrice');
const modallbody = document.querySelector('.modall__body');



modallListbtn.addEventListener('click', () => {
    fiilterModall.style.display = "block";
    modallList.style.display = "block";

   
})

    fiilterModall.addEventListener('click', () => {
        fiilterModall.style.display = "none";
        modallList.style.display = "none";
    })

  


    const navBtn = document.querySelectorAll('.catalog__nav--item');



    function showActivenav(index) {
        navBtn[index].classList.add('active__nav');
    }

    function hideNav(){
        navBtn.forEach(item => {
            item.classList.remove('active__nav');
        })
    }



showActivenav(0);


navBtn.forEach((item, index) => {
    item.addEventListener('click' , () => {
        hideNav()
        showActivenav(index);
    })
})



  


const wineImages = document.querySelectorAll('.catalog__item--img'), 
      wineName = document.querySelectorAll('.catalog__item--name'),
      wineOldPrice = document.querySelectorAll('.catalog__item--oldprice'),
      wrapperCaltlogs = document.querySelector('.catalog__wrapper'),
      washList = document.querySelector('.list'),
      wineNewPrice = document.querySelectorAll('.catalog__item--newprice');
let indexList = 0;

    washList.innerHTML = `Wish List (${indexList})`;



      const getResource = async (url) => {
        let res = await fetch(url);
    
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
    
        return await res.json();
    };




    
    
    getResource('database/wineDataBase.json')
    .then(res => CreateItem(res))
  

    function CreateItem(resulte) {
        resulte.forEach((item, i) => {   
            
            
            const items = document.createElement('div');            
            items.classList.add('catalog__item');


     

            items.innerHTML = 
            `
         
                    <div class="catalog__btn">add </div>
                    <div class="catalog__item--img"><img src="img/${item.img}" alt=""></div>
                    <div class="catalog__item--name">${item.name}</div>
                    <div class="price__wrapper">
                        <span class="catalog__item--oldprice"><s>${item.oldPrice}$</s></span>
                        <span class="catalog__item--newprice">${item.newPrice}$</span>
                    </div>
          

            
            `;

            
            wrapperCaltlogs.appendChild(items);

            const catalogItem = document.querySelectorAll('.catalog__item');
    
            if(resulte[i].categiri == "all white") {
                catalogItem[i].classList.add('white');
            } if(resulte[i].categiri == "all red") {
                catalogItem[i].classList.add('red');
            } if(resulte[i].categiri == "all rose") {
                catalogItem[i].classList.add('rose');
            } 
                
         
        })


        const btnCatalogs = document.querySelectorAll('.catalog__btn');
  
        let totalconst = 0;
        btnCatalogs.forEach((item, i) => {
            item.addEventListener('click', () => {
                totalconst += resulte[i].newPrice; 
                total.innerHTML = `<div class="total">total:${totalconst}$</span>`;
                indexList++;
                washList.innerHTML = `Wish List (${indexList})`;
                modallbody.innerHTML += 
                `
                    <div class="lists__item">
                        <img src="img/${resulte[i].img}" alt="" class="lists__img">
                        <div class="lists__name">${resulte[i].name}</div>
                        <span class="lists__price">${resulte[i].newPrice}$</span>
                    </div>
                                 
                `;
          

       
            });
      
          
        });

        const catalogItem = document.querySelectorAll('.catalog__item');
        function btn(btnindex, classActive) {
            btnindex.addEventListener('click', () => {
                catalogItem.forEach(item => {
                    if(!item.classList.contains(classActive)){
                        item.style.display = "none";
                    } else {
                        item.style.display = "block";
                    }
                })
            })
        } 
        btn(navBtn[0], 'catalog__item');
        btn(navBtn[1], 'red');
        btn(navBtn[2], 'rose');
        btn(navBtn[3], 'white');
    };






    const bntClient = document.querySelectorAll('.ClientReview__nav div');
    const ClientReviewItem = document.querySelectorAll('.ClientReview__item');
    
        function hideItemClient() {
            ClientReviewItem.forEach(item => {
                item.style.display = "none";
            })
            bntClient.forEach(item => {
                item.classList.remove('spanactive');
            })
        }




        function  showIndexItem(index = 0) {
            ClientReviewItem[index].style.display = "flex";
            bntClient[index].classList.add('spanactive')
        }



        hideItemClient();
        showIndexItem();



        bntClient.forEach((item, index) => {
            item.addEventListener('click', () => {
                hideItemClient();
                showIndexItem(index);
            })
        })






        const wrapperSlider = document.querySelector('.slider__wrapper');
        const sliderItems = document.querySelectorAll('.slider__item');
        const btnNextSlide = document.querySelector('.slider__next');
        const btnPrevSlide = document.querySelector('.slider__prev');
        let WidethSlide = 0;
        let indexSlide = 0;

        if(indexSlide <= 0){
            btnPrevSlide.style.display ="none";
        }  else {
            btnPrevSlide.style.display ="block";
        }

            btnNextSlide.addEventListener('click', () => {
                WidethSlide +=sliderItems[0].clientWidth;
                wrapperSlider.style.cssText = `transform: translateX(-${WidethSlide}px);  transition: 0.5s all;`;
                indexSlide++;
                if(indexSlide == sliderItems.length - 1){
                    btnNextSlide.style.display ="none";
                }  else {
                    btnNextSlide.style.display ="block";
                } 
                
                if(indexSlide <= 0){
                    btnPrevSlide.style.display ="none";
                }  else {
                    btnPrevSlide.style.display ="block";
                } 

                        
            })
     

            btnPrevSlide.addEventListener('click', () => {
                WidethSlide -= sliderItems[0].clientWidth;
                wrapperSlider.style.cssText = `transform: translateX(-${WidethSlide}px);  transition: 0.5s all;`;
                indexSlide--;
                if(indexSlide == sliderItems.length - 1){
                    btnNextSlide.style.display ="none";
                }  else {
                    btnNextSlide.style.display ="block";
                } 

                if(indexSlide <= 0){
                    btnPrevSlide.style.display ="none";
                }  else {
                    btnPrevSlide.style.display ="block";
                }          
            })









    










    




 











   
  
   
  