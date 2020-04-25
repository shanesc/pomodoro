
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
  // grab session or break node, increase or decrease value
  if (setpoint === 'session') {
    sessionSetpoint.textContent += value;
  } else {
    breakSetpoint.textContent += value;
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

const increaseBtn = document.querySelectorAll('.increase');
const decreaseBtn = document.querySelectorAll('.decrease');

const sessionValue = +sessionSetpoint.textContent;
const breakValue = +breakSetpoint.textContent;

let time = sessionValue;
let timeRemaining = time*60;
let play = true;
let timer;
