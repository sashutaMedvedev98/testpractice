window.onload = function() {
  let closePopUp = document.getElementsByClassName('catalog-popup__close');
  let images = document.querySelectorAll('.slider-img');
  let saleHeader = document.querySelectorAll('.sale-block__header');
  let saleBody = document.querySelectorAll('.sale-block__body');
  let buttonLeft = document.querySelector('.slider-button__left');
  let buttonRight = document.querySelector('.slider-button__right');
  let activeImage = "active";
  let slider = new Slider(images, activeImage);
  let listElement = document.querySelectorAll('.catalog-list__element');
  let popUp = document.getElementsByClassName('catalog-popup');


    for(let i = 0; i < listElement.length; i++) {
      listElement[i].addEventListener('click', function(){
        popUp[i].classList.add("activePopUp");
      })
    }

    for(let i = 0; i < closePopUp.length; i++) {
      closePopUp[i].addEventListener('click', function(){
        popUp[i].classList.remove("activePopUp");
      })
    }



  function Slider(images, activeImage) {
      this.images = images;
      let i = 0;
      this.prev = function () {
          this.images[i].classList.remove(activeImage);
          i--;

          if (i < 0) {
              i = this.images.length - 1;
          }

          this.images[i].classList.add(activeImage);
      }

      this.next = function () {
          this.images[i].classList.remove(activeImage);
          i++;

          if (i >= this.images.length) {
              i = 0;
          }

          this.images[i].classList.add(activeImage);
      }
  }

  buttonLeft.addEventListener('click', function(){
      slider.next();
  });

  buttonRight.addEventListener('click', function(){
      slider.prev();
  });

  saleHeader.forEach((item, i) => {
    item.addEventListener('click', function () {
      if(saleBody[i].classList == 'sale-block__body show'){
        saleBody[i].classList.remove('show');
        saleHeader[i].classList.remove('saleHeader');
      } else {
        saleBody[i].classList.add('show');
        saleHeader[i].classList.add('saleHeader');
      }
    })
  });
};
