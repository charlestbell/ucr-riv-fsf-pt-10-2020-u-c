const Child = require("../child");

describe("Child", () => {
  it("should export an object", () => {
    const obj = new Child("Jon", 1);
    expect("name" in obj).toBeTruthy();
  });
  it("Should throw an error if name is empty", () => {
    expect(() => {
      new Child("", 1);
    }).toThrow();
  });
  it("Should throw an error if age is NaN or less than 0", () => {
    expect(() => {
      new Child("Jon", "");
    }).toThrow();
  });
});
