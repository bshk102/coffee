const sliderBtns = document.querySelectorAll('.about__beans img')
const slides = document.querySelectorAll('.about__slide')


sliderBtns.forEach((item, i) => item.addEventListener('click', () => {
    for (let j = 0; j < slides.length; j++) {
        slides[j].classList.remove('activeSlide')
        sliderBtns[j].src = 'icons/about_bean.png'
    }

    item.src = 'icons/about_bean_active.png'
    slides[i].classList.add('activeSlide')
}))