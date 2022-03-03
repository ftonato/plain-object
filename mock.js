const MOCK_DATE = new Date();
const MOCK_BIGINT = BigInt(Number.MAX_SAFE_INTEGER + 1);
const MOCK_BUFFER = Buffer.from("ftonato", "utf-8");

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
                    nine: MOCK_BIGINT,
                    ten: {
                      ten: Symbol("Sym"),
                      eleven: {
                        eleven: MOCK_BUFFER,
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
  MOCK_BIGINT,
  MOCK_BUFFER,
};
