const plainObject = require("./index.js");
const { MOCK, MOCK_DATE } = require("./mock.js");

describe("plainObject", () => {
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
    const bigint = BigInt(Number.MAX_SAFE_INTEGER + 1);

    const data = {
      one: {
        one: bigint,
        two: {
          two: false,
        },
      },
    };

    const expected = {
      one: bigint,
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
      nine: BigInt(Number.MAX_SAFE_INTEGER + 1).toString(),
      ten: Symbol("Sym"),
    };

    const result = plainObject(MOCK);
    result.nine = BigInt(Number.MAX_SAFE_INTEGER + 1).toString();

    expect(JSON.stringify(result)).toEqual(JSON.stringify(expected));
  });
});
