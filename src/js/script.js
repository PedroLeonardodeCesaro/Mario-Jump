

const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
const score = document.querySelector(".score--value")
const finalScore = document.querySelector(".final-score > span")
const menu = document.querySelector(".menu-screen")
const buttonPlay = document.querySelector(".btn-play")

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump')
    }, 500)
}

const loop = setInterval(() => {

    const pipePossition = pipe.offsetLeft;
    const marioPossition = parseFloat(window.getComputedStyle(mario).bottom.replace("px"));
    const cloudsPossition = parseFloat(window.getComputedStyle(clouds).right.replace("px"));

    if(pipePossition <= 120 && pipePossition > 0 && marioPossition < 80 ) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePossition}px`;
        
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPossition}px`;
        
        mario.src = './src/images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        clouds.style.animation = 'none';
        clouds.style.right = `${cloudsPossition}px`

        buttonPlay.style.visibility = 'visible'
    
        clearInterval(loop);
    }
    
}, 10)

document.addEventListener('keydown',({key}) => {
    if(key == "Spacebar" || "ArrowUp" || "W"){
        jump()
    }
})

buttonPlay.addEventListener('click', () => {
    
})
