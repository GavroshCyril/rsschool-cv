const anchors = document.querySelectorAll('a.nav-link')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href')
    
    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}


const burgerMenu = document.querySelector('.burger-menu');
const headerNav = document.querySelector('.header-nav');
const closeBtn = document.querySelector('.close-btn');

burgerMenu.addEventListener('click', () => {
  headerNav.classList.add('active');
  closeBtn.classList.remove('hide');
});

closeBtn.addEventListener('click', () => {
    headerNav.classList.remove('active');
    closeBtn.classList.add('hide');
})