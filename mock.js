const MOCK_DATE = new Date();
const MOCK = {
  one: {
    one: "1",
    two: {
      two: true,
      three: {
        three: 1,
        four: {
          four: [1, 2, 3],
          five: {
            five: MOCK_DATE,
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
                        eleven: {},
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
};

module.exports = {
  MOCK,
  MOCK_DATE,
};
