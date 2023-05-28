export function wave(word: string): Array<string> {
  let wave: string[] = []; 
  for (let i = 0; i < word.length; i++) {
    if (word.charAt(i) === ' ') continue;
    wave.push(word.slice(0, i) + word.charAt(i).toUpperCase() + word.slice(i + 1));
  }
  return wave;
}
