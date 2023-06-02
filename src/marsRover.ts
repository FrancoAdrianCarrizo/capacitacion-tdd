type IDirection = "N" | "E" | "S" | "W";
type ITurn = "R" | "L";
type IPosition = {
  x: number;
  y: number;
};

type HashObject = {
  [key in IDirection]: {
    [key in ITurn]: IDirection;
  };
};

const hash: HashObject = {
  N: {
    R: "E",
    L: "W",
  },
  E: {
    R: "S",
    L: "N",
  },
  S: {
    R: "W",
    L: "E",
  },
  W: {
    R: "N",
    L: "S",
  },
};

export class MarsRover {
  position: IPosition = {
    x: 0,
    y: 0,
  };
  direction: IDirection = "N";

  constructor(x: number, y: number, direction: IDirection) {
    this.position.x = x;
    this.position.y = y;
    this.direction = direction;
  }

  move(direction: IDirection, units: number) {
    if (direction === "N") {
      this.position.y += units;
    }
    if (direction === "E") {
      this.position.x += units;
    }
    if (direction === "S") {
      this.position.y -= units;
    }
    if (direction === "W") {
      this.position.x -= units;
    }
    return this;
  }

  comparePosition({ x, y }: IPosition) {
    if (this.position.x === x && this.position.y === y) {
      return true;
    } else {
      return false;
    }
  }

  turn(turn: ITurn) {
    this.direction = hash[this.direction][turn];
    return this;
  }
}
