const menu = document.getElementsByClassName('menu')[0]
const a2 = document.getElementsByClassName('a2')[0]

menu.addEventListener('click', () => {
    a2.classList.toggle('active')
})