import { ICommand, IDirection, IPosition, MarsRover } from "../src/marsRover";

describe("MarsRover", () => {
  const INIT_POSITION: IPosition = {
    x: 0,
    y: 0,
    direction: IDirection.North,
  };

  it("should create a new MarsRover", () => {
    const marsRover = new MarsRover(INIT_POSITION);
    expect(marsRover).toBeDefined();
  });

  it("compare MarsRovers position", () => {
    const marsRover = new MarsRover(INIT_POSITION);
    const equalPositions = marsRover.comparePosition(INIT_POSITION);
    expect(equalPositions).toBe(true);
  });

  it("should turn left", () => {
    const marsRover = new MarsRover(INIT_POSITION);
    marsRover.move([ICommand.Left]);
    const newPosition: IPosition = {
      x: 0,
      y: 0,
      direction: IDirection.West,
    };
    const equalPositions = marsRover.comparePosition(newPosition);
    expect(equalPositions).toBe(true);
  });

  it("should turn right", () => {
    const marsRover = new MarsRover(INIT_POSITION);
    marsRover.move([ICommand.Right]);
    const newPosition: IPosition = {
      x: 0,
      y: 0,
      direction: IDirection.East,
    };
    const equalPositions = marsRover.comparePosition(newPosition);
    expect(equalPositions).toBe(true);
  });

  it("should move forward", () => {
    const marsRover = new MarsRover(INIT_POSITION);
    marsRover.move([ICommand.Forward]);
    const newPosition: IPosition = {
      x: 0,
      y: 1,
      direction: IDirection.North,
    };
    const equalPositions = marsRover.comparePosition(newPosition);
    expect(equalPositions).toBe(true);
  });

  it("should move backward", () => {
    const marsRover = new MarsRover(INIT_POSITION);
    marsRover.move([ICommand.Backward]);
    const newPosition: IPosition = {
      x: 0,
      y: -1,
      direction: IDirection.North,
    };
    const equalPositions = marsRover.comparePosition(newPosition);
    expect(equalPositions).toBe(true);
  });
});

describe("run with commands", () => {
  const INIT_POSITION: IPosition = {
    x: 1,
    y: 1,
    direction: IDirection.North,
  };
  it("run with commands 'fb'", () => {
    const marsRover = new MarsRover(INIT_POSITION);
    marsRover.move([ICommand.Forward, ICommand.Backward]);

    const expectedPosition: IPosition = {
      x: 1,
      y: 1,
      direction: IDirection.North,
    };

    const equalPositions = marsRover.comparePosition(expectedPosition);
    expect(equalPositions).toBe(true);
  });

  it("run with commands 'lfr'", () => {
    const marsRover = new MarsRover(INIT_POSITION);
    const commands: ICommand[] = [
      ICommand.Left,
      ICommand.Forward,
      ICommand.Right,
    ];
    marsRover.move(commands);
    const expectedPosition: IPosition = {
      x: 0,
      y: 1,
      direction: IDirection.North,
    };
    const equalPositions = marsRover.comparePosition(expectedPosition);
    expect(equalPositions).toBe(true);
  });

  it("run with commands 'ffrfflfrff'", () => {
    const marsRover = new MarsRover(INIT_POSITION);
    const commands: ICommand[] = [
      ICommand.Forward,
      ICommand.Forward,
      ICommand.Right,
      ICommand.Forward,
      ICommand.Forward,
      ICommand.Left,
      ICommand.Forward,
      ICommand.Right,
      ICommand.Forward,
      ICommand.Forward,
    ];
    marsRover.move(commands);
    const EXPECTED_POSITION: IPosition = {
      x: 5,
      y: 4,
      direction: IDirection.East,
    };
    const equalPositions = marsRover.comparePosition(EXPECTED_POSITION);
    expect(equalPositions).toBe(true);
  });

  it("run with commands fbblrr", () => {
    const marsRover = new MarsRover(INIT_POSITION);
    const commands: ICommand[] = [
      ICommand.Forward,
      ICommand.Backward,
      ICommand.Backward,
      ICommand.Left,
      ICommand.Right,
      ICommand.Right,
    ];
    marsRover.move(commands);
    const EXPECTED_POSITION: IPosition = {
      x: 1,
      y: 0,
      direction: IDirection.East,
    };
    const equalPositions = marsRover.comparePosition(EXPECTED_POSITION);
    expect(equalPositions).toBe(true);
  });
});
