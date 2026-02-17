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
  console.log(scroll)
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


imgs.forEach(img => {
  img.addEventListener('click', (e) => {
    currentImg = img;
    prevImg = img.parentElement.previousElementSibling?.querySelector('img') || null
    nextImg = img.parentElement.nextElementSibling?.querySelector('img') || null
    console.log(prevImg, nextImg)
    let src = img.src;
    let visuImg = visu.querySelector('img')
    visuImg.src = src
    visu.classList.add('show')
  })
})

