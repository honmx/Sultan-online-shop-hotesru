import { isFilterType } from "./isFilterType"

describe("is filter type tests", () => {
  test("empty string", () => {
    const result = isFilterType("");
    expect(result).toBeDefined();
    expect(result).toBeFalsy();
  });

  test("random string", () => {
    const result = isFilterType("aaaaa");
    expect(result).toBeDefined();
    expect(result).toBeFalsy();
  });

  test("filter type string", () => {
    const result = isFilterType("cosmetics-and-hygiene");
    expect(result).toBeDefined();
    expect(result).toBeTruthy();
  });
})