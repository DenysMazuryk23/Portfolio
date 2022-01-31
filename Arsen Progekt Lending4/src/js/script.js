


const loadForm = document.querySelector('.content__form__load');
const input = document.querySelector('.content__input');
const InputBtn = document.querySelector('.content__btn');
const blockError = document.querySelector('.content__form__eroor');
let promoTitle = document.querySelector('.promo__title')
let orderlocal = "";

const req = /:/ig;
const req1 = /,/ig;
const req2 = /\./ig;











InputBtn.addEventListener('click', () => {
    orderlocal = input.value;
    localStorage.setItem(1, (orderlocal));

    if(input.value !== "" ){
        loadForm.style.display = "flex";
    } else {
        blockError.style.display = "block";
        blockError.textContent = "Укажите кадастровый номер или адрес объекта."
        

        setTimeout(() => {
            blockError.style.display = "none";   
        }, 3000);
    }

 

    setTimeout(() => {
        
        if(input.value !== "" && input.value.match(req) || input.value.match(req1)  || input.value.match(req2)  ){
            window.location.href = './order.html';
            
        } else {
            loadForm.style.display = "none";
            blockError.style.display = "block";
            blockError.textContent = "Укажите кадастровый номер или адрес объекта."
            
    
            setTimeout(() => {
                blockError.style.display = "none";   
            }, 3000);
        }
    }, 5000);

     
  
});







// input form 







const linkPhotoImg = document.querySelector('.exempels__link--img');
const linkPhoto = document.querySelector('.exempels__link');



linkPhotoImg.addEventListener('click', (event) => {
    event.preventDefault();
    window.open('./img/2_5467712750442517611.pdf');
    
});


linkPhoto.addEventListener('click', (event) => {
    event.preventDefault();
    window.open('./img/2_5467712750442517611.pdf');
    
});







