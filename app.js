let time = .1;
let elapsedTime = 0;
let play = true;
let timer;

function countdown() {
    const convertedTime = time*60;

    if (elapsedTime >= convertedTime) {
        console.log('finished');
        clearInterval(timer);
    } else {
        console.log(elapsedTime);
        elapsedTime++;
    }
}

function playPause() {
    if (play) {
        timer = setInterval(countdown, 1000);
    } else {
        clearInterval(timer);
    }
   
    play = play ? false : true; 
}

function stop() {
    //resets the timers
}

const playPauseBtn = document.querySelector('.play-pause');
playPauseBtn.addEventListener('click', playPause);
const stopBtn = document.querySelector('.stop');
stopBtn.addEventListener('click', stop);