btn = document.querySelector('.header__button');

btn.addEventListener('click', function (){
  alert('пока рано нажимать...')
})

$('.main__slider').slick({
  infinite: true,
  adaptiveHeight: true,
  centerMode: false,
  dots: true,
})

//Стилизация точек слайдера, на простом css нее работает почему-то

document.querySelectorAll('.main__slider .slick-dots li').forEach((el) => {
  el.style.display = 'flex'
  el.style.width = '100%'
})

tooltip = document.querySelectorAll('.tooltip')

tooltip.forEach(function (el) {
  el.addEventListener('click', function () {
    this.querySelector('.tooltip__text').classList.toggle('active-tooltip-text')
  }
  )
}
)
