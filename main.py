def on_gesture_tilt_right():
    global x
    led.unplot(x, y)
    x += 1
    basic.pause(200)
    led.plot(x, y)
input.on_gesture(Gesture.TILT_RIGHT, on_gesture_tilt_right)

def on_gesture_tilt_left():
    global x
    led.unplot(x, y)
    x += -1
    basic.pause(200)
    led.plot(x, y)
input.on_gesture(Gesture.TILT_LEFT, on_gesture_tilt_left)

y = 0
x = 0
x = 2
y = 2
led.plot(x, y)

def on_forever():
    if input.rotation(Rotation.PITCH) == 0:
        pass
basic.forever(on_forever)
