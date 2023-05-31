const body = document.body
const slides = document.querySelectorAll('.slide')
const letfBtn = document.querySelector('#left')
const rightBtn = document.querySelector('#right')

let activeSlide = 0

letfBtn.addEventListener('click', () => {
    activeSlide -- 
    if(activeSlide < 0) {
        activeSlide = slides.length - 1
    }

    setActiveSlide()
    setBgToBody()
})

rightBtn.addEventListener('click', () => {
    activeSlide ++
    if(activeSlide > slides.length - 1) {
        activeSlide = 0
    }

    setActiveSlide()
    setBgToBody()
})
setBgToBody()

function setBgToBody () {
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

function setActiveSlide () {
    slides.forEach(alide => alide.classList.remove('active'))

    slides[activeSlide].classList.add('active')
}