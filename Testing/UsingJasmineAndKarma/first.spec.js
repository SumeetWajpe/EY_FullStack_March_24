function Add(x, y) {
  return x + y;
}

describe("A suite is just a function", function () {
  let a;

  it("and so is a spec", function () {
    a = true;

    expect(a).toBe(true);
  });
});
// fit - focus / xit - exclude
describe("An addition suite", () => {
  beforeEach(() => {
    console.log("Before Each Called !");
  });
  beforeAll(() => {
    console.log("Before All Called !");
  });
  it("adds two numbers", () => {
    let result;
    result = Add(20, 30);
    expect(result).toBe(50);
  });
  it("adds two strings", () => {
    let result;
    result = Add("Hello", "World");
    expect(result).toBe("HelloWorld");
  });
  it("adds two strings", () => {
    let result;
    result = Add("Hello", "World");
    expect(result).toBe("HelloWorld");
  });
  it("adds two strings", () => {
    let result;
    result = Add("Hello", "World");
    expect(result).toBe("HelloWorld");
  });
});
