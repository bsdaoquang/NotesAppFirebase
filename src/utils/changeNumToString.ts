export const changeNumToString = (num: number) =>
  `${num < 10 ? `0${num}` : `${num}`}`;
