export const calcClamp = (minValue: number, maxValue: number) => {
  let diff = maxValue - minValue;
  let interval = 1512 - 320;

  let slope = diff / interval;
  let vw = slope * 100;

  let offset = minValue - (vw * 320) / 100;

  return `${minValue}px, ${vw}vw + ${offset}px, ${maxValue}px`;
};
