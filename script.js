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

let imgs = document.querySelectorAll('.gallery-item img')

visu.addEventListener('click', (e)=> {
  if(e.target === visu.querySelector('img')){
    return
  }
  visu.classList.remove('show')
})

imgs.forEach(img => {
  img.addEventListener('click', (e)=> {
    let src = img.src;
    let visuImg = visu.querySelector('img')
    visuImg.src = src
    visu.classList.add('show')
  })
})

