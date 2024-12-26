interface Bike {
  tunOnEngine: () => void
  accelerate: () => void
}

class MotorCycle implements Bike {
  private isEngineOn: boolean
  private speed: number

  public tunOnEngine(): void {
    this.isEngineOn = true
  }
  public accelerate(): void {
    this.speed = this.speed + 10
  }
}

class Bicycle implements Bike {
  private isEngineOn: boolean
  private speed: number

  public tunOnEngine(): void {
    throw new Error("Bicycle does not have engine")
  }
  public accelerate(): void {
    this.speed = this.speed + 10
  }
}

// Bicycle reduces capability of base class / interface class
// Bicycle cannot be used in place of Bike
// Motorcycle can be used in place of Bike