import { formatDate } from "./formatDate";

describe("formatDate util", () => {
  const cases = [
    { value: "2023-06-14T02:00:00-07:00", expected: "3/5/2023" },
    { value: "2023-06-14T02:00:00+07:00", expected: "2/5/2023" },
    { value: "brokenDate", expected: "Invalid date" },
  ];

  cases.forEach(({ value, expected }) => {
    it("Should return the expected format", () => {
      expect(formatDate(value)).toBe(expected);
    });
  });
});
