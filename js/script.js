const burger = document.querySelector('.burger');
const navList = document.querySelector('.navList');

burger.addEventListener('click', () => {
    navList.classList.toggle('navListOn');
})