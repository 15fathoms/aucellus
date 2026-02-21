// Initialize Lenis
const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);




let header = document.querySelector('header')
window.onscroll = (e) => {
  let scroll = window.scrollY
  if (scroll > 200) {
    header.classList.add('active')
  }
  else {
    header.classList.remove('active')
  }
}

let visu = document.querySelector('.visualizer')
let prev = document.querySelector('.prev')
let next = document.querySelector('.next')
let close = document.querySelector('.close')
let imgs = document.querySelectorAll('.gallery-item img')
let prevImg;
let nextImg;

let currentImg;

let fragment = document.createDocumentFragment()
imgs.forEach((img, index) => {
  let imgContainer = document.createElement('div')
  imgContainer.classList.add('visualizer-item', 'swiper-slide')
  let newImg = document.createElement('img')
  newImg.src = img.src
  imgContainer.appendChild(newImg)
  fragment.appendChild(imgContainer)
})

let track = visu.querySelector('.visualizer-wrapper')
track.appendChild(fragment)

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: false,
  centeredSlides: true,
  navigation: {
    nextEl: '.next',
    prevEl: '.prev',
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

visu.addEventListener('click', function (e) {
  if (e.target === prev && currentImg) {
    const previous = currentImg.parentElement.previousElementSibling?.querySelector('img')

    if (previous) {
      currentImg = previous
      this.querySelector('img').src = currentImg.src
    }
    else {
      currentImg = currentImg.parentElement.parentElement.lastElementChild.querySelector('img')
      this.querySelector('img').src = currentImg.src
    }
  }

  if (e.target === next && currentImg) {

    const following = currentImg.parentElement.nextElementSibling?.querySelector('img')

    if (following) {
      currentImg = following
      this.querySelector('img').src = currentImg.src
    }
    else {
      currentImg = currentImg.parentElement.parentElement.firstElementChild.querySelector('img')
      this.querySelector('img').src = currentImg.src
    }
  }

  if (e.target === close) {
    this.classList.remove('show')
  }
})


imgs.forEach((img, index) => {
  img.addEventListener('click', (e) => {
    visu.classList.add('show')
    swiper.slideTo(index)
  })
})

let toggleNav = document.querySelector('.toggleNav')
let nav = document.querySelector('nav')

toggleNav.addEventListener('click', function(e) {
  this.classList.toggle('active')
  nav.classList.toggle('active')
})






