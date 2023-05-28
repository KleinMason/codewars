// https://www.codewars.com/kata/555eded1ad94b00403000071/train/typescript

export function SeriesSum(n: number): string {
  let sum: number = 0;
  for (let i = 0; i < n; i++) {
    sum += 1 / (1 + (3 * i));
  }
  return sum.toFixed(2);
}