function countdown() {
  countdownSession.lengthSeconds--;
  if (countdownSession.lengthSeconds > 0) {
    updateTimer(countdownSession.lengthSeconds / 60);
  } else {
    finishRound();
  }
}

function finishRound() {
  clearInterval(timer);
  if (countdownSession.type === 'work') {
    countdownSession.count++;
    console.log(countdownSession.count);
    
    countdownSession.type = 'break';
  } else {
    countdownSession.type = 'work';
  }
  if (countdownSession.count === 4) {
    console.log('finish');
    updateTimer(longBreakMins);
    countdownSession.count = 0;
    countdownSession.type = 'long-break';
  }
  setSession(countdownSession.type);
  countdownSession.running = false;
  document.querySelector('#sound').play();
}

function playPause() {
  if (!countdownSession.running) {
    timer = setInterval(countdown, 1000);
  } else {
    clearInterval(timer);
  }
  countdownSession.running = !countdownSession.running;
}

function stop() {
  if (countdownSession.type === 'work') {
    updateTimer(workMins);
  } else if (countdownSession.type === 'break') {
    updateTimer(breakMins);
  } else {
    updateTimer(longBreakMins);
  }
  countdownSession.running = false;
  clearInterval(timer);
}

function changeSetpointValue(value, setpoint) { 
  const setpointValue = document.querySelector(`.setpoint_${setpoint}`);
  if (setpointValue.textContent === '0'  && value === -1) {
    return;
  } else {
    setpointValue.textContent = +setpointValue.textContent + value;
  }
  if (setpoint === 'work') {
    workMins += value;
  } else if (setpoint === 'break') {
    breakMins += value;
  } else {
    longBreakMins += value;
  }
}

/* TIMER */

function updateTimer(timeMins) {
  timeSecs = timeMins * 60;
  const countdownTimer = document.querySelector('.countdown_timer');
  countdownSession.lengthSeconds = timeSecs;
  countdownTimer.textContent = Math.floor(timeSecs/60) + ':' + ('0' + timeSecs%60).slice(-2);
}

function setSession(session = 'work') {
  let value;
  if (session === 'work') {
    document.getElementById('work_button').classList.add('selected');
    document.getElementById('break_button').classList.remove('selected');
    document.getElementById('long-break_button').classList.remove('selected');
    value = workMins;
  } else if (session === 'break') {
    document.getElementById('work_button').classList.remove('selected');
    document.getElementById('break_button').classList.add('selected');
    document.getElementById('long-break_button').classList.remove('selected');
    value = breakMins;
  } else {
    document.getElementById('work_button').classList.remove('selected');
    document.getElementById('break_button').classList.remove('selected');
    document.getElementById('long-break_button').classList.add('selected');
    value = longBreakMins;
  }
  countdownSession.type = session;
  document.querySelector('.countdown_label').textContent = session;
  updateTimer(value);
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
      stop();
      break;
   }
}

/* BUTTONS LISTENER */
const buttons = document.querySelectorAll('button');
buttons.forEach(btn => btn.addEventListener('click', startActions));

/* GLOBAL VARIABLES */
let workMins = 25;
let breakMins = 5;
let longBreakMins = 30;
let timer;
const countdownSession = {
  type: 'work',
  lengthSeconds: 1500,
  running: false,
  count: 0
}
