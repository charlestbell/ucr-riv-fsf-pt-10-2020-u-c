const Algo = require("../algo");

describe("Algo", () => {
  describe("reverse", () => {
    it("Should reverse a string", () => {
      const string = "Hello";
      const reversedString = "elleH";
      const obj = new Algo();
      expect(obj.reverse(string).toEqual(reversedString));
    });
  });

  describe("isPalindrome", () => {
    it("Should return true if a string is a palindrome", () => {
      const string = "racecar";
      const obj = new Algo();
      expect(obj.isPalindrome(string).toBeTruthy());
    });
    it("Should return false if a string is not a palindrome", () => {
      const string = "Hello";
      obj = new Algo();
      expect(obj.isPalindrome(string).toBeFalsy());
    });
  });

  describe("capitalize", () => {
    it("Should capitalize a string", () => {
      const string = "Hello";
      const capitalizedString = "HELLO";
      obj = new Algo();
      expect(obj.capitalize(string).toEqual(capitalizedString));
    });
  });
});
