export const isNumber = (string: unknown) => {
  const num = Number(string);

  return string !== "" && !isNaN(num) && isFinite(num);
};

export const getInputValue = (value: unknown[] = [], fieldsCount: number) => {
  const res = new Array(fieldsCount).fill("").map((_, idx) => {
    const num = value[idx];

    return isNumber(num) ? num : "";
  });

  return res;
};

// const tests = [
//   {
//     value: ["1", "2", "3", "4", "5"],
//     expect: ["1", "2", "3", "4", "5"],
//   },
//   {
//     value: ["1", "2", "3"],
//     expect: ["1", "2", "3", "", ""],
//   },
//   {
//     value: ["1", , , "4", "5"],
//     expect: ["1", "", "", "4", "5"],
//   },
//   {
//     value: ["1", undefined, "4", "5"],
//     expect: ["1", "", "4", "5", ""],
//   },
//   {
//     value: ["1", undefined, "AA", "5"],
//     expect: ["1", "", "", "5", ""],
//   },
// ];

// tests.forEach(({ value, expect }) => {
//   const result = getInputValue(value, 5);
//   console.log(JSON.stringify(result) === JSON.stringify(expect));
// });
