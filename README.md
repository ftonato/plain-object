# plain-object

> Convert nested JSON to simple plain JSON object

## Install

```sh
npm install plain-object
```

## Usage

```js
const plainObject = require("plain-object");

plainObject({
  one: {
    one: "1",
  },
});
//=> { one: '1' }

plainObject({
  a: {
    a: true,
    b: {
      b: new Map(),
    },
  },
});
//=> { a: true, b: Map {  } }'

// Given a "weird" structure like this:

plainObject({
  one: {
    one: "1",
    two: {
      two: true,
      three: {
        three: 1,
        four: {
          four: [1, 2, 3],
          five: {
            five: new Date(),
            six: {
              six: function () {
                return "seven";
              },
              seven: {
                seven: new Map(),
                eight: {
                  eight: new Set(),
                  nine: {
                    nine: BigInt(Number.MAX_SAFE_INTEGER + 1),
                    ten: {
                      ten: Symbol("Sym"),
                      eleven: {
                        eleven: Buffer.from("ftonato", "utf-8"),
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
});

// You will get this simple and clean object:

//=> { one: '1',
//=>   two: true,
//=>   three: 1,
//=>   four: [ 1, 2, 3 ],
//=>   five: Wed Mar 02 2022 20:04:04 GMT+0000 (Western European Standard Time),
//=>   six: [λ: six],
//=>   seven: Map {  },
//=>   eight: Set {  },
//=>   nine: 1,
//=>   ten: Symbol(Sym),
//=>   eleven: <Buffer 66 74 6f 6e 61 74 6f> }
```
