lista_de_texto: List[str] = []

def on_button_pressed_a():
    basic.show_leds("""
        . . # . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        """)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_gesture_shake():
    global lista_de_texto
    lista_de_texto = ["a", "b", "c"]
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def on_button_pressed_ab():
    basic.show_leds("""
        # . . . #
        . # . # .
        . . # . .
        # # . # #
        # # . # #
        """)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    basic.show_leds("""
        . # # # .
        . # # # .
        . # # # .
        . # # # .
        . # # # .
        """)
input.on_button_pressed(Button.B, on_button_pressed_b)
