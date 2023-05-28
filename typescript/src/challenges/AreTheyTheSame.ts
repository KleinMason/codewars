export function comp(a1: number[] | null, a2: number[] | null): boolean {
  if (!a1 || !a2) return false;
  let dict: {[key: number]: number} = {};
  a1.forEach(n => {
    if (!dict[n]) {
      dict[n] = 1;
    } else {
      dict[n]++;
    }
  });
  a2.forEach(n => {
    let sqr: number = Math.sqrt(n);
    if (--dict[sqr] < 0)
      return false;
  });
  return !!Object.values<number>(dict).every(n => n === 0);
}
