import categoryReducer, {
  setSort, setPrice, setProducers, setBrands, toggleFilter, clearAllFilters, initialState
} from "../categorySlice";

describe("category slice test", () => {
  test("returns initial state when no action passed", () => {
    const result = categoryReducer(undefined, { type: "" });

    expect(result).toStrictEqual(initialState);
  });

  test("sets sort", () => {
    const action = { type: setSort.type, payload: "name up" };

    const result = categoryReducer(initialState, action);

    expect(result).toHaveProperty("sort", action.payload);
  })

  test("sets price", () => {
    const action = { type: setPrice.type, payload: { min: 10, max: 650 } };

    const result = categoryReducer(initialState, action);

    expect(result).toHaveProperty(["selectors", "price"], action.payload);
  })

  test("sets producers", () => {
    const action = { type: setProducers.type, payload: ["a", "b", "c"] };

    const result = categoryReducer(initialState, action);

    expect(result).toHaveProperty(["selectors", "producer"], action.payload);
  })

  test("sets brands", () => {
    const action = { type: setBrands.type, payload: ["a", "aa"] };

    const result = categoryReducer(initialState, action);

    expect(result).toHaveProperty(["selectors", "brand"], action.payload);
  })

  test("sets filter when no such filter in array yet", () => {
    const action = { type: toggleFilter.type, payload: "aaa" };

    const result = categoryReducer(initialState, action);

    expect(result).toHaveProperty("filters", [action.payload]);
  })

  test("removes filter when filter is already in an array", () => {
    const action = { type: toggleFilter.type, payload: "aaa" };

    const result = categoryReducer({ ...initialState, filters: ["aaa"] }, action);

    expect(result).toHaveProperty("filters", []);
  })

  test("clears all filters", () => {
    const action = { type: clearAllFilters.type };

    const result = categoryReducer({...initialState, sort: "price up", filters: ["a", "b"]}, action);

    expect(result).toStrictEqual(initialState);
  })
});