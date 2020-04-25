
function countdown() {
  timeRemaining--;
  if (timeRemaining > 0) {
    console.log(timeRemaining);
  } else {
    console.log('finished');
    clearInterval(timer);
  }
}

function playPause() {
  if (play) {
    timer = setInterval(countdown, 1000);
  } else {
    clearInterval(timer);
  }
  
  play = !play; 
}

function stop() {
  //resets the timer variables
  timeRemaining = time*60;
  play = true;
  // clearInterval timer
  clearInterval(timer);
  // update display and labels
}

function setSession() {
  // sets work or break depending on what user clicks
}

function changeSetpointValue(value, setpoint) {
    const setpointValue = document.querySelector(`.setpoint_${setpoint}`);

    if (setpointValue.textContent === '0') {
        return;
    } else {
        setpointValue.textContent = +setpointValue.textContent + value;
    }
}

const playPauseBtn = document.querySelector('.play-pause');
playPauseBtn.addEventListener('click', playPause);
const stopBtn = document.querySelector('.stop');
stopBtn.addEventListener('click', stop);

const sessionSetpoint = document.querySelector('.setpoint_session');
const breakSetpoint = document.querySelector('.setpoint_break');

const sessionBtn = document.querySelector('.session_button');
const breakBtn = document.querySelector('.break_button');
sessionBtn.addEventListener('click', () => {
    sessionBtn.classList.add('selected');
    breakBtn.classList.remove('selected');
});
breakBtn.addEventListener('click', () => {
    breakBtn.classList.add('selected');
    sessionBtn.classList.remove('selected');
});

const increaseSessionBtn = document.querySelector('.increase_session');
const decreaseSessionBtn = document.querySelector('.decrease_session');
const increaseBreakBtn = document.querySelector('.increase_break');
const decreaseBreakBtn = document.querySelector('.decrease_break');

increaseSessionBtn.addEventListener('click', () => {changeSetpointValue(1, 'session')});
decreaseSessionBtn.addEventListener('click', () => {changeSetpointValue(-1, 'session')});
increaseBreakBtn.addEventListener('click', () => {
  changeSetpointValue(1, 'break');
});
decreaseBreakBtn.addEventListener('click', () => {
  changeSetpointValue(-1, 'break');
});


const sessionValue = +sessionSetpoint.textContent;
const breakValue = +breakSetpoint.textContent;

let time = sessionValue;
let timeRemaining = time*60;
let play = true;
let timer;
