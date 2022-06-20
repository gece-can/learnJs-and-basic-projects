const leftArr = document.getElementById('leftArr')
const rightArr = document.getElementById('rightArr')
const textDiv = document.querySelector('.texts')
let index = 0;

const texts = [
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, ipsam.',
    'Lorem sit amet consectetur adipisicing elit. Tempora, ipsam.',
    'Lorem dolor sit amet consectetur adipisicing elit. Tempora, ipsam.'
]

gsap.from('.texts', .8, {y: '-100%'})

function slideRight() {
    if(index == texts.length-1) index = 0;
    else index++;
    gsap.to('.images', .3, {x: `${-index * 100}%`})
    textDiv.textContent = texts[index]
    gsap.from(textDiv, .5, {y: -20, opacity: 0, ease: 'power3.out'})

}

function slideLeft() {
    if(index == 0) index = texts.length-1;
    else index--;
    gsap.to('.images', .3, {x: `${-index * 100}%`})
    textDiv.textContent = texts[index]
    gsap.from(textDiv, .5, {y: -20, opacity: 0, ease: 'power3.out'})

}

leftArr.addEventListener('click', slideLeft)
rightArr.addEventListener('click', slideRight )