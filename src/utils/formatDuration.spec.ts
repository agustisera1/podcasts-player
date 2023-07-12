import { formatDuration } from "./formatDuration";

describe("formatDuration util", () => {
  const cases = [
    { value: 1000, expected: "00:00:01" },
    { value: 60000, expected: "00:01:00" },
    { value: 3600000, expected: "01:00:00" },
    { value: 3601000, expected: "01:00:01" },
    { value: 3660000, expected: "01:01:00" },
    { value: 3661000, expected: "01:01:01" },
  ];

  cases.forEach(({ value, expected }) => {
    it("Should return the expected format", () => {
      expect(formatDuration(value)).toBe(expected);
    });
  });
});
