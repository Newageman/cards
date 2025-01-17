function slidesPlugin(activeSlide = 0) {
  const slides = document.querySelectorAll('.slide')

  slides[activeSlide].classList.add('active')

  clearActiveClasses = () => {
    slides.forEach((slide) => {
      slide.classList.remove('active')
    })
  }

  for (const slide of slides) {
    slide.addEventListener('click', () => {
      clearActiveClasses()
      slide.classList.add('active')
    })
  }
}

slidesPlugin(1)
