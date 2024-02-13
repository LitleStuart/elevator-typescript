interface IElevator {
  readonly capacity: number;
  currentFloor: number;
  minFloor: number;
  maxFloor: number;
  moveUp(): number | Promise<number>;
  moveDown(): number | Promise<number>;
}
export default IElevator;
