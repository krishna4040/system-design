// normal-design
// when child have same type of capabilities that are not common to parent
// there can be increase in duplicacy and non-scalability as num of child increases

class Vehicle {
  public drive() {
    // implementation of shared logic
    console.log('Vehicle is driving')
  }
}

class OffRoadVehicle {
  public drive() {
    console.log('Vehicle is driving special');
  }
}

class SportyVehicle {
  public drive() {
    console.log('Vehicle is driving special');
  }
}

// strategy design-pattern

interface DriveStrategy {
  drive: () => void;
}

class NormalDriveStrategy implements DriveStrategy {
  public drive() {
    console.log('Vehicle is driving');
  }
}

class SpecialDriveStrategy implements DriveStrategy {
  public drive() {
    console.log('Vehicle is driving special');
  }
}

class _Vehicle {
  private driveStrategy: DriveStrategy;

  constructor(driveStrategy: DriveStrategy = new NormalDriveStrategy()) {
    this.driveStrategy = driveStrategy;
  }

  public drive() {
    this.driveStrategy.drive();
  }
}

class _OffRoadVehicle extends _Vehicle {
  constructor() {
    super(new SpecialDriveStrategy());
  }
}

class PassengerVehicle extends _Vehicle {
  constructor() {
    super()
  }
}
