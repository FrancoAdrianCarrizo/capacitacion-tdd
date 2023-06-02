import { MarsRover } from "../src/marsRover";

describe("MarsRover", () => {
  it("should create a new MarsRover", () => {
    const marsRover = new MarsRover(0, 0, "N");
    expect(marsRover).toBeDefined();
  });

  it("shold show MarsRovers position", () => {
    const marsRover = new MarsRover(0, 0, "N");
    expect(marsRover.position.x).toBe(0);
    expect(marsRover.position.y).toBe(0);
  });

  it("compare MarsRovers position", () => {
    const marsRover = new MarsRover(0, 0, "N");
    const equalPositions = marsRover.comparePosition({ x: 0, y: 0 });
    expect(equalPositions).toBe(true);
  });

  it("should move a MarsRover to East", () => {
    const marsRover = new MarsRover(0, 0, "N");
    marsRover.move("E", 1);
    expect(marsRover.position.x).toBe(1);
    expect(marsRover.position.y).toBe(0);
  });

  it("should move a MarsRover to West", () => {
    const marsRover = new MarsRover(0, 0, "N");
    marsRover.move("W", 1);
    expect(marsRover.position.x).toBe(-1);
    expect(marsRover.position.y).toBe(0);
  });

  it("should move a MarsRover to North", () => {
    const marsRover = new MarsRover(0, 0, "N");
    marsRover.move("N", 1);
    expect(marsRover.position.x).toBe(0);
    expect(marsRover.position.y).toBe(1);
  });

  it("should move a MarsRover to South", () => {
    const marsRover = new MarsRover(0, 0, "N");
    marsRover.move("S", 1);
    expect(marsRover.position.x).toBe(0);
    expect(marsRover.position.y).toBe(-1);
  });

  it("should turn a MarsRover to East", () => {
    const marsRover = new MarsRover(0, 0, "N");
    marsRover.turn("R");
    expect(marsRover.direction).toBe("E");
  });
});
