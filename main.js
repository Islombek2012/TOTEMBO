const bars = document.querySelector('.bars');
const resNav = document.querySelector('.menu');
const heart1 = document.querySelector('.heart1')
const heart2 = document.querySelector('.heart2')
bars.addEventListener('click', ()=>{
      resNav.classList.toggle('active')
      bars.classList.toggle('active')
})
