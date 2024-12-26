// Violation
class WiredMouse { }
class WirelessMouse { }
class WirelessKeyboard { }
class WiredKeyboard { }

interface Keyboard {
  wiredKeyboard: WiredKeyboard
  wirelessKeyboard: WirelessKeyboard
}

interface Mouse {
  wiredMouse: WiredMouse
  wirelessMouse: WirelessMouse
}

class MacBook {
  private keyboard: WiredKeyboard
  private mouse: WiredMouse

  constructor() {
    this.keyboard = new WiredKeyboard()
    this.mouse = new WiredMouse()
  }
}

// Resolution
class _MacBook {
  private keyboard: Keyboard
  private mouse: Mouse

  constructor(keyboard: Keyboard, mouse: Mouse) {
    this.keyboard = keyboard
    this.mouse = mouse
  }
}