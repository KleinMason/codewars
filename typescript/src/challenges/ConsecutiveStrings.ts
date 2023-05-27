export function longestConsecutive(stringArray: string[], k: number): string {
  const len: number = stringArray.length;
  if (len === 0 || k > len || k < 0)
    return '';
  let startIndex = 0;
  let lengths = stringArray.map(s => s.length);
  for (let i = 0; i < lengths.length - (k === 1 ? 0 : k); i++) {
    
  }
}