const plainObject = require("./index.ts");

import {
  MOCK,
  MOCK_DATE,
  MOCK_BIGINT,
  MOCK_BUFFER,
  MOCK_REGEXP,
  MOCK_PROMISE,
} from "./mock";

describe("[plain-object pkg] plainObject method", () => {
  it("plain object using [string]", () => {
    const data = {
      one: {
        one: "1",
        two: {
          two: "two",
        },
      },
    };

    const expected = {
      one: "1",
      two: "two",
    };
    expect(plainObject(data)).toEqual(expected);
  });

  it("plain object using [number]", () => {
    const data = {
      one: {
        one: 1,
        two: {
          two: 123,
        },
      },
    };

    const expected = {
      one: 1,
      two: 123,
    };
    expect(plainObject(data)).toEqual(expected);
  });

  it("plain object using [boolean]", () => {
    const data = {
      one: {
        one: true,
        two: {
          two: false,
        },
      },
    };

    const expected = {
      one: true,
      two: false,
    };
    expect(plainObject(data)).toEqual(expected);
  });

  it("plain object using [array]", () => {
    const data = {
      one: {
        one: [1, 2, 3],
        two: {
          two: [3],
          three: {
            three: [],
          },
        },
      },
    };

    const expected = {
      one: [1, 2, 3],
      two: [3],
      three: [],
    };
    expect(plainObject(data)).toEqual(expected);
  });

  it("plain object using [date]", () => {
    const date = new Date();
    const month = date.getMonth() + 1;

    const data = {
      one: {
        one: date,
        two: {
          two: month,
        },
      },
    };

    const expected = {
      one: date,
      two: month,
    };
    expect(plainObject(data)).toEqual(expected);
  });

  it("plain object using [function]", () => {
    const fn = function () {
      return "fn";
    };

    const data = {
      one: {
        one: fn,
        two: {
          two: false,
        },
      },
    };

    const expected = {
      one: fn,
      two: false,
    };
    expect(plainObject(data)).toEqual(expected);
  });

  it("plain object using [map/set]", () => {
    const map = new Map();
    const set = new Set();
    map.set("key", "value");
    set.add("value");

    const data = {
      one: {
        one: map,
        two: {
          two: set,
        },
      },
    };

    const expected = {
      one: map,
      two: set,
    };
    expect(plainObject(data)).toEqual(expected);
  });

  it("plain object using [bigint]", () => {
    const data = {
      one: {
        one: MOCK_BIGINT,
        two: {
          two: false,
        },
      },
    };

    const expected = {
      one: MOCK_BIGINT,
      two: false,
    };
    expect(plainObject(data)).toEqual(expected);
  });

  it("plain object using [symbol]", () => {
    const sym = Symbol("Sym");

    const data = {
      one: {
        one: false,
        two: {
          two: sym,
        },
      },
    };

    const expected = {
      one: false,
      two: sym,
    };
    expect(plainObject(data)).toEqual(expected);
  });

  it("plain object using [buffer]", () => {
    const data = {
      one: {
        one: [1, 2, 3],
        two: {
          two: MOCK_BUFFER,
        },
      },
    };

    const expected = {
      one: [1, 2, 3],
      two: MOCK_BUFFER,
    };
    expect(plainObject(data)).toEqual(expected);
  });

  it("plain object using [regexp]", () => {
    const data = {
      one: {
        one: [1, 2, 3],
        two: {
          two: MOCK_REGEXP,
        },
      },
    };

    const expected = {
      one: [1, 2, 3],
      two: MOCK_REGEXP,
    };
    expect(plainObject(data)).toEqual(expected);
  });

  it("plain object using [promise]", () => {
    const data = {
      one: {
        one: new Set(),
        two: {
          two: MOCK_PROMISE,
        },
      },
    };

    const expected = {
      one: new Set(),
      two: MOCK_PROMISE,
    };
    expect(plainObject(data)).toEqual(expected);
  });

  it("plain object using all types", () => {
    const expected = {
      one: "1",
      two: true,
      three: 1,
      four: [1, 2, 3],
      five: MOCK_DATE,
      six: function () {
        return "seven";
      },
      seven: new Map(),
      eight: new Set(),
      nine: MOCK_BIGINT.toString(),
      ten: Symbol("Sym"),
      eleven: MOCK_BUFFER,
      twelve: MOCK_REGEXP,
      thirteen: MOCK_PROMISE,
    };

    const result = plainObject(MOCK);
    result.nine = MOCK_BIGINT.toString();

    expect(JSON.stringify(result)).toEqual(JSON.stringify(expected));
  });
});
