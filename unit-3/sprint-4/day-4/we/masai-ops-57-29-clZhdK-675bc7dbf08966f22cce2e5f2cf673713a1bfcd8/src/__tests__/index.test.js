import cascadeResults from "../index";

global.score = 1;

describe("testing Array methods implementation", () => {
  it("Should have defined cascadeResults function", () => {
    expect(cascadeResults).toBeDefined();
    let res = cascadeResults(
      (x) => x * 3,
      (x) => x + 1,
      (x) => x / 2
    );
    expect(typeof res).toBe("function");
    expect(typeof res(3)).toBe("number");
    expect(res(5)).toBe(8);
    global.score += 2;
  });
  it("Should return expected results for data 1", () => {
    let res = cascadeResults(
      (x) => x * 3,
      (x) => x + 1,
      (x) => x / 2,
      (x) => x - 1
    );

    expect(res(5)).toBe(7);
    expect(res(11)).toBe(16);
    expect(res(17)).toBe(25);

    global.score += 2;
  });
  it("Should return expected results for data 2", () => {
    let res = cascadeResults(
      (x) => x * 2,
      (x) => x + 4,
      (x) => x / 2,
      (x) => x - 1
    );

    expect(res(5)).toBe(6);
    expect(res(11)).toBe(12);
    expect(res(17)).toBe(18);

    global.score += 2;
  });
  it("Should return expected results for data 3", () => {
    let res = cascadeResults(
      (x) => x * 4,
      (x) => x + 2,
      (x) => x / 2,
      (x) => x + 3,
      (x) => x - 2
    );

    expect(res(5)).toBe(12);
    expect(res(11)).toBe(24);
    expect(res(17)).toBe(36);

    global.score += 3;
  });
});

afterAll(() => {
  console.log("Final Score is", global.score);
});
