import { RootState, store } from "../store";
import { brandsSelector, filtersSelector, maxPriceSelector, minPriceSelector, producersSelector, sortSelector } from "./categorySelectors";

describe("category slice selectors", () => {
  test("sort selector", () => {
    const state: RootState = {
      ...store.getState(),
      category: {
        ...store.getState().category,
        sort: "price down"
      }
    }

    expect(sortSelector(state)).toEqual("price down");
  });

  test("filters selector", () => {
    const state: RootState = {
      ...store.getState(),
      category: {
        ...store.getState().category,
        filters: ["a", "ab"]
      }
    }

    expect(filtersSelector(state)).toStrictEqual(["a", "ab"]);
  });

  test("min and max price selectors", () => {
    const state: RootState = {
      ...store.getState(),
      category: {
        ...store.getState().category,
        selectors: {
          ...store.getState().category.selectors,
          price: {
            min: 120,
            max: 255
          }
        }
      }
    }

    expect(minPriceSelector(state)).toEqual(120);
    expect(maxPriceSelector(state)).toEqual(255);
  });

  test("producers selector", () => {
    const state: RootState = {
      ...store.getState(),
      category: {
        ...store.getState().category,
        selectors: {
          ...store.getState().category.selectors,
          producer: ["a", "b"]
        }
      }
    }

    expect(producersSelector(state)).toStrictEqual(["a", "b"]);
  });

  test("brands selector", () => {
    const state: RootState = {
      ...store.getState(),
      category: {
        ...store.getState().category,
        selectors: {
          ...store.getState().category.selectors,
          brand: ["aaa", "bbb", "ccc"]
        }
      }
    }

    expect(brandsSelector(state)).toStrictEqual(["aaa", "bbb", "ccc"]);
  });
})