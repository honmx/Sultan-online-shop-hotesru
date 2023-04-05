import { countAppearings } from "./countAppearings"

describe("count appearings test", () => {
  
  test("empty array", () => {
    const result = countAppearings([]) 
    expect(result).toBeDefined();
    expect(result).toStrictEqual({});
  });

  test("array with some unique numbers", () => {
    const result = countAppearings([1, 2, 3]);
    expect(result).toStrictEqual({"1": 1, "2": 1, "3": 1});
  });

  test("array with some repeating numbers", () => {
    const result = countAppearings([1, 1, 2, 1, 3, 2, 1]);
    expect(result).toStrictEqual({"1": 4, "2": 2, "3": 1});
  });

  test("array with some unique strings", () => {
    const result = countAppearings(["a", "b", "c", "d"]);
    expect(result).toStrictEqual({"a": 1, "b": 1, "c": 1, "d": 1});
  });

  test("array with some repeating strings", () => {
    const result = countAppearings(["a", "b", "a", "a", "c", "ddd"]);
    expect(result).toStrictEqual({"a": 3, "b": 1, "c": 1, "ddd": 1});
  });
})