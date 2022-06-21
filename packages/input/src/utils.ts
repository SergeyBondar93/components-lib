export function isNumber(string: string) {
  const num = Number(string);

  return string !== "" && !isNaN(num) && isFinite(num);
}

export const getInputValue = (
  value: string[] = [],
  fieldsCount: number
): string[] => {
  const res = new Array(fieldsCount).fill("").map((_, idx) => {
    const num = value[idx];

    return isNumber(num as any) ? (num as string) : "";
  });

  return res;
};
