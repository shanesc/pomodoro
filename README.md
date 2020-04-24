# Pomodoro Project

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