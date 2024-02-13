import IElevator from "./IElevator";

class Elevator implements IElevator {
  constructor(
    minFloor = 0,
    maxFloor = 10,
    capacity = 5,
    secondsBetweenFloors = 2,
  ) {
    this.maxFloor = maxFloor;
    this.minFloor = minFloor;
    this.capacity = capacity;
    this.secondsBetweenFloors = secondsBetweenFloors;
  }

  private readonly floorIsOutOfRangeMessage = (floor: number) => {
    return `Floor is out of range. Min: ${this.minFloor}, New: ${floor}, Max: ${this.maxFloor}.`;
  };

  private _currentFloor = 0;
  readonly capacity: number;
  readonly secondsBetweenFloors: number;
  minFloor: number;
  maxFloor: number;

  private floorIsValid(floor: number) {
    return this.minFloor <= floor && floor <= this.maxFloor;
  }

  get currentFloor() {
    return this._currentFloor;
  }

  set currentFloor(newFloor: number) {
    if (!this.floorIsValid(newFloor)) {
      throw new Error(this.floorIsOutOfRangeMessage(newFloor));
    }
    this._currentFloor = newFloor;
  }

  private move(newFloor: number): Promise<number> {
    return new Promise((resolve, reject) => {
      if (!this.floorIsValid(newFloor)) {
        reject(new Error(this.floorIsOutOfRangeMessage(newFloor)));
      }
      setTimeout(() => {
        this.currentFloor = newFloor;
        resolve(this.currentFloor);
      }, this.secondsBetweenFloors * 1000);
    });
  }

  moveUp() {
    return this.move(this.currentFloor + 1);
  }

  moveDown() {
    return this.move(this.currentFloor - 1);
  }
}

export default Elevator;
