const menu = document.querySelector('.main__menu')
const menuBtn = document.querySelector('.menu__burger')

const body = document.body

if (menu && menuBtn) {
    menuBtn.addEventListener('click', () =>{
        menu.classList.toggle('active')
        menuBtn.classList.toggle('active')
        body.classList.toggle('lock')
    })

    menu.addEventListener('click', e => {
        if (e.target.classList.contains('main__menu')) {
            menu.classList.remove('active')
            menuBtn.classList.remove('active')
            body.classList.remove('lock')
        }
    })

    menu.querySelectorAll('.menu__link').forEach(link => {
        link.addEventListener('click', ()=> {
            menu.classList.remove('active')
            menuBtn.classList.remove('active')
            body.classList.remove('lock')
        })
    })
}

// -------------------

const anchors = document.querySelectorAll('a[href*="#"]');
anchors.forEach(anchor => {
    anchor.addEventListener('click', event => {
        event.preventDefault();

        const blockId = anchor.getAttribute('href').substring(1)

        document.getElementById(blockId).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
})