import { sum } from "./sum.js";

describe("Sum Suite", () => {
  describe("Results", () => {
    it("should add 1+3 and return 4", () => {
      expect(sum(1, 3)).toBe(4);
    });

    it("should add -3 + -3 and return -6", () => {
      expect(sum(-3, -3)).toBe(-6);
    });

    it("should accept more than two values", () => {
      expect(sum(0, 1, 2, 3, 4, 5)).toBe(15);
    });
  });

  describe("Errors", () => {
    it("should complain if no values are passed", () => {
      expect(() => sum()).toThrow(/invalid/gi);
    });

    it("should not complain if zero is passed", () => {
      expect(() => sum(3, 0)).not.toThrow();
    });

    it("should complain if any value is undefined", () => {
      expect(() => sum(undefined, 0)).toThrow();
    });

    it("should complain if non-numeric values are passed", () => {
      expect(() => sum(1, "edin")).toThrow();
    });
  });
});
