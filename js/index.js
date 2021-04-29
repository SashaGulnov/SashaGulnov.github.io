btn = document.querySelector('.header__button');

btn.addEventListener('click', function (){
  alert('пока рано хуй сосать...')
})

const slider = new Swiper ('.slider', {
  loop: true, 
  centeredSlides: true,
})

slider.on('slideChange', function(){
  room = document.querySelector('.rooms .active');
  room.classList.remove('active');
  room = document.querySelector(`.rooms`).children.item(slider.realIndex);
  room.classList.toggle('active')
})


let rooms = document.querySelectorAll('.rooms .room')
rooms.forEach((room)=>{
    room.addEventListener('click', function() {
      let arr = Array.prototype.slice.call(rooms)
      index = arr.indexOf(room)
      activeRoom = document.querySelector('.rooms .active');
      activeRoom.classList.remove('active');
      rooms.item(index).classList.toggle('active')
      slider.slideTo(index+1)
    })
  })

tooltip = document.querySelectorAll('.tooltip')

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
  navigation :{
    nextEl: '.reviews__next',
    prevEl: '.reviews__prev'
  },
  coverflowEffect : {
    rotate: 0,
    stretch: "75%",
    depth: 500,
    slideShadows:false,
    },
}
);

reviews.on('init', function(){
  let visibleSlides = [
      reviews.slides[reviews.activeIndex-2],
      reviews.slides[reviews.activeIndex-1],
      reviews.slides[reviews.activeIndex],
      reviews.slides[reviews.activeIndex+1],
      reviews.slides[reviews.activeIndex+2]
  ]
 visibleSlides.forEach((e)=>{e.style.visibility='visible'});
 checkArrows()
})

reviews.on('slideChange', function(){
  reviews.slides.forEach((e)=>{e.style.visibility='hidden'})
  let visibleSlides = [
      reviews.slides[reviews.activeIndex-2],
      reviews.slides[reviews.activeIndex-1],
      reviews.slides[reviews.activeIndex],
      reviews.slides[reviews.activeIndex+1],
      reviews.slides[reviews.activeIndex+2]
  ]
  visibleSlides.forEach((e)=>{
    e.style.visibility='visible'})
})

reviews.on('resize', checkArrows)

reviews.init()

function checkArrows() {
  let nextButton = document.querySelector('.swiper-button-next.reviews__next')
  let prevButton = document.querySelector('.swiper-button-prev.reviews__prev')
  if (window.innerWidth<=960) {
    nextButton.style.display = 'none';
    prevButton.style.display = 'none';
  }
  else {
    nextButton.style.display = 'flex';
    prevButton.style.display = 'flex';
  }
}