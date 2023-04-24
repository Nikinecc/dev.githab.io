// ДЛЯ БЛОКА СПОЙЛЕРОВ
document.querySelectorAll('.accordion').forEach((el) =>
    el.addEventListener('click', () => {
        let content = el.nextElementSibling;
        if (content.style.maxHeight) {
            document.querySelectorAll('.content').forEach((el) => el.style.maxHeight = null)
            document.querySelectorAll('.accord-img').forEach((row) => row.style.transform = 'rotate(0deg)')
            el.style.background = 'white'
            content.style.borderBottom = "none"
            el.style.borderBottom = "1px solid silver"
        } else {
            document.querySelectorAll('.content').forEach((el) => el.style.maxHeight = null)
            document.querySelectorAll('.accord-img').forEach((el) => el.style.transform = 'rotate(90deg)')
            content.style.maxHeight = content.scrollHeight + 'px'
            content.style.borderBottom = "1px solid silver"
            el.style.borderBottom = "none"
        }
    })
);
// БУРГЕР МЕНЮ
burg = document.querySelector('.burger');
nav = document.querySelector('.burg-menu');
check = false;
x = document.querySelector('.X');
if (!check) {
    burg.addEventListener('click', () => {
        nav.style.display = 'flex';
        x.style.display = 'block';
        burg.style.display = 'none';
        check = true;
    })
}
x.addEventListener('click', () => {
    nav.style.display = 'none';
    x.style.display = 'none';
    burg.style.display = 'block';
    check = false;
})
// Смотреть далее
row = document.querySelector('.unhid-btn');
unhid = document.querySelector('.proc-unhid-btn');
hid = document.querySelector('.hid-btn')
row.addEventListener('click', () => {
    unhid.style.display = 'block'
    row.style.display = 'none'
    hid.style.display = 'block'
})
hid.addEventListener('click', () => {
    unhid.style.display = 'none'
    row.style.display = 'block'
    hid.style.display = 'none'
})
// АНИМАЦИЯ ПРИ СКРОЛЕ
const animItems = document.querySelectorAll('._anim-items');
if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = -1.2;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }
            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
            } else {
                if(!animItem.classList.contains('_anim-no-hide')){
                    animItem.classList.remove('_active');       
                }
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
    setTimeout(() => {
        animOnScroll();
    }, 300);
}

