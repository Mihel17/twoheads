const header = document.querySelector('.main-header')
const navBtn = header.querySelector('.main-nav__drop-btn')

const oppenDropNav = () => {
  header.classList.toggle('main-header--dropped')
}
navBtn.addEventListener('click', oppenDropNav)