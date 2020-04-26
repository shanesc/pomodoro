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
  initialTime = +workSetpoint.textContent*60;
  play = true;
  clearInterval(timer);
  updateTimer(initialTime);
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
function getTime() {
  let timeText = countdownTimer.textContent;
  let textArr = timeText.split(':');
  return textArr[0]*60 + Number(textArr[1]);
}

function updateTimer(timeRemaining) {
  time = Math.floor(timeRemaining/60) + ':' + ('0' + timeRemaining%60).slice(-2);
  countdownTimer.textContent = time;
}

function setSession(session = 'work') {
  const value = session === 'work' ?
    +workSetpoint.textContent : +breakSetpoint.textContent;
  if (session === 'work') {
    document.getElementById('work_button').classList.add('selected');
    document.getElementById('break_button').classList.remove('selected');
  } else {
    document.getElementById('work_button').classList.remove('selected');
    document.getElementById('break_button').classList.add('selected');
  }
  selectedSession = session;
  document.querySelector('.countdown_label').textContent = session;
  countdownTimer.textContent = value + ':00';
}

/* HELPER FUNCTION */
function startActions(e) {
  switch (e.target.id) {
    case 'play_pause':
      playPause();
      break;
    case 'stop':
      stop();
      break;
    case 'increase':
      i = e.target.parentNode.parentNode.id;
      changeSetpointValue(1, i);
      setSession(i);
      break;
    case 'decrease':
      i = e.target.parentNode.parentNode.id;
      changeSetpointValue(-1, i);
      setSession(i);
      break;
    default:
      setSession(e.target.parentNode.id);
      break;
   }
}

/* BUTTONS LISTENER */
const buttons = document.querySelectorAll('button');
buttons.forEach(btn => btn.addEventListener('click', startActions));

/* GLOBAL VARIABLES */
const countdownTimer = document.querySelector('.countdown_timer');
const workSetpoint = document.querySelector('.setpoint_work');
const breakSetpoint = document.querySelector('.setpoint_break');
let selectedSession = 'work';
let timeRemaining = getTime();
let play = true;
let timer;