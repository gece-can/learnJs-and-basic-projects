const body = document.querySelector('body')
const button = document.querySelector('button')

const red = document.querySelector('.red');
const brown = document.querySelector('.brown');
const blue = document.querySelector('.blue');
const chartreuse = document.querySelector('.chartreuse');
const crimson = document.querySelector('.crimson');
const darkkhaki = document.querySelector('.darkkhaki');
const lightslategray = document.querySelector('.lightslategray');
const green = document.querySelector('.green');
const turquoise = document.querySelector('.turquoise');
const tomato = document.querySelector('.tomato');

const colors = [
    'red', 
    'brown', 
    'blue', 
    'chartreuse', 
    'crimson', 
    'darkkhaki',
    'lightslategray',
    'green',
    'turquoise',
    'tomato'
]

sira = 0;

button.addEventListener('click', changeColor)


function changeColor (){
    /* const random = Math.floor(Math.random()* colors.length)
    body.style.backgroundColor=colors[random]
    console.log(random)  */

    if(sira == 10) sira = 0;
    const secilenRenk = colors[sira];
    body.style.backgroundColor=secilenRenk
    sira++;
}

red.addEventListener('click', () => {
    body.style.backgroundColor = 'red'
})

brown.addEventListener('click', () => {
    body.style.backgroundColor = 'brown'
})

blue.addEventListener('click', () => {
    body.style.backgroundColor = 'blue'
})

chartreuse.addEventListener('click', () => {
    body.style.backgroundColor = 'chartreuse'
})

crimson.addEventListener('click', () => {
    body.style.backgroundColor = 'crimson'
})

darkkhaki.addEventListener('click', () => {
    body.style.backgroundColor = 'darkkhaki'
})

lightslategray.addEventListener('click', () => {
    body.style.backgroundColor = 'lightslategray'
})

green.addEventListener('click', () => {
    body.style.backgroundColor = 'green'
})

turquoise.addEventListener('click', () => {
    body.style.backgroundColor = 'turquoise'
})

tomato.addEventListener('click', () => {
    body.style.backgroundColor = 'tomato'
})



    
        
        

    



