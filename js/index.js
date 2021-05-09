'use strict'

let form = document.querySelector('.order-form__form')
form.addEventListener('submit', formSend)
let input_tel = form.querySelector('input[type=tel')
input_tel.addEventListener("input", mask, false);
input_tel.addEventListener("focus", mask, false);
input_tel.addEventListener("blur", mask, false);

  async function formSend(e) {
    e.preventDefault();
    let error = formValidate(form);
    let formData = new FormData(form)
    if (error === 0) {
      form.classList.add('_sending')
      let response = await fetch('sendmail.php',
        {
          method: 'POST',
          body: formData,
        })
      if (response.ok) {
        let result = await response.json()
        Swal.fire(`Спасибо за заявку, ${result.message}`)
        form.reset()
        form.classList.remove('_sending')
      } else {
        Swal.fire(`${result.message}, к сожалению, заявка не может быть отправлена`)
        form.classList.remove('_sending')
      }
    }
  }
  
  function formValidate(form) {
    let error = 0
    let formReq = form.querySelectorAll('._req')
  
    for (let input of formReq) {
      formRemoveError(input)
      if (!input.value) {
        formAddError(input)
        error++
      }
      
    }
    return error
}

//Функции валидации - маски номера телефона

function setCursorPosition(pos, elem) {
      elem.focus();
      if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
      else if (elem.createTextRange) {
          var range = elem.createTextRange();
          range.collapse(true);
          range.moveEnd("character", pos);
          range.moveStart("character", pos);
          range.select()
      }
  }
   
  function mask(event) {
      var matrix = "+7 (___) ___ ____",
          i = 0,
          def = matrix.replace(/\D/g, ""),
          val = this.value.replace(/\D/g, "");
      if (def.length >= val.length) val = def;
      this.value = matrix.replace(/./g, function(a) {
          return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
      });
      if (event.type == "blur") {
          if (this.value.length == 2) this.value = ""
      } else setCursorPosition(this.value.length, this)
  };
  
  function formAddError(input) {
    input.classList.add('_error')
  }
  
  function formRemoveError(input) {
    input.classList.remove('_error')
  }


  document.querySelectorAll('.button:not(.order-form__button)').forEach(
    function (button) {
      button.addEventListener('click', sweet)
    })

  function sweet() {
    Swal.fire({
      didOpen: () => {
        form = document.querySelector('.swal2-popup .order-form__form')
        form.addEventListener('submit', formSend)
        input_tel = form.querySelector('input[type=tel')
        input_tel.addEventListener("input", mask, false);
        input_tel.addEventListener("focus", mask, false);
        input_tel.addEventListener("blur", mask, false);
      },
      title: false,
      showCloseButton: true,
      showConfirmButton: false,
      imageUrl: './img/icons/cleaningIconBlack.png',
      html:
        `<form action="#" class="order-form__form">` +
        `<div class="order-form__title title">Заявка на расчет стоимости</div>` +
        `<div class="order-form__inputs">` +
        `<input type="text" name="name" placeholder="Ваше имя"  class="order-form__name _req">` +
        `<input type="tel" name="number" placeholder="Ваш номер телефона" class="order-form__number _req">` +
        `</div>` +
        `<button class="order-form__button button"><span>Заказать</span></button>` +
        `</form>`,
      allowOutsideClick: () => !Swal.isLoading(),
      didDestroy: () => {
        form = document.querySelector('.order-form__form')
      }
    })
  }

  const slider = new Swiper('.slider', {
    loop: true,
    centeredSlides: true,
  })

  slider.on('slideChange', function () {
    let room = document.querySelector('.rooms .active');
    room.classList.remove('active');
    room = document.querySelector(`.rooms`).children.item(slider.realIndex);
    room.classList.toggle('active')
  })


  let rooms = document.querySelectorAll('.rooms .room')
  rooms.forEach((room) => {
    room.addEventListener('click', function () {
      let arr = Array.prototype.slice.call(rooms)
      let index = arr.indexOf(room)
      let activeRoom = document.querySelector('.rooms .active');
      activeRoom.classList.remove('active');
      rooms.item(index).classList.toggle('active')
      slider.slideTo(index + 1)
    })
  })

  let tooltip = document.querySelectorAll('.tooltip')

  tooltip.forEach(function (el) {
    el.addEventListener('click', function () {
      this.querySelector('.tooltip__text').classList.toggle('active-tooltip-text')
    }
    )
  }
  )

  const reviews = new Swiper('.reviews__slider',
    {
      init: false,
      loop: true,
      centeredSlides: true,
      effect: 'coverflow',
      slidesPerView: 'auto',
      navigation: {
        nextEl: '.reviews__next',
        prevEl: '.reviews__prev'
      },
      coverflowEffect: {
        rotate: 0,
        stretch: "75%",
        depth: 500,
        slideShadows: false,
      },
    }
  );

  reviews.on('init', function () {
    let visibleSlides = [
      reviews.slides[reviews.activeIndex - 2],
      reviews.slides[reviews.activeIndex - 1],
      reviews.slides[reviews.activeIndex],
      reviews.slides[reviews.activeIndex + 1],
      reviews.slides[reviews.activeIndex + 2]
    ]
    visibleSlides.forEach((e) => { e.style.visibility = 'visible' });
    checkArrows()
  })

  reviews.on('slideChange', function () {
    reviews.slides.forEach((e) => { e.style.visibility = 'hidden' })
    let visibleSlides = [
      reviews.slides[reviews.activeIndex - 2],
      reviews.slides[reviews.activeIndex - 1],
      reviews.slides[reviews.activeIndex],
      reviews.slides[reviews.activeIndex + 1],
      reviews.slides[reviews.activeIndex + 2]
    ]
    visibleSlides.forEach((e) => {
      e.style.visibility = 'visible'
    })
  })

  reviews.on('resize', checkArrows)

  reviews.init()

  function checkArrows() {
    let nextButton = document.querySelector('.swiper-button-next.reviews__next')
    let prevButton = document.querySelector('.swiper-button-prev.reviews__prev')
    if (window.innerWidth <= 960) {
      nextButton.style.display = 'none';
      prevButton.style.display = 'none';
    }
    else {
      nextButton.style.display = 'flex';
      prevButton.style.display = 'flex';
    }
  }
