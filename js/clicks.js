 let linkBtn = document.getElementsByClassName('categories__link');
 let arrows = document.getElementsByClassName('categories__arrow');
 let linksArray = Array.from(linkBtn);
 let arrowsArray = Array.from(arrows);

   for(let aydai = 0; aydai < 3; aydai++) {
       console.log('Интерация номер', aydai)
       linksArray[aydai].addEventListener('click', 
       function (EveryAidai) {
           EveryAidai.preventDefault()
           arrowsArray[aydai].classList.toggle('is-active')
           arrowsArray[aydai].classList.toggle('is-backward')
       })
   }
   