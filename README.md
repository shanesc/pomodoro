# Pomodoro Project

This is a project assignment from the Web Dev 101 curriculum at [The Odin Project](https://www.theodinproject.com/).

The [assignment outline](https://www.theodinproject.com/lessons/pairing-project#assignment) is to create a Pomodoro Timer, which is a tool that can be used with the [Pomodoro Technique](https://en.wikipedia.org/wiki/Pomodoro_Technique) of time management.

This assignment is to be done in pairs, using pair programming during the entire development. The purpose of this is to learn how to pair program and see some of the benefits and obstacles that come along with it.

## Requirements

### Functions

1. Countdown
    - Counts down from set time to zero.
    - inputs (elapsed time)
2. Update timer display
    - Updates the timer display every second, indicates 'Session' or 'Break' in label.
    - Inputs (time, session/break)
    - Actions
        - Change DOM elements
            - Timer
            - Label
3. Pause/Play
    - Toggles between countdown running or pausing. When paused, it will not reset the timer.
    - Inputs (none)
    - Actions
        - Start the countdown fn (or stop), indicate that it is paused or playing.
4. Stop/Reset
    - Resets the countdown and stops the timer, sets it to new work session, resets labels and buttons.
    - Actions
        - Reset all variables (do we want to keep setpoint to what user set to?)
5. Adjust set times
    - Increases or decreases timer setpoints by +/- 1min
    - Inputs (session/break, plus/minus buttons)
    - Actions
        - Increases variable for timer setpoint