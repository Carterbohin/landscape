const navElement = document.querySelector('#theNav')
const btnElement = document.querySelector('#theButton')

btnElement.addEventListener('click', () => {
    btnElement.classList.toggle('open')
    navElement.classList.toggle('open')
});

const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    effect: 'cube',
    speed: 2000,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
//start auto play
    autoplay: {
        delay: 5000,
    },
})
  

