// Cache DOM elements
const domElements = {
    next: document.querySelector(".slideshow__button--next"),
    previous: document.querySelector(".slideshow__button--prev"),
    slideshow: document.querySelector(".slideshow"),
    items: document.querySelectorAll(".slideshow__item"),
    infoCounter: document.querySelector(".info__counter"),
    bullets: document.querySelectorAll(".bullet-points__bullet"),
  };
  
  // Destructure domElements
  const { next, previous, slideshow, items, infoCounter, bullets } = domElements;
  
  // Initialize slideshow index
  let currentIndex = 0;
  
  // Update slideshow position, counter and bullet points
  const updateSlide = () => {
    // Update slideshow position
    const slideWidth = items[0].clientWidth;
    slideshow.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  
    // Update counter
    infoCounter.textContent = `Image ${currentIndex + 1} of ${items.length}`;
  
    // Update bullet points
    bullets.forEach((bullet, index) => {
      bullet.classList.toggle("bullet-points__bullet-active", index === currentIndex);
    });
  };
  
  // Next and previous button event listeners
  const onNext = () => {
    currentIndex = (currentIndex + 1) % items.length;
    console.log((currentIndex + 1) % items.length) 
    updateSlide();
  };
  
  const onPrevious = () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateSlide();
  };
  
  // Initialize slideshow
  window.addEventListener("DOMContentLoaded", () => {
    next.addEventListener("click", onNext);
    previous.addEventListener("click", onPrevious);
});
