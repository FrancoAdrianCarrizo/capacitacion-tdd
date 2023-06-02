export enum IDirection {
  North = "N",
  East = "E",
  South = "S",
  West = "W",
}

export enum ICommand {
  Forward = "F",
  Backward = "B",
  Left = "L",
  Right = "R",
}

export interface IPosition {
  x: number;
  y: number;
  direction: IDirection;
}

export class MarsRover {
  position: IPosition = {
    x: 0,
    y: 0,
    direction: IDirection.North,
  };

  constructor({ x, y, direction }: IPosition) {
    this.position.x = x;
    this.position.y = y;
    this.position.direction = direction;
  }

  move(commands: ICommand[]) {
    for (let i = 0; i < commands.length; i++) {
      this.turn(commands[i]);
    }
  }

  turn(command: ICommand) {
    switch (command) {
      case ICommand.Left:
        this.turnLeft();
        break;
      case ICommand.Right:
        this.turnRight();
        break;
      case ICommand.Forward:
        this.moveForward();
        break;
      case ICommand.Backward:
        this.moveBackward();
        break;
      default:
        throw new Error("Invalid command");
    }
  }

  turnRight() {
    switch (this.position.direction) {
      case IDirection.North:
        this.position.direction = IDirection.East;
        break;
      case IDirection.East:
        this.position.direction = IDirection.South;
        break;
      case IDirection.South:
        this.position.direction = IDirection.West;
        break;
      case IDirection.West:
        this.position.direction = IDirection.North;
        break;
    }
  }

  turnLeft() {
    switch (this.position.direction) {
      case IDirection.North:
        this.position.direction = IDirection.West;
        break;
      case IDirection.East:
        this.position.direction = IDirection.North;
        break;
      case IDirection.South:
        this.position.direction = IDirection.East;
        break;
      case IDirection.West:
        this.position.direction = IDirection.South;
        break;
    }
  }

  moveForward() {
    switch (this.position.direction) {
      case IDirection.North:
        this.position.y++;
        break;
      case IDirection.East:
        this.position.x++;
        break;
      case IDirection.South:
        this.position.y--;
        break;
      case IDirection.West:
        this.position.x--;
        break;
    }
  }

  moveBackward() {
    switch (this.position.direction) {
      case IDirection.North:
        this.position.y--;
        break;
      case IDirection.East:
        this.position.x--;
        break;
      case IDirection.South:
        this.position.y++;
        break;
      case IDirection.West:
        this.position.x++;
        break;
    }
  }

  comparePosition({ x, y, direction }: IPosition) {
    return (
      this.position.x === x &&
      this.position.y === y &&
      this.position.direction === direction
    );
  }
}
