
function countdown() {
  timeRemaining--;
  if (timeRemaining > 0) {
      updateTimer(timeRemaining);
  } else {
    console.log('finished');
    clearInterval(timer);
  }
}

function playPause() {
  timeRemaining = getTime();
  if (play) {
    timer = setInterval(countdown, 1000);
  } else {
    clearInterval(timer);
  }
  
  play = !play; 
}

function stop() {
  //resets the timer variables
    timeRemaining = +workSetpoint.textContent*60;
    play = true;
  // clearInterval timer
  clearInterval(timer);
  updateTimer(timeRemaining);
  // update display and labels
}

function setSession() {
  // sets work or break depending on what user clicks
}

function changeSetpointValue(value, setpoint) {
    const setpointValue = document.querySelector(`.setpoint_${setpoint}`);

    if (setpointValue.textContent === '0'  && value === -1) {
        return;
    } else {
        setpointValue.textContent = +setpointValue.textContent + value;
    }
}

/* TIMER */
const countdownTimer = document.querySelector('.countdown_timer');

function getTime() {
  let timeText = countdownTimer.textContent;
  let textArr = timeText.split(':');
  return textArr[0]*60 + Number(textArr[1]);
}

function updateTimer(timeRemaining) {
    time = Math.floor(timeRemaining/60) + ':' + ('0' + timeRemaining%60).slice(-2);
    countdownTimer.textContent = time;
}

/* BUTTONS LISTENERS */

const playPauseBtn = document.querySelector('.play-pause');
playPauseBtn.addEventListener('click', playPause);
const stopBtn = document.querySelector('.stop');
stopBtn.addEventListener('click', stop);

const workSetpoint = document.querySelector('.setpoint_work');
const breakSetpoint = document.querySelector('.setpoint_break');

const workBtn = document.querySelector('.work_button');
const breakBtn = document.querySelector('.break_button');
let selectedSession = 'work';
workBtn.addEventListener('click', () => {
    const workValue = +workSetpoint.textContent;
    workBtn.classList.add('selected');
    breakBtn.classList.remove('selected');
    selectedSession = 'work';
    document.querySelector('.countdown_label').textContent = 'work';
    countdownTimer.textContent = workValue + ':00';
});
breakBtn.addEventListener('click', () => {
    const breakValue = +breakSetpoint.textContent;
    breakBtn.classList.add('selected');
    workBtn.classList.remove('selected');
    selectedSession = 'break';
    document.querySelector('.countdown_label').textContent = 'break';
    countdownTimer.textContent = breakValue + ':00';
});

/* INCREASE/DECREASE SETPOINTS */
const increaseWorkBtn = document.querySelector('.increase_work');
const decreaseWorkBtn = document.querySelector('.decrease_work');
const increaseBreakBtn = document.querySelector('.increase_break');
const decreaseBreakBtn = document.querySelector('.decrease_break');

increaseWorkBtn.addEventListener('click', () => {changeSetpointValue(1, 'work')});
decreaseWorkBtn.addEventListener('click', () => {changeSetpointValue(-1, 'work')});
increaseBreakBtn.addEventListener('click', () => {
  changeSetpointValue(1, 'break');
});
decreaseBreakBtn.addEventListener('click', () => {
  changeSetpointValue(-1, 'break');
});


let timeRemaining = getTime();
let play = true;
let timer;