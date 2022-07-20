import { SelectFilterFunction } from "../src";

export const getEnglishLayout = (input: string) => {
  const replacer = {
    q: "й",
    w: "ц",
    e: "у",
    r: "к",
    t: "е",
    y: "н",
    u: "г",
    i: "ш",
    o: "щ",
    p: "з",
    "[": "х",
    "{": "х",
    "]": "ъ",
    "}": "ъ",
    a: "ф",
    s: "ы",
    d: "в",
    f: "а",
    g: "п",
    h: "р",
    j: "о",
    k: "л",
    l: "д",
    ";": "ж",
    ":": "ж",
    "'": "э",
    '"': "э",
    z: "я",
    x: "ч",
    c: "с",
    v: "м",
    b: "и",
    n: "т",
    m: "ь",
    ",": "б",
    "<": "б",
    ".": "ю",
    ">": "ю",
    "/": ".",
    "\\": ".",
    "`": "'",
    "?": ".",
  };

  return input.replace(/[A-z/,.;:"'<>?\]{}[]/g, (letters: string) =>
    letters === letters.toLowerCase()
      ? replacer[letters]
      : replacer[letters.toLowerCase()].toUpperCase()
  );
};

export const customFilterFunction: SelectFilterFunction<{
  label: string;
  value: string;
}> = (searchString, { unselectedOptions }) => {
  const formattedSearchString = getEnglishLayout(searchString).toLowerCase();

  return unselectedOptions.filter((option) => {
    return option.label.toLowerCase().startsWith(formattedSearchString);
  });
};
