const DayCare = require("../dayCare");
const Child = require("../child");

describe("DayCare", () => {
  it("Initialization", () => {
    const dayCare = new DayCare({});

    expect(dayCare).toEqual({ children: [], capacity: 3, ageLimit: 6 });
  });
  it("Can add a child to the children array with a method", () => {
    const child = new Child("jon", 3);
    let dayCare = new DayCare();
    dayCare.addChild(child);
    expect(dayCare.children.length).toEqual(1);
    expect(dayCare.children[0]).toEqual(child);
  });
  it("Should not add a child over the age limit", () => {
    const child = new Child("jon", 7);
    let dayCare = new DayCare();
    dayCare.addChild(child);
    result = dayCare.children[0];
    expect(result).toBeFalsy();
  });
  it("Should not allow more than 3 children to be added", () => {
    const child = new Child("jon", 3);
    let dayCare = new DayCare();
    //Add 5 children
    for (let i = 0; i < 4; i++) {
      dayCare.addChild(child);
    }
    dayCare.addChild(child);
    result = dayCare.children.length;
    expect(result).toEqual(3);
  });
  it("Should be able to remove a child with a pickup method", () => {
    const child = new Child("jon", 3);
    let dayCare = new DayCare();
    dayCare.addChild(child);
    dayCare.pickupChild("jon");
    result = dayCare.children.length;
    expect(result).toEqual(0);
  });
  it("Should not remove any children if the child does not exist", () => {
    const child = new Child("jon", 3);
    let dayCare = new DayCare();
    dayCare.addChild(child);
    dayCare.pickupChild("susan");
    result = dayCare.children.length;
    expect(result).toEqual(1);
  });
});
